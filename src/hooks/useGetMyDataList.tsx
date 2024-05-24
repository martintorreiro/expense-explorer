import { AuthContext } from "@/context/AuthContext/AuthContext";
import { getMyDataList } from "@/service/getMyDataList";
import {  useContext, useEffect, useState } from "react";

interface dataItemProps {
    title:string,
    description:string,
    dateCreation:string
}



export const useGetMyDataList = () => {

    const [list, setList] = useState<null | dataItemProps[]>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const {logout, token} = useContext(AuthContext)

    let abortController:AbortController

    const getList = async () => {
        if(token){
            setLoading(true)
            abortController = new AbortController()
            setError('')
            try {
                const response = await getMyDataList(token,abortController)

                setLoading(false)
                setList(response)
            } catch (err:any) {
                setLoading(false)
                if(err.name==='sesionExpired'){
                    logout()
                }
                if(err.name==='AbortError'){
                    console.log('Request cancelled')
                }else {
                    setError('Error al cargar los datos de usuario')
                    
                }
                
            }finally{
                
            }
        }
        
       
    }

    
    useEffect(() => {
       
        getList()
        return ()=>abortController.abort() 

    }, [])

  return {list, getList , loading, error}
};

export default useGetMyDataList