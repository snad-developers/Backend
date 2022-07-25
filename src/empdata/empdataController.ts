import * as Hapi from "@hapi/hapi";
import { Createempdata,Updateempdata  } from "./empdata";
import { Createeducation } from "../education/education";
import { createvisainformation } from "../visainformation/visainformation";
import { Createjobinformation } from "../jobinformation/jobinformation";
import {  Createcompensation } from "../compensation/compensation";
import { empdataService } from "./empdataService";
import { visainformationService } from "../visainformation/visainformationService";
import { educationService } from "../education/educationService";
import { jobinformationService } from "../jobinformation/jobinformationService";
import { compensationService } from "../compensation/compensationService";
import Boom from "@hapi/boom";

export class empdataController {


    public async create(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: Createempdata = request.payload as Createempdata
            const result = await new empdataService().create(requestBody);
            // return h.response(result).code(201);
            if(result && result.emailaddress == requestBody.emailaddress){
                return h.response(JSON.stringify({ status: "success", message: "registered sucessfully",statuscode:200}));
                }else{
                    return h.response(JSON.stringify({ status: "faliure", message: result,statuscode:201}));
                }
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async getAll(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const result = await new empdataService().getAll();
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }


    public async getById(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: Updateempdata = request.payload as Updateempdata;
            console.log(requestBody)
            const insertrequestBody:  Createempdata = request.payload as  Createempdata
            console.log(requestBody)
            const visainsertrequestBody:  Createempdata = request.payload as  Createempdata
            console.log(requestBody)
            const jobinsertrequestBody:  Createempdata = request.payload as  Createempdata
            console.log(requestBody)
            const compensationinsertrequestBody:  Createempdata = request.payload as  Createempdata
            console.log(requestBody)
            const result = await new empdataService().update(requestBody, id);
            const insertresult = await new educationService().create(insertrequestBody);
            const visainsertresult = await new visainformationService().create(visainsertrequestBody);
            const jobinsertresult = await new jobinformationService().create(jobinsertrequestBody);
            const compensationinsertresult = await new compensationService().create(compensationinsertrequestBody);
            if(result){
                return h.response(JSON.stringify({ status: "success", message: "Updated sucessfully",statuscode:200}));
                }else{
                    return h.response(JSON.stringify({ status: "faliure", message: "Failure",statuscode:201}));
                }
           // return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async update(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: Updateempdata = request.payload as Updateempdata;
            const result = await new empdataService().update(requestBody, id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }


    public async delete(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new empdataService().delete(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }

}