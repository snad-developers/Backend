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

const pgp = require('pg-promise')();

const config = {
    connectionString: 'postgres://rardb:Qwerty123@rardb.cktkeurylmav.us-east-1.rds.amazonaws.com:5432/rardb',
    // Beware! The ssl object is overwritten when parsing the connectionString
    ssl: {
      rejectUnauthorized: false,
     // ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
    },
  }

const { Client } = require('pg')
const client = new Client(config)
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})


export class loginController {
 
     public async LoginCheck(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            //const id: number = request.params.id;
            const requestBody: login = request.payload as login 
           //const loginresult = await new regService().getAll();

           const validUser = await new regService().validUser(requestBody,'ALL');
           var  result:boolean = false;
    if(validUser.length > 0){
           for (var i = 0; i < validUser.length; i++) {
               result=true;
               var validUserResult=
               { firstName:validUser[0].firstName,
               lastName:validUser[0].lastName,
               password:validUser[0].password,
               email:validUser[0].email,
               entity:validUser[0].entity,
               role:validUser[0].role,
               login:"true"
            }
        
               return h.response(JSON.stringify({ status: "success", message: "Valid User",statuscode:200,logindetails:validUserResult,loginedIn:true}));
          
           
          }
        }else{
            result=false;
           var message=""
            var CheckEmail = await new regService().validUser(requestBody,'Email');
             if(CheckEmail.length > 0){
                var CheckPassword = await new regService().validUser(requestBody,'Password');
                if(CheckPassword.length > 0){
                    var CheckEntity = await new regService().validUser(requestBody,'Entity');
                    if(CheckEntity.length > 0){
                        var Checkstatus = await new regService().validUser(requestBody,'status');
                        if(Checkstatus.length > 0){

                        }else{
                            message="User is not Approved Please contact Admin"; 
                        }

                    }else{
                        message="Invalid Entity";  
                    }

                }else{
                    message="Incorrect Password";  
                }
                
             }else{
                message="User is not Registered";
             }
          }

          if(!result){
            return h.response(JSON.stringify({ status: "failure", message: message,bodyload: requestBody ,statuscode:201,validUser:validUser}));
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
            var resultdata:any;
            if(requestBody.filename == "0"){
                console.log("client data")
                //console.log(requestBody.filename)
          //  result = await new clientdataService().fileupload(requestBody.FileUploadData);

            console.log(requestBody.filename);
            var bulkData=requestBody.FileData;
            var duplicaterecords;
            console.log("requestBody",requestBody.FileData.length)
            // start filter approch
              // Resolve duplicates in bulkData. Can be more complex than this.
        const uniqueBulkData = bulkData.filter((value,idx,arr)=>arr.findIndex(el=>(el.clientcode === value.clientcode))===idx);
        console.log("uniqueBulkData",uniqueBulkData)
        const inputNationalIds = uniqueBulkData.map((item) => {return item.clientcode});
        console.log("inputNationalIds",inputNationalIds)

       const arrtostring = inputNationalIds.join(',');
       const query="SELECT clientcode FROM clientdata WHERE clientcode IN"+" ("+ arrtostring + ")";
        console.log("query",query); 

        const listDuplicates = await client
        .query(query)
        .then(res => {
             return res.rows
          })
        .catch(e => console.error(e.stack))
        console.log("listDuplicates",listDuplicates)
        if(listDuplicates && listDuplicates.length > 0){
        const duplicatesArray = listDuplicates.map((item) => {return item.clientcode});
        console.log("duplicatesArray",duplicatesArray)
        const dataToInsert = uniqueBulkData.filter((item) => !duplicatesArray.includes(item.clientcode));
        console.log("dataToInsert",dataToInsert)
        duplicaterecords=uniqueBulkData;
        if(dataToInsert && dataToInsert.length > 0){
        duplicaterecords=uniqueBulkData.filter((item) => duplicatesArray.includes(item.clientcode));
        const columns = Object.keys(bulkData[0]).map((str) => str.trim());
        console.log("columns",columns)
        const setTable = new pgp.helpers.ColumnSet(columns , {table: 'clientdata'});
        console.log("setTable",setTable)
        const insert = pgp.helpers.insert(dataToInsert, setTable);
        console.log("insert",insert)
        var resultinserdata = await client
        .query(insert)
        .then(res => {
            
             return res.rowCount
          })
        .catch(e => console.error(e.stack))
       
        resultdata=bulkData.length - resultinserdata
        console.log("resultdata",resultdata);
     
        result={ 
            status: "success", 
            message: `Successfully inserted ${resultinserdata} records. and rejected ${resultdata} records.Total ${bulkData.length} records`,
            statuscode:200,
            duplicaterecords:duplicaterecords
        }
        console.log("result",result);
        }else{
           
            result={ 
                status: "Failure", 
                message: `Failed to insert  records.`,
                statuscode:201,
                duplicaterecords:duplicaterecords
            }
            console.log("result",result);
        }
    }else{
        result={ 
            status: "Failure", 
            message: `Failed to insert  records.`,
            statuscode:201
        }
        console.log("result",result);
        }
            }
            if(requestBody.filename == "1"){
              //  console.log(requestBody.filename)
           // result = await new payrollexpenseService().fileupload(requestBody.FileUploadData);
           console.log("payroll data")

       console.log(requestBody.filename);
       var bulkData=requestBody.FileData;
       var duplicaterecords;
       console.log("requestBody",requestBody.FileData.length)
       // start filter approch
         // Resolve duplicates in bulkData. Can be more complex than this.
//    const uniqueBulkData = bulkData.filter((value,idx,arr)=>arr.findIndex(el=>(el.employeeid === value.employeeid))===idx);
//    console.log("uniqueBulkData",uniqueBulkData)
   const inputNationalIds = bulkData.map((item) => {return item.employeeid});
   console.log("inputNationalIds",inputNationalIds)

  const arrtostring = inputNationalIds.join(',');
  const query="SELECT employeeid FROM empdata WHERE employeeid IN"+" ("+ arrtostring + ")";
   console.log("query",query); 
 //client.connect()
   const listDuplicates = await client
   .query(query)
   .then(res => {
        return res.rows
     })
   .catch(e => console.error(e.stack))
   console.log("listDuplicates",listDuplicates)
   if(listDuplicates && listDuplicates.length > 0){
   const duplicatesArray = listDuplicates.map((item) => {return item.employeeid});
   console.log("duplicatesArray",duplicatesArray)
   const dataToInsert = bulkData.filter((item) => duplicatesArray.includes(item.employeeid));
   console.log("dataToInsert",dataToInsert)
   duplicaterecords=inputNationalIds;
   if(dataToInsert && dataToInsert.length > 0){
    duplicaterecords=bulkData.filter((item) => !duplicatesArray.includes(item.employeeid));
   const columns = Object.keys(bulkData[0]).map((str) => str.trim());
   console.log("columns",columns)
   const setTable = new pgp.helpers.ColumnSet(columns , {table: 'payrollexpense'});
   console.log("setTable",setTable)
   const insert = pgp.helpers.insert(dataToInsert, setTable);
   console.log("insert",insert)
   var resultinserdata = await client
   .query(insert)
   .then(res => {
   
        return res.rowCount
     })
   .catch(e => console.error(e.stack))
  
   resultdata=bulkData.length - resultinserdata
   console.log("resultdata",resultdata);

   result={ 
       status: "success", 
       message: `Successfully inserted ${resultinserdata} records. and rejected ${resultdata} records.Total ${bulkData.length} records`,
       statuscode:200,
       duplicaterecords:duplicaterecords
   }
   console.log("result",result);
   }else{
      
       result={ 
           status: "Failure", 
           message: `Failed to insert  records.`,
           statuscode:201,
           duplicaterecords:duplicaterecords
       }
       console.log("result",result);
   }
}else{
   result={ 
       status: "Failure", 
       message: `Failed to insert  records.`,
       statuscode:201
   }
   console.log("result",result);
   }
            }
            if(requestBody.filename == "2"){
                //console.log(requestBody.filename)
           // result = await new timesheetService().fileupload(requestBody.FileUploadData);
           console.log("timesheet data")

           console.log(requestBody.filename);
           var bulkData=requestBody.FileData;
           console.log("bulkData",bulkData)
           var duplicaterecords;
           console.log("requestBody",requestBody.FileData.length)
           // start filter approch
             // Resolve duplicates in bulkData. Can be more complex than this.
    //    const uniqueBulkData = bulkData.filter((value,idx,arr)=>arr.findIndex(el=>(el.employeeid === value.employeeid))===idx);
    //    console.log("uniqueBulkData",uniqueBulkData)
       const employeeidArray = bulkData.map((item) => {return item.employeeid});
       console.log("employeeidArray",employeeidArray)
       const clientidArray = bulkData.map((item) => {return item.clientid});
       console.log("clientidArray",clientidArray)
      // console.log("inputNationalIds",inputNationalIds)
    
      const employeeidarrytostring = employeeidArray.join(',');
      const clientidarrytostring = clientidArray.join(',');
      const employeeidsquery="SELECT employeeid FROM empdata WHERE employeeid IN"+" ("+ employeeidarrytostring + ")";
      console.log("employeeidsquery",employeeidsquery); 
      const clientidsquery="SELECT clientcode FROM clientdata WHERE clientcode IN"+" ("+ clientidarrytostring + ")";
       console.log("clientidsquery",clientidsquery); 
       const employeelistDuplicates = await client
       .query(employeeidsquery)
       .then(res => {
            return res.rows
         })
         console.log("employeelistDuplicates",employeelistDuplicates)
         const clientlistDuplicates = await client
         .query(clientidsquery)
         .then(res => {
              return res.rows
           })
       .catch(e => console.error(e.stack))
       console.log("clientlistDuplicates",clientlistDuplicates)
        if((employeelistDuplicates && employeelistDuplicates.length > 0) || (clientlistDuplicates && clientlistDuplicates.length > 0)){
       const employeeduplicatesArray = employeelistDuplicates.map((item) => {return item.employeeid});
       console.log("employeeduplicatesArray",employeeduplicatesArray)
       const clientduplicatesArray = clientlistDuplicates.map((item) => {return item.clientcode});
       console.log("clientduplicatesArray",clientduplicatesArray)
       const employeedataToInsert = bulkData.filter((item) => employeeduplicatesArray.includes(item.employeeid));
       console.log("employeedataToInsert",employeedataToInsert)
       const clientdataToInsert = employeedataToInsert.filter((item) => clientduplicatesArray.includes(item.clientid));
       console.log("clientdataToInsert",clientdataToInsert)
       duplicaterecords=employeeidArray;
       if(clientdataToInsert && clientdataToInsert.length > 0){
        duplicaterecords=employeedataToInsert.filter((item) => clientduplicatesArray.includes(item.clientid,item.employeeid));
       const columns = Object.keys(bulkData[0]).map((str) => str.trim());
       console.log("columns",columns)
       const setTable = new pgp.helpers.ColumnSet(columns , {table: 'timesheet'});
       console.log("setTable",setTable)
       const insert = pgp.helpers.insert(clientdataToInsert, setTable);
       console.log("insert",insert)
       var resultinserdata = await client
       .query(insert)
       .then(res => {
       
            return res.rowCount
         })
       .catch(e => console.error(e.stack))
      
       resultdata=bulkData.length - resultinserdata
       console.log("resultdata",resultdata);
    
       result={ 
           status: "success", 
           message: `Successfully inserted ${resultinserdata} records. and rejected ${resultdata} records.Total ${bulkData.length} records`,
           statuscode:200
       }
       console.log("result",result);
       }else{
          
           result={ 
               status: "Failure", 
               message: `Failed to insert  records.`,
               statuscode:201
           }
           console.log("result",result);
       }
    }else{
       result={ 
           status: "Failure", 
           message: `Failed to insert  records.`,
           statuscode:201
       }
       console.log("result",result);
       }
            }
            if(requestBody.filename == "3"){
               // console.log(requestBody.filename)
            // result = await new mgmtexpService().fileupload(requestBody.FileUploadData);
            console.log("management expenses")

            console.log(requestBody.filename);
            var bulkData=requestBody.FileData;
            console.log("requestBody",requestBody.FileData.length)
            // start filter approch
              // Resolve duplicates in bulkData. Can be more complex than this.
     //    const uniqueBulkData = bulkData.filter((value,idx,arr)=>arr.findIndex(el=>(el.employeeid === value.employeeid))===idx);
     //    console.log("uniqueBulkData",uniqueBulkData)
        const employeeidArray = bulkData.map((item) => {return item.employeeid});
        console.log("employeeidArray",employeeidArray)
        const mgmtexpArray = bulkData.map((item) => {return item.expensecode});
        console.log("mgmtexpArray",mgmtexpArray)
       // console.log("inputNationalIds",inputNationalIds)
     
       const employeeidarrytostring = employeeidArray.join(',');
       const mgmtexparrytostring = mgmtexpArray.join("','");
       console.log("mgmtexparraytostring",mgmtexparrytostring);
       const employeeidsquery="SELECT employeeid FROM empdata WHERE employeeid IN"+" ("+ employeeidarrytostring + ")";
       console.log("employeeidsquery",employeeidsquery); 
       const mgmtexpidsquery="SELECT expensecode FROM mgmtexp WHERE expensecode IN"+" ("+"'"+mgmtexparrytostring+"'" + ")";
        console.log("mgmtexpidsquery",mgmtexpidsquery); 
        const employeelistDuplicates = await client
        .query(employeeidsquery)
        .then(res => {
             return res.rows
          })
          console.log("employeelistDuplicates",employeelistDuplicates)
          const mgmtexplistDuplicates = await client
          .query(mgmtexpidsquery)
          .then(res => {
               return res.rows
            })
        .catch(e => console.error(e.stack))
        console.log("mgmtexplistDuplicates",mgmtexplistDuplicates)
         if((employeelistDuplicates && employeelistDuplicates.length > 0) || (mgmtexplistDuplicates && mgmtexplistDuplicates.length > 0)){
        const employeeduplicatesArray = employeelistDuplicates.map((item) => {return item.employeeid});
        console.log("employeeduplicatesArray",employeeduplicatesArray)
        const mgmtexpduplicatesArray = mgmtexplistDuplicates.map((item) => {return item.expensecode});
        console.log("mgmtexpduplicatesArray",mgmtexpduplicatesArray)
        const employeedataToInsert = bulkData.filter((item) => employeeduplicatesArray.includes(item.employeeid));
        console.log("employeedataToInsert",employeedataToInsert)
        const mgmtexpdataToInsert = employeedataToInsert.filter((item) => mgmtexpduplicatesArray.includes(item.expensecode));
        console.log("dataToInsert",mgmtexpdataToInsert)
        if(mgmtexpdataToInsert && mgmtexpdataToInsert.length > 0){
        const columns = Object.keys(bulkData[0]).map((str) => str.trim());
        console.log("columns",columns)
        const setTable = new pgp.helpers.ColumnSet(columns , {table: 'mgmtexp'});
        console.log("setTable",setTable)
        const insert = pgp.helpers.insert(mgmtexpdataToInsert, setTable);
        console.log("insert",insert)
        var resultinserdata = await client
        .query(insert)
        .then(res => {
        
             return res.rowCount
          })
        .catch(e => console.error(e.stack))
       
        resultdata=bulkData.length - resultinserdata
        console.log("resultdata",resultdata);
     
        result={ 
            status: "success", 
            message: `Successfully inserted ${resultinserdata} records. and rejected ${resultdata} records.Total ${bulkData.length} records`,
            statuscode:200
        }
        console.log("result",result);
        }else{
           
            result={ 
                status: "Failure", 
                message: `Failed to insert  records.`,
                statuscode:201
            }
            console.log("result",result);
        }
     }else{
        result={ 
            status: "Failure", 
            message: `Failed to insert  records.`,
            statuscode:201
        }
        console.log("result",result);
        }
            }
            if(requestBody.filename == "4"){
                console.log("employee data")
                console.log(requestBody.filename);
                var bulkData=requestBody.FileData;
                var duplicaterecords;
                console.log("requestBody",requestBody.FileData.length)
                // start filter approch
                  // Resolve duplicates in bulkData. Can be more complex than this.
            const uniqueBulkData = bulkData.filter((value,idx,arr)=>arr.findIndex(el=>(el.employeeid === value.employeeid))===idx);
            console.log("uniqueBulkData",uniqueBulkData)
            const inputNationalIds = uniqueBulkData.map((item) => {return item.employeeid});
            console.log("inputNationalIds",inputNationalIds)

           const arrtostring = inputNationalIds.join(',');
           const query="SELECT employeeid FROM empdata WHERE employeeid IN"+" ("+ arrtostring + ")";
            console.log("query",query); 

            const listDuplicates = await client
            .query(query)
            .then(res => {
                 return res.rows
              })
            .catch(e => console.error(e.stack))
            console.log("listDuplicates",listDuplicates)
            if(listDuplicates && listDuplicates.length > 0){
            const duplicatesArray = listDuplicates.map((item) => {return item.employeeid});
            console.log("duplicatesArray",duplicatesArray)
            const dataToInsert = uniqueBulkData.filter((item) => !duplicatesArray.includes(item.employeeid));
            console.log("dataToInsert",dataToInsert)
            duplicaterecords=uniqueBulkData;
            if(dataToInsert && dataToInsert.length > 0){
            duplicaterecords = uniqueBulkData.filter((item) => duplicatesArray.includes(item.employeeid));
            const columns = Object.keys(bulkData[0]).map((str) => str.trim());
            console.log("columns",columns)
            const setTable = new pgp.helpers.ColumnSet(columns , {table: 'empdata'});
            console.log("setTable",setTable)
            const insert = pgp.helpers.insert(dataToInsert, setTable);
            console.log("insert",insert)
            var resultinserdata = await client
            .query(insert)
            .then(res => {
               
                 return res.rowCount
              })
            .catch(e => console.error(e.stack))
           
            resultdata=bulkData.length - resultinserdata
            console.log("resultdata",resultdata);
         
            result={ 
                status: "success", 
                message: `Successfully inserted ${resultinserdata} records. and rejected ${resultdata} records.Total ${bulkData.length} records`,
                statuscode:200,
                duplicaterecords:duplicaterecords
            }
            console.log("result",result);
            }else{
               
                result={ 
                    status: "Failure", 
                    message: `Failed to insert  records.`,
                    statuscode:201,
                    duplicaterecords:duplicaterecords
                }
                console.log("result",result);
            }
        }else{
            result={ 
                status: "Failure", 
                message: `Failed to insert  records.`,
                statuscode:201
            }
            console.log("result",result);
            }
                }
            if(requestBody.filename == "5"){
                //console.log(requestBody.filename)
            result = await new empexpService().fileupload(requestBody.FileUploadData);
            }
            if(requestBody.filename == "6"){
               // console.log(requestBody.filename)
            // result = await new imgexpService().fileupload(requestBody.FileUploadData);
            console.log("immigration expenses")

            console.log(requestBody.filename);
            var bulkData=requestBody.FileData;
            console.log("requestBody",requestBody.FileData.length)
            // start filter approch
              // Resolve duplicates in bulkData. Can be more complex than this.
     //    const uniqueBulkData = bulkData.filter((value,idx,arr)=>arr.findIndex(el=>(el.employeeid === value.employeeid))===idx);
     //    console.log("uniqueBulkData",uniqueBulkData)
        const employeeidArray = bulkData.map((item) => {return item.employeeid});
        console.log("employeeidArray",employeeidArray)
        const imgexpArray = bulkData.map((item) => {return item.expensescode});
        console.log("imgexpArray",imgexpArray)
       // console.log("inputNationalIds",inputNationalIds)
     
       const employeeidarrytostring = employeeidArray.join(',');
       const imgexparrytostring = imgexpArray.join("','");
       console.log("imgexparraytostring",imgexparrytostring);
       const employeeidsquery="SELECT employeeid FROM empdata WHERE employeeid IN"+" ("+ employeeidarrytostring + ")";
       console.log("employeeidsquery",employeeidsquery); 
       const imgexpidsquery="SELECT expensescode FROM imgexp WHERE expensescode IN"+" ("+ "'"+ imgexparrytostring +"'" + ")";
        console.log("imgexpidsquery",imgexpidsquery); 
        const employeelistDuplicates = await client
        .query(employeeidsquery)
        .then(res => {
             return res.rows
          })
          console.log("employeelistDuplicates",employeelistDuplicates)
          const imgexplistDuplicates = await client
          .query(imgexpidsquery)
          .then(res => {
               return res.rows
            })
        .catch(e => console.error(e.stack))
        console.log("imgexplistDuplicates",imgexplistDuplicates)
         if((employeelistDuplicates && employeelistDuplicates.length > 0) || (imgexplistDuplicates && imgexplistDuplicates.length > 0)){
        const employeeduplicatesArray = employeelistDuplicates.map((item) => {return item.employeeid});
        console.log("employeeduplicatesArray",employeeduplicatesArray)
        const imgexpduplicatesArray = imgexplistDuplicates.map((item) => {return item.expensescode});
        console.log("imgexpduplicatesArray",imgexpduplicatesArray)
        const employeedataToInsert = bulkData.filter((item) => employeeduplicatesArray.includes(item.employeeid));
        console.log("employeedataToInsert",employeedataToInsert)
        const imgexpdataToInsert = employeedataToInsert.filter((item) => imgexpduplicatesArray.includes(item.expensescode));
        console.log("dataToInsert",imgexpdataToInsert)
        if(imgexpdataToInsert && imgexpdataToInsert.length > 0){
        const columns = Object.keys(bulkData[0]).map((str) => str.trim());
        console.log("columns",columns)
        const setTable = new pgp.helpers.ColumnSet(columns , {table: 'imgexp'});
        console.log("setTable",setTable)
        const insert = pgp.helpers.insert(imgexpdataToInsert, setTable);
        console.log("insert",insert)
        var resultinserdata = await client
        .query(insert)
        .then(res => {
        
             return res.rowCount
          })
        .catch(e => console.error(e.stack))
       
        resultdata=bulkData.length - resultinserdata
        console.log("resultdata",resultdata);
     
        result={ 
            status: "success", 
            message: `Successfully inserted ${resultinserdata} records. and rejected ${resultdata} records.Total ${bulkData.length} records`,
            statuscode:200
        }
        console.log("result",result);
        }else{
           
            result={ 
                status: "Failure", 
                message: `Failed to insert  records.`,
                statuscode:201
            }
            console.log("result",result);
        }
     }else{
        result={ 
            status: "Failure", 
            message: `Failed to insert  records.`,
            statuscode:201
        }
        console.log("result",result);
        }

            }
           // console.log(result)
           if(requestBody.filename == "4" || requestBody.filename == "0" || requestBody.filename == "1" || requestBody.filename == "2" || requestBody.filename == "3" || requestBody.filename == "6" ) {
            return h.response(JSON.stringify(result));
           }else{
            if(result){
            if(result.count == requestBody.FileUploadData.length){
            
                return h.response(JSON.stringify({ status: "success", message: "Successfully inserted",bodyload: requestBody ,statuscode:200,result:result}));
            }
        }else{
            return h.response(JSON.stringify({ status: "Failure", message: "Failed to load data",bodyload: requestBody ,statuscode:201,result:result}));
        }
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