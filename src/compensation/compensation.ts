export interface compensation{
    effectivedate:string;
    payschedule:string;
    paytype:string;
    payrate:string;
    overtime:string;
    overtimerate:string;
    changereason:string;
    comment:string;

}
export interface Createcompensation{
    effectivedate:string;
    payschedule:string;
    paytype:string;
    payrate:string;
    overtime:string;
    overtimerate:string;
    changereason:string;
    comment:string;

}
export interface Updatecompensation{
    effectivedate?:string;
    payschedule?:string;
    paytype?:string;
    payrate?:string;
    overtime?:string;
    overtimerate?:string;
    changereason?:string;
    comment?:string;
}
