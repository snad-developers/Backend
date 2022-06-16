import { CharacterEncoding } from "crypto";

export interface payrollexpense {
    
    employeeid: bigint;
   payperiodstartdate : string;
    payperiodenddate: string;
    paymentdate: string;
    noofhours: bigint;
    payrate: bigint;
    grosspay:bigint;
    payrollexpense:bigint;
    insurancebycompany:bigint;
    totalpayroll:bigint;
    creatioddate:string;
    createdby:bigint;
    updatedby:bigint;
    updateddate:string;

}
export interface Createpayrollexpense {
    
    employeeid: bigint;
    payperiodstartdate : string;
     payperiodenddate: string;
     paymentdate: string;
     noofhours: bigint;
     payrate: bigint;
     grosspay:bigint;
     payrollexpense:bigint;
     insurancebycompany:bigint;
     totalpayroll:bigint;
     creatioddate:string;
     createdby:bigint;
     updatedby:bigint;
     updateddate:string;
}

export interface Updatepayrollexpense {
   
    employeeid?: bigint;
   payperiodstartdate? : string;
    payperiodenddate?: string;
    paymentdate?: string;
    noofhours?: bigint;
    payrate?: bigint;
    grosspay?:bigint;
    payrollexpense?:bigint;
    insurancebycompany?:bigint;
    totalpayroll?:bigint;
    creatioddate?:string;
    createdby?:bigint;
    updatedby?:bigint;
    updateddate?:string;

}