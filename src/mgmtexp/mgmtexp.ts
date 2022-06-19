export interface mgmtexp {
    
    mgmtempid: number;
    org: string;
    typeofexp: string;
    expdate: string;
    amt: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;

}
export interface Createmgmtexp {
    
    mgmtempid: number;
    org: string;
    typeofexp: string;
    expdate: string;
    amt: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
}

export interface Updatemgmtexp {
   
    mgmtempid?: number;
    org?: string;
    typeofexp?: string;
    expdate?: string;
    amt?: number;
    approvedby?: number;
    approvaldate?:string;
    modeofpayment?:string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:number;

}