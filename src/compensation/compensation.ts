export interface compensation{
    compensationeffectivedate:string;
    payschedule:string;
    paytype:string;
    payrate:string;
    overtime:string;
    overtimerate:string;
    changereason:string;
    comment:string;
    employeeid:number;
}
export interface Createcompensation{
    compensationeffectivedate:string;
    payschedule:string;
    paytype:string;
    payrate:string;
    overtime:string;
    overtimerate:string;
    changereason:string;
    comment:string;
    employeeid:number;
}
export interface Updatecompensation{
    compensationeffectivedate?:string;
    payschedule?:string;
    paytype?:string;
    payrate?:string;
    overtime?:string;
    overtimerate?:string;
    changereason?:string;
    comment?:string;
    employeeid?:number;
}
