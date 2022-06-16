export interface empexp{
    employeeid: bigint;
    entity: string;
    startdate: string;
    enddate: string;
    expensecode: string;
    expensedate: string;
    clientcode:bigint;
    amount:bigint;
    approvedby:bigint;
    approvaldate:string;
    modeofpayment: string;
    paymentdate:string;
    creationdate:string;
    createdby:bigint;
    updatedby:bigint;
    

}
export interface Createempexp {
    employeeid: bigint;
    entity: string;
    startdate: string;
    enddate: string;
    expensecode: string;
    expensedate: string;
    clientcode:bigint;
    amount:bigint;
    approvedby:bigint;
    approvaldate:string;
    modeofpayment: string;
    paymentdate:string;
    creationdate:string;
    createdby:bigint;
    updatedby:bigint;
}

export interface Updateempexp {
    employeeid?: bigint;
    entity?: string;
    startdate?: string;
    enddate?: string;
    expensecode?: string;
    expensedate?: string;
    clientcode?:bigint;
    amount?:bigint;
    approvedby?:bigint;
    approvaldate?:string;
    modeofpayment?: string;
    paymentdate?:string;
    creationdate?:string;
    createdby?:bigint;
    updatedby?:bigint;
    
    
}