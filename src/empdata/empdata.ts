export interface empdata {
    
    employeenumber: number;
    employeefirstName: string;
    employeelastName: string;
    employeefullname: string;
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
    
    employeenumber: number;
    employeefirstName: string;
    employeelastName: string;
    employeefullname: string;
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
   
    employeenumber?: number;
    employeefirstName?: string;
    employeelastName?: string;
    employeefullname?: string;
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