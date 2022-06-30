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
    team:string;
    dateofbirth: string;
    clientname:string;
    clientcode:string;
    startdate:string;
    createdby:string;
    updatedby:string;
    imigrationstatus:string;
    highestdegree:string;
    university:string;
    organization:string;
    fieldofwork:string;
    contactnumber:number;
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
    team:string;
    dateofbirth: string;
    clientname:string;
    clientcode:string;
    startdate:string;
    createdby:string;
    updatedby:string;
    imigrationstatus:string;
    highestdegree:string;
    university:string;
    organization:string;
    fieldofwork:string;
    contactnumber:number;
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
    team?:string;
    dateofbirth?: string;
    clientname?:string;
    clientcode?:string;
    startdate?:string;
    createdby?:string;
    updatedby?:string;
    imigrationstatus?:string;
    highestdegree?:string;
    university?:string;
    organization?:string;
    fieldofwork?:string;
    contactnumber?:number;
}