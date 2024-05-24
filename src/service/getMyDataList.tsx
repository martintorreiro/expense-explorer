import { fetchService } from "./fetchService";

/* export const getMyDataList = async (id:number, abortController:AbortController) => {
    const response = await fetchService({url:`getSharedList/${id}`, abortController : abortController})
    return response;
  }; */

  export const getMyDataList = async ( token:string, abortController:AbortController) => {
    const response = await fetch(`http://192.168.1.14:3100/getSharedList`, {
      signal: abortController.signal,
      method: "GET",
      headers: {
        "Authorization":token,
        "Content-Type": "application/json",
      },
    });
  
    const json = await response.json();
    if (!response.ok) {
      console.log(response)
      const error = new Error(json.message)
      if(response.status===401){
        error.name='sesionExpired'
      }
      throw error
    }
  
    return json.message;
  };