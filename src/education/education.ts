export interface education{
    universityname:string;
    degree:string;
    specialization:string;
    gpa:string;
    degreestartdate:string;
    degreeenddate:string;
}
export interface Createeducation{
    universityname:string;
    degree:string;
    specialization:string;
    gpa:string;
    degreestartdate:string;
    degreeenddate:string;
}
export interface Updateeducation{
    universityname?:string;
    degree?:string;
    specialization?:string;
    gpa?:string;
    degreestartdate?:string;
    degreeenddate?:string;
}