export interface empdata {
    
    employeenumber: string;
    employeefirstName: string;
    employeelastName: string;
    employeefullname: string;
    empstatus: string;
    emailaddress: string;
    jobtitle: string;
    internalstaff: string;
    supervisor:string;
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
    contactnumber:string;
}
export interface Createempdata {
    
    employeenumber: string;
    employeefirstName: string;
    employeelastName: string;
    employeefullname: string;
    empstatus: string;
    emailaddress: string;
    jobtitle: string;
    internalstaff: string;
    supervisor:string;
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
    contactnumber:string;
}

export interface Updateempdata {
   
    employeenumber?: string;
    employeefirstName?: string;
    employeelastName?: string;
    employeefullname?: string;
    empstatus?: string;
    emailaddress?: string;
    jobtitle?: string;
    internalstaff?: string;
    supervisor?:string;
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
    contactnumber?:string;
}