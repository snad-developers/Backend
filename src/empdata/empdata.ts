export interface empdata {
    
    employeeid: number;
    firstname: string;
    lastname: string;
    fullname: string;
    empstatus: string;
    emailaddress: string;
    jobtitle: string;
    internalstaff: string;
    supervisor:number;
    visastatus:string;
    gender:string;
    entity:string;
    dateofbirth: string;
    clientname:string;
    clientcode:string;
    startdate:string;
    createdby:string;
    updatedby:string;
    immigrationstatus:string;
    highestdegree:string;
    university:string;
    contactnumber:number;
    addressline1:string;
    addressline2:string;
    city:string;
    state:string;
    zipcode:number;
    country:string;
    ssn:string;
}
export interface Createempdata {
    
    employeeid: number;
    firstname: string;
    lastname: string;
    fullname: string;
    empstatus: string;
    emailaddress: string;
    jobtitle: string;
    internalstaff: string;
    supervisor:number;
    visastatus:string;
    gender:string;
    entity:string;
    dateofbirth: string;
    clientname:string;
    clientcode:string;
    startdate:string;
    createdby:string;
    updatedby:string;
    immigrationstatus:string;
    highestdegree:string;
    university:string;
    contactnumber:number;
    addressline1:string;
    addressline2:string;
    city:string;
    state:string;
    zipcode:number;
    country:string;
    ssn:string;

}

export interface Updateempdata {
   
    employeeid?: number;
    firstname?: string;
    lastname?: string;
    fullname?: string;
    empstatus?: string;
    emailaddress?: string;
    jobtitle?: string;
    internalstaff?: string;
    supervisor?:number;
    visastatus?:string;
    gender?:string;
    entity?:string;
    dateofbirth?: string;
    clientname?:string;
    clientcode?:string;
    startdate?:string;
    createdby?:string;
    updatedby?:string;
    immigrationstatus?:string;
    highestdegree?:string;
    university?:string;
    contactnumber?:number;
    addressline1?:string;
    addressline2?:string;
    city?:string;
    state?:string;
    zipcode?:number;
    country?:string;
    ssn?:string;

}