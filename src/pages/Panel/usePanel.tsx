import { useEffect, useState } from "react";
import {getDatasheetService} from '@/service/getDatasheet';
import { useParams } from "react-router-dom";
import { DatasheetProps, ExpensesProps, UserProps } from "./PanelProps";




export const usePanel = () => {

    const [datasheet, setDatasheet] = useState<DatasheetProps|null>(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    let abortController:AbortController

    const { urlCode } = useParams();

    const getDatasheet = async () => {
        if(urlCode){
            abortController = new AbortController()
            setLoading(true)
            try {
                
                const res = await getDatasheetService(urlCode, abortController)
                setDatasheet(res.message)
                setError('')
                setLoading(false)

            } catch (e:any) {

                if(e.name==='AbortError'){
                    console.log('Request cancelled')
                }else {
                    setError('Error en el panel')
                }
                
            }finally{
                setLoading(false)
            }
        }
    } 


    useEffect(()=>{
        
        getDatasheet()
        
        return ()=>abortController.abort()
	},[urlCode])


    return { datasheet, getDatasheet, error, loading };
};

export default usePanel