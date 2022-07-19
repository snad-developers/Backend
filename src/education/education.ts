export interface education{
    universityname:string;
    degree:string;
    specialization:string;
    gpa:string;
    degreestartdate:string;
    degreeenddate:string;
    employeeid:number;
}
export interface Createeducation{
    universityname:string;
    degree:string;
    specialization:string;
    gpa:string;
    degreestartdate:string;
    degreeenddate:string;
    employeeid:number;
}
export interface Updateeducation{
    universityname?:string;
    degree?:string;
    specialization?:string;
    gpa?:string;
    degreestartdate?:string;
    degreeenddate?:string;
    employeeid?:number;
}