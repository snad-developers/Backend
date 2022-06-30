export interface mgmtexp {
    
    employeeid: number;
    entity: string;
    expensecode: string;
    expdate: string;
    amount: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;

}
export interface Createmgmtexp {
    
    employeeid: number;
    entity: string;
    expensecode: string;
    expdate: string;
    amount: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
}

export interface Updatemgmtexp {
   
    employeeid?: number;
    entity?: string;
    expensecode?: string;
    expdate?: string;
    amount?: number;
    approvedby?: number;
    approvaldate?:string;
    modeofpayment?:string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:number;

}