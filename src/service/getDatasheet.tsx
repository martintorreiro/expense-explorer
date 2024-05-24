import { fetchService } from "./fetchService";

export const getDatasheetService = async (urlCode:string, abortController:AbortController) => {
  
    const response = await fetchService({url:`getDatasheet/${urlCode}`, abortController : abortController})
    return response;
  };