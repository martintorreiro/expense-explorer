import { fetchService } from "./fetchService";

export const createDatasheet = async ( dataSheet:object, users:string[], token:string, abortController:AbortController) => {
    const response = await fetchService({
        url:`newDataSheet`, 
        method:'POST',
        authToken:token,
        abortController : abortController, 
        body:{dataSheet, users}
    })
    return response;
  };