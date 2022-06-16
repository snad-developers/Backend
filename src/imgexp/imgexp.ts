export interface imgexp {
    
    mgmtempid: bigint;
    org: string;
    typeofexp: string;
    expdate:string;
    amt: bigint;
    approvedby: bigint;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:bigint;
    updatedby:bigint;

}
export interface Createimgexp {
    
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
    updatedby:bigint;

}

export interface Updateimgexp {
   
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
    updatedby?:bigint;


}