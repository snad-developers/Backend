import * as Hapi from "@hapi/hapi";
import { Createempdata,Updateempdata  } from "./empdata";
import { empdataService } from "./empdataService";
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
            const result = await new empdataService().update(requestBody, id);
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