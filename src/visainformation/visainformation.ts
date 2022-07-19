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
    visatype:string;
    issuingcountry:string;
    issueddate:string;
    expirationdate:string;
    status:string;
    employeeid:number;

}
export interface updatevisainformation{
    date?:string;
    visatype?:string;
    issuingcountry?:string;
    issueddate?:string;
    expirationdate?:string;
    status?:string;
    employeeid?:number;
}