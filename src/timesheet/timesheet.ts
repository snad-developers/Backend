export interface timesheet {
    
    employeeid: number;
    period: string;
    clientid: number;
    noofhours: number;
    payrate: number;
    revenuerate: number;
    creationdate:string;
    operationalcost:number;
    receivables:number;
    ReceivablesPaid:string;
    createdby:number;
    updatedby:number;
    updateddate:string;

}
export interface Createtimesheet {
    
    employeeid: number;
    period: string;
    clientid: number;
    noofhours: number;
    payrate: number;
    revenuerate: number;
    creationdate:string;
    operationalcost:number;
    receivables:number;
    ReceivablesPaid:string;
    createdby:number;
    updatedby:number;
    updateddate:string;
}

export interface Updatetimesheet {
   
    employeeid?: number;
    period?: string;
    clientid?: number;
    noofhours?: number;
    payrate?: number;
    revenuerate?: number;
    creationdate?:string;
    operationalcost?:number;
    receivables?:number;
    ReceivablesPaid?:string;
    createdby?:number;
    updatedby?:number;
    updateddate?:string;

}