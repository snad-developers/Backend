export interface login {
    email: string;
    password:string;
    entity:string;
   
   
}

export interface fileupload {   
    FileUploadData: [];
    filename:string;
}

export interface forgotpassword {
    email: string;
    ans1:string;
    ans2:string;
    ans3:string;
    ans4:string;
    ans5:string;
    id:number
   
}

export interface Updatereg {
   
  
    password?:string;
    confirmPassword?:string;
    status?:string;
    id?:number;
}

