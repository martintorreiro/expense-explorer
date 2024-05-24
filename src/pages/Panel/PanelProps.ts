export interface UserProps {
    name: string,
    id: number,
}

export interface AddExpenseProps  {
    datasheetId:number,
	concept:string,
    amount: string,
    payerId:number,
    involved:number[]
}

export interface ExpenseProps  {
	concept:string,
    amount: string,
    payerName: string,
    involved:string[],
    dateCreation:string
}

export interface ExpensesProps {
	expenses: ExpenseProps[]
}

export interface DatasheetProps {
    id:number ,
    title:string , 
    description:string , 
    dateCreation: Date , 
    users: UserProps[],
    expenses:ExpenseProps[]
}
