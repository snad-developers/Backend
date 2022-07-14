export interface visainformation{
    date:string;
    visatype:string;
    issuingcountry:string;
    issueddate:string;
    expirationdate:string;
    status:string;
}
export interface createvisainformation{
    date:string;
    visatype:string;
    issuingcountry:string;
    issueddate:string;
    expirationdate:string;
    status:string;

}
export interface updatevisainformation{
    date?:string;
    visatype?:string;
    issuingcountry?:string;
    issueddate?:string;
    expirationdate?:string;
    status?:string;
}