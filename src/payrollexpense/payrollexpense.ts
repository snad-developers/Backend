import { CharacterEncoding } from "crypto";

export interface payrollexpense {
    
    employeeid: number;
   payperiodstartdate : string;
    payperiodenddate: string;
    paymentdate: string;
    noofhours: number;
    payrate: number;
    grosspay:number;
    payrollexpense:number;
    insurancebycompany:number;
    totalpayroll:number;
    creatioddate:string;
    createdby:number;
    updatedby:number;
    updateddate:string;

}
export interface Createpayrollexpense {
    
    employeeid: number;
    payperiodstartdate : string;
     payperiodenddate: string;
     paymentdate: string;
     noofhours: number;
     payrate: number;
     grosspay:number;
     payrollexpense:number;
     insurancebycompany:number;
     totalpayroll:number;
     creatioddate:string;
     createdby:number;
     updatedby:number;
     updateddate:string;
}

export interface Updatepayrollexpense {
   
    employeeid?: number;
   payperiodstartdate? : string;
    payperiodenddate?: string;
    paymentdate?: string;
    noofhours?: number;
    payrate?: number;
    grosspay?:number;
    payrollexpense?:number;
    insurancebycompany?:number;
    totalpayroll?:number;
    creatioddate?:string;
    createdby?:number;
    updatedby?:number;
    updateddate?:string;

}