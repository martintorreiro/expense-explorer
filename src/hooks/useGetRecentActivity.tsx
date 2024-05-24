import { AuthContext } from "@/context/AuthContext/AuthContext";
import { getRecentActivity } from "@/service/getRecentActivity";
import {  useContext, useEffect, useState } from "react";

interface dataItemProps {
    title:string,
    creator:string,
    date:string,
    action:string,
    urlCode:string
}

export const useGetRecentActivity = () => {

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
                const response = await getRecentActivity(token,abortController)

                setLoading(false)
                setList(response.message)
            } catch (err:any) {
                setLoading(false)
                if(err.name==='sesionExpired'){
                    logout()
                }
                if(err.name==='AbortError'){
                    console.log('Request cancelled')
                }else {
                    setError('Error en la carga de datos.')
                    
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

export default useGetRecentActivity