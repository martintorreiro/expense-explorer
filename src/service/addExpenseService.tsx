import { AddExpenseProps } from "@/pages/Panel/PanelProps";
import { fetchService } from "./fetchService";

export const addExpenseService = async ( expense:AddExpenseProps, authToken:string) => {
   console.log('serviceeee',expense, authToken)
    const response = await fetchService({ url:`addExpense`, method:'POST', authToken, body: expense })
    return response;

  };