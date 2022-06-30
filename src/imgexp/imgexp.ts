export interface imgexp {
    
    employeeid: number;
    org: string;
    typeofexp: string;
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
    updatedby:number;

}

export interface Updateimgexp {
   
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
    updatedby?:number;


}