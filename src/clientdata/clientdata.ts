export interface clientdata{
    clientcode: number;
    clientname:string;
    taxfederal:number;
    clientlocation:string;
    agreementstartdate:string;
    serviceagreementonboarded:string;
    agreementenddate:string;

}
export interface Createclientdata{
    clientcode: number;
    clientname:string;
    taxfederal:number;
    clientlocation:string;
    agreementstartdate:string;
    serviceagreementonboarded:string;
    agreementenddate:string;

}
export interface Updateclientdata{
    clientcode?: number;
    clientname?:string;
    taxfederal?:number;
    clientlocation?:string;
    agreementstartdate?:string;
    serviceagreementonboarded?:string;
    agreementenddate?:string;

}