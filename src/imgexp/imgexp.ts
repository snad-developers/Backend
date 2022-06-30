export interface imgexp {
    
    employeeid: number;
    entity: string;
    expensescode: string;
    expdate:string;
    amount: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
    updatedby:number;

}
export interface Createimgexp {
    
    employeeid: number;
    entity: string;
    expensescode: string;
    expdate: string;
    amount: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
    updatedby:number;

}

export interface Updateimgexp {
   
    employeeid?: number;
    entity?: string;
    expensescode?: string;
    expdate?: string;
    amount?: number;
    approvedby?: number;
    approvaldate?:string;
    modeofpayment?:string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:number;
    updatedby?:number;


}