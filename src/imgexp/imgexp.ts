export interface imgexp {
    
    mgmtempid: number;
    org: string;
    typeofexp: string;
    expdate:string;
    amt: number;
    approvedby: number;
    approvaldate:string;
    modeofpayment:string;
    paymentdate:string;
    creationdate:string;
    createdby:number;
    updatedby:number;

}
export interface Createimgexp {
    
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
    updatedby:number;

}

export interface Updateimgexp {
   
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
    updatedby?:number;


}