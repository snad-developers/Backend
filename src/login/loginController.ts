import * as Hapi from "@hapi/hapi";
import { login, forgotpassword, Updatereg} from "./login";
import { regService } from "../reg/regService";
import Boom from "@hapi/boom";
import { empdataService } from "../empdata/empdataService";
import { timesheetService } from "../timesheet/timesheetService";
import { payrollexpenseService } from "../payrollexpense/payrollexpenseService";
import { empexpService } from "../empexp/empexpService";
import { mgmtexpService } from "../mgmtexp/mgmtexpService";
import { isCommaListExpression } from "typescript";


export class loginController {
 
     public async LoginCheck(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            //const id: number = request.params.id;
            const requestBody: login = request.payload as login
            //const requestBodydata= request.payload
            // const result = await new regService().LoginInsert(requestBody);
            // const email = request.params.email;
            // const password= request.params.password;
            //const requestBody: Createreg = request.payload as Createreg
           
           const loginresult = await new regService().getAll();
          var  result:boolean = false;
          var errmessage = null;
           for (var i = 0; i < loginresult.length; i++) {
            // Exit early if one of them fails
            // if(loginresult[i].email !== requestBody.email){
            //     return h.response(JSON.stringify({ status: "failure", message: "User not Registered",bodyload: requestBody ,statuscode:201}));
                    
            // }

            // if (loginresult[i].email == requestBody.email && loginresult[i].password !== requestBody.password) {
            //     // result=true;
            //     return h.response(JSON.stringify({ status: "failure", message: "Password is Incorrect",bodyload: requestBody ,statuscode:201}));
            // }


            // if (loginresult[i].email == requestBody.email && loginresult[i].password == requestBody.password && loginresult[i].entity !== requestBody.entity) {
            //     // result=true;
            //     return h.response(JSON.stringify({ status: "failure", message: "Please choose correct Entity",bodyload: requestBody ,statuscode:201}));

            // }

            // if (loginresult[i].email == requestBody.email && loginresult[i].password == requestBody.password && loginresult[i].entity == requestBody.entity && loginresult[i].status == "pending") {
                
            //     return h.response(JSON.stringify({ status: "failure", message: "User is Pending. Please contact Admin",bodyload: requestBody ,statuscode:201}));


            // }

            // if (loginresult[i].email == requestBody.email && loginresult[i].password == requestBody.password && loginresult[i].entity == requestBody.entity && loginresult[i].status == "Rejected") {
                
            //     return h.response(JSON.stringify({ status: "failure", message: "User  Rejected. Please contact Admin",bodyload: requestBody ,statuscode:201}));


            // }


            if (loginresult[i].email == requestBody.email && loginresult[i].password == requestBody.password && loginresult[i].entity == requestBody.entity && loginresult[i].status == "Approved") {
               result=true;
            //    logid = loginresult[i].id
               
            
               return h.response(JSON.stringify({ status: "success", message: "Valid User",bodyload: requestBody ,statuscode:200,logid:loginresult[i]}));
            }
           
          }

          if(!result){
            return h.response(JSON.stringify({ status: "failure", message: "inValid User",bodyload: requestBody ,statuscode:201}));
          }

       
          
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }
    

