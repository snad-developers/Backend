export interface login {
    email: string;
    password:string;
    entity:string;
   
   
}


export interface forgotpassword {
    email: string;
    ans1:string;
    ans2:string;
    ans3:string;
    ans4:string;
    ans5:string;
    id:string
   
}

export interface Updatereg {
   
  
    password?:string;
    confirmPassword?:string;
}

