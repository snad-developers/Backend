export interface mgmtexp {
    
    employeeid: number;
    org: string;
    typeofexp: string;
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
    org: string;
    typeofexp: string;
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
    org?: string;
    typeofexp?: string;
    expdate?: string;
    amount?: number;
    approvedby?: number;
    approvaldate?:string;
    modeofpayment?:string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:number;

}