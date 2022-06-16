export interface mgmtexp {
    
    mgmtempid: bigint;
    org: string;
    typeofexp: string;
    expdate: string;
    amt: bigint;
    approvedby: bigint;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:bigint;

}
export interface Createmgmtexp {
    
    mgmtempid: bigint;
    org: string;
    typeofexp: string;
    expdate: string;
    amt: bigint;
    approvedby: bigint;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:bigint;
}

export interface Updatemgmtexp {
   
    mgmtempid?: bigint;
    org?: string;
    typeofexp?: string;
    expdate?: string;
    amt?: bigint;
    approvedby?: bigint;
    approvaldate?:string;
    modeofpayment?:string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:bigint;

}