    public async securityanscheck(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: forgotpassword = request.payload as forgotpassword
            
           const loginresult = await new regService().getAll();
      
            for (var i = 0; i < loginresult.length; i++) {
                var count=0;
                if (loginresult[i].id == id) {
                    //requestBody.id=loginresult[i].id;
                    var answers = [loginresult[i].ans1,loginresult[i].ans2,loginresult[i].ans3,loginresult[i].ans4,loginresult[i].ans5];
                   // var array2= [requestBody.ans1,requestBody.ans2,requestBody.ans3];
                   // var questions=[requestBody.question1,requestBody.question2,requestBody.question3]
                    // for (var i = 0; i<array2.length; i++) {
                    //     var arrlen = array1.length;
                    //     for (var j = 0; j<arrlen; j++) {
                    //         if (array2[i] == array1[j]) {
                    //             array1 = array1.slice(0, j).concat(array1.slice(j+1, arrlen));count++;
                    //         }
                    //     }
                    // }
                    

            // if(count >= 3){
                return h.response(JSON.stringify({ status: "success", message: "Valid User",bodyload: requestBody ,statuscode:200,mailid:id,answers:answers}));
            // }
            // else{
            //     return h.response(JSON.stringify({ status: "failure", message: "inValid User",bodyload: requestBody,
            //     statuscode:201, array1:array1,array2:array2,count:count,loginresult:loginresult}));
            // }
            }
          }
     
        
    
          
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }

    public async forgotPassword(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: forgotpassword = request.payload as forgotpassword
          
           const loginresult = await new regService().getAll();
           var  result:boolean = false;
           for (var i = 0; i < loginresult.length; i++) {
            if (loginresult[i].email == requestBody.email) {
                //requestBody.id=loginresult[i].id;
                result=true;
                return h.response(JSON.stringify({ status: "success", message: "Valid User",bodyload: requestBody ,statuscode:200,mailid:loginresult[i].id}));
            }
        }

        if(!result){
            return h.response(JSON.stringify({ status: "failure", message: "inValid User",bodyload: requestBody,statuscode:201}));
        }
        
        
        
   
          
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async update(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: Updatereg = request.payload as Updatereg;
            const result = await new regService().update(requestBody, id);
            if(result.password == requestBody.password && result.confirmPassword == requestBody.confirmPassword){
            return h.response(JSON.stringify({ status: "success", message: "Valid User",bodyload: requestBody ,statuscode:200, id:id}));
            }else{
                return h.response(JSON.stringify({ status: "failure", message: "inValid User",bodyload: requestBody ,statuscode:201, id:id}));
            }
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }

    public async approve(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: Updatereg = request.payload as Updatereg;
            const result = await new regService().update(requestBody, requestBody.id);
            if(result.status == requestBody.status ){
            return h.response(JSON.stringify({ status: "success", message: "Valid User",bodyload: requestBody ,statuscode:200}));
            }
            
                return h.response(JSON.stringify({ status: "failure", message: "inValid User",bodyload: requestBody ,statuscode:201}));
            
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }

    


    public async dashboard(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const empresult = await new empdataService().getAll();
            const receivablesdata = await new timesheetService().getAll();
            const payrollexpenses = await new payrollexpenseService().getAll();
            const empexpenses = await new empexpService().getAll();
            const mgmtexpenses = await new mgmtexpService().getAll();
            var receivablestotal=0;
            var activeemp=0;
            var payrollexpensestotal=0;
            var empexpensestotal=0;
            var mgmtexpensestotal=0;
            for (var i = 0; i<empresult.length; i++) {
             if (empresult[i].empstatus == "Active") {
                  activeemp++
              }
                    
       }
       for (var i = 0; i<receivablesdata.length; i++) {
        receivablestotal=receivablestotal+receivablesdata[i].receivables;
     }
     for (var i = 0; i<payrollexpenses.length; i++) {
        payrollexpensestotal=payrollexpensestotal+payrollexpenses[i].payrollexpense;
     }
     for (var i = 0; i<empexpenses.length; i++) {
        empexpensestotal=empexpensestotal+empexpenses[i].amount;
     }
     for (var i = 0; i<mgmtexpenses.length; i++) {
        mgmtexpensestotal=mgmtexpensestotal+mgmtexpenses[i].amt;
     }
       return h.response(JSON.stringify({ status: "success", message: "dashboard details",statuscode:201, 
       activeemp:activeemp,receivablestotal:receivablestotal,payrollexpensestotal:payrollexpensestotal,
       empexpensestotal:empexpensestotal,mgmtexpensestotal:mgmtexpensestotal}));
           
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


 
    

}