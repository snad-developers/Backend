export interface timesheet {
    
    employeeid: bigint;
    period: string;
    clientid: bigint;
    noofhours: bigint;
    payrate: bigint;
    revenuarate: bigint;
    creationdate:string;
    operatonalcost:bigint;
    receivables:bigint;
    ReceivablesPaid:string;
    createdby:bigint;
    updatedby:bigint;
    updateddate:string;

}
export interface Createtimesheet {
    
    employeeid: bigint;
    period: string;
    clientid: bigint;
    noofhours: bigint;
    payrate: bigint;
    revenuarate: bigint;
    creationdate:string;
    operatonalcost:bigint;
    receivables:bigint;
    ReceivablesPaid:string;
    createdby:bigint;
    updatedby:bigint;
    updateddate:string;
}

export interface Updatetimesheet {
   
    employeeid?: bigint;
    period?: string;
    clientid?: bigint;
    noofhours?: bigint;
    payrate?: bigint;
    revenuarate?: bigint;
    creationdate?:string;
    operatonalcost?:bigint;
    receivables?:bigint;
    ReceivablesPaid?:string;
    createdby?:bigint;
    updatedby?:bigint;
    updateddate?:string;

}