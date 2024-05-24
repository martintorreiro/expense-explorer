import { useState } from "react";

export interface fetchProps {
    (url:string,
    method?: 'GET'|'POST',
    body?: object ):any
}

export const useFetchApi = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let abortController:any

  const fetchApi:fetchProps = async (url, method='GET', body) => {
    setError('')
    setLoading(true)
    abortController = new AbortController()
    console.log('fetch')

    try {
     
      const response = await fetch(`http://192.168.1.14:3100/${url}`, {
        signal: abortController.signal,
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })

      const dataRes = await response.json()
      console.log('fetch',dataRes)
      setData(dataRes.message)
      
    } catch (error:any) {
      console.log(error)
      if(error.name==='AbortError'){
        console.log('Request cancelled')
      }else setError(error.message)

    }finally{setLoading(false)}

    return data

  }

  const abortFetch = () => {
    abortController.abort()
  }


  return { data, error, loading, fetchApi, abortFetch};
};

export default useFetchApi