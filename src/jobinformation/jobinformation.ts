export interface jobinformation{
    jobeffectivedate:string;
    location:string;
    clientname:string;
    jobtitle:string;
    reportsto:string;
    employeeid:number;
}
export interface Createjobinformation{
    jobeffectivedate:string;
    location:string;
    clientname:string;
    jobtitle:string;
    reportsto:string;
    employeeid:number;
}
export interface Updatejobinformation{
    jobeffectivedate?:string;
    location?:string;
    clientname?:string;
    jobtitle?:string;
    reportsto?:string;
    employeeid?:number;
}