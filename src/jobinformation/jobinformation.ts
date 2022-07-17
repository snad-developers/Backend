export interface jobinformation{
    effectivedate:string;
    location:string;
    clientname:string;
    jobtitle:string;
    reportsto:string;
}
export interface Createjobinformation{
    effectivedate:string;
    location:string;
    clientname:string;
    jobtitle:string;
    reportsto:string;
}
export interface Updatejobinformation{
    effectivedate?:string;
    location?:string;
    clientname?:string;
    jobtitle?:string;
    reportsto?:string;
}