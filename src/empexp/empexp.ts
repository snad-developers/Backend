export interface empexp{
    employeeid: number;
    entity: string;
    startdate: string;
    enddate: string;
    expensecode: string;
    expensedate: string;
    clientcode:number;
    amount:number;
    approvedby:number;
    approvaldate:string;
    modeofpayment: string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
    updatedby:number;
    

}
export interface Createempexp {
    employeeid: number;
    entity: string;
    startdate: string;
    enddate: string;
    expensecode: string;
    expensedate: string;
    clientcode:number;
    amount:number;
    approvedby:number;
    approvaldate:string;
    modeofpayment: string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
    updatedby:number;
}

export interface Updateempexp {
    employeeid?: number;
    entity?: string;
    startdate?: string;
    enddate?: string;
    expensecode?: string;
    expensedate?: string;
    clientcode?:number;
    amount?:number;
    approvedby?:number;
    approvaldate?:string;
    modeofpayment?: string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:number;
    updatedby?:number;
    
    
}