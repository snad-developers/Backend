export interface visainformation{
    date:string;
    visatype:string;
    issuingcountry:string;
    issueddate:string;
    expirationdate:string;
    status:string;
    employeeid:number;
}
export interface createvisainformation{
    date:string;
    visastatus:string;
    issuingcountry:string;
    issueddate:string;
    expirationdate:string;
    status:string;
    employeeid:number;

}
export interface updatevisainformation{
    date?:string;
    visastatus?:string;
    issuingcountry?:string;
    issueddate?:string;
    expirationdate?:string;
    status?:string;
    employeeid?:number;
}