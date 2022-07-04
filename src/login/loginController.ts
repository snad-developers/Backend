import * as Hapi from "@hapi/hapi";
import { login, forgotpassword, Updatereg,fileupload} from "./login";
import { regService } from "../reg/regService";
import Boom from "@hapi/boom";
import { empdataService } from "../empdata/empdataService";
import { timesheetService } from "../timesheet/timesheetService";
import { payrollexpenseService } from "../payrollexpense/payrollexpenseService";
import { empexpService } from "../empexp/empexpService";
import { mgmtexpService } from "../mgmtexp/mgmtexpService";
import { imgexpService } from "../imgexp/imgexpService";
import { clientdataService } from "../clientdata/clientdataService";



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
            return h.response(JSON.stringify({ status: "failure", message: "invalid User Id or Password",bodyload: requestBody ,statuscode:201}));
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
            return h.response(JSON.stringify({ status: "failure", message: "invalid User",bodyload: requestBody,statuscode:201}));
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

            const activeemp = await new empdataService().getCount();
            const receivablestotal = await new timesheetService().getCount();
            const payrollexpensestotal = await new payrollexpenseService().getCount();
            const empexpensestotal = await new empexpService().getCount();
            const mgmtexpensestotal = await new mgmtexpService().getCount();
    
       return h.response(JSON.stringify({ status: "success", message: "dashboard details",statuscode:200, 
       activeemp:activeemp,receivablestotal:receivablestotal,payrollexpensestotal:payrollexpensestotal,
       empexpensestotal:empexpensestotal,mgmtexpensestotal:mgmtexpensestotal}));
           
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }

    public async fileupload(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: fileupload = request.payload as fileupload;
            var result:any;
            if(requestBody.filename == "0"){
                //console.log(requestBody.filename)
            result = await new clientdataService().fileupload(requestBody.FileUploadData);
            }
            if(requestBody.filename == "1"){
              //  console.log(requestBody.filename)
            result = await new payrollexpenseService().fileupload(requestBody.FileUploadData);
            }
            if(requestBody.filename == "2"){
                //console.log(requestBody.filename)
            result = await new timesheetService().fileupload(requestBody.FileUploadData);
            }
            if(requestBody.filename == "3"){
               // console.log(requestBody.filename)
            result = await new mgmtexpService().fileupload(requestBody.FileUploadData);
            }
            if(requestBody.filename == "4"){
               // console.log(requestBody.filename)
                result = await new empdataService().fileupload(requestBody.FileUploadData);
                }
            if(requestBody.filename == "5"){
                //console.log(requestBody.filename)
            result = await new empexpService().fileupload(requestBody.FileUploadData);
            }
            if(requestBody.filename == "6"){
               // console.log(requestBody.filename)
            result = await new imgexpService().fileupload(requestBody.FileUploadData);
            }
           // console.log(result)
            if(result){
            if(result.count == requestBody.FileUploadData.length){
            
                return h.response(JSON.stringify({ status: "success", message: "Successfully inserted",bodyload: requestBody ,statuscode:200,result:result}));
            }
        }else{
            return h.response(JSON.stringify({ status: "Failure", message: "Failed to load data",bodyload: requestBody ,statuscode:201,result:result}));
        }
        } catch (error) {
            console.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }


    public async accessdata(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            var data:any;
           
            data = await new regService().accessData();
            for (var i=0; i<data.length; i++){
                data[i].clientid=data[i].clientid.toString()
                data[i].sum=data[i].sum.toString();
               
            }
            if(data){
            
            
                return h.response(JSON.stringify({ status: "success", message: "Successfully inserted" ,statuscode:200,result:data}));
          
        }else{
            return h.response(JSON.stringify({ status: "Failure", message: "Failed insertion" ,statuscode:201,result:data}));
        }
        } catch (error) {
            console.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }
 
    

}