import { AuthContext } from "@/context/AuthContext/AuthContext";
import { createDatasheet } from "@/service/createSharedExpenseSheet";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface datasheetProps {
    title:string,
    description:string|null,
    currency:string
}

export const useCreateDataSheet = () => {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const {token} = useContext(AuthContext)

    const navigate = useNavigate()

    const abortController = new AbortController()

    const createSheet = async (dataSheet:datasheetProps, users:string[]) => {
        console.log('submit',token)
        if(token){

            setLoading(true)

            try { 
                const response = await createDatasheet(dataSheet, users, token, abortController)
                navigate(`/${response.urlCode}`)
                setError('')

            } catch (e:any) {

                setError(e.message)

            }finally{

                setLoading(false)

            }
        }
 
           
    }

  return {createSheet, loading, error}
};

export default useCreateDataSheet