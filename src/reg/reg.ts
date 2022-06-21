export interface reg {
    
    firstName: string;
    lastName: string;
    idnumber: string;
    email: string;
    phoneNumber: string;
    dateofBirth: string;
    gender:string;
    role:string;
    address1:string;
    address2:string;
    country: string;
    state:string;
    city:string;
    zipcode:string;
    password:string;
    confirmPassword:string;
    ans1:string;
    ans2:string;
    ans3:string;
    ans4:string;
    ans5:string;
    entity:string;
    status:string;
}
export interface Createreg {
    
    firstName: string;
    lastName: string;
    idnumber: string;
    email: string;
    phoneNumber: string;
    dateofBirth: string;
    gender:string;
    role:string;
    address1:string;
    address2:string;
    country: string;
    state:string;
    city:string;
    zipcode:string;
    password:string;
    confirmPassword:string;
    ans1:string;
    ans2:string;
    ans3:string;
    ans4:string;
    ans5:string;
    entity:string;
    status:string;
}

export interface Updatereg {
   
    firstName?: string;
    lastName?: string;
    idnumber?: string;
    email?: string;
    phoneNumber?: string;
    dateofBirth?: string;
    gender?:string;
    role?:string;
    address1?:string;
    address2?:string;
    country?: string;
    state?:string;
    city?:string;
    zipcode?:string;
    password?:string;
    confirmPassword?:string;
    ans1?:string;
    ans2?:string;
    ans3?:string;
    ans4?:string;
    ans5?:string;
    entity?:string;
    status?:string;

}