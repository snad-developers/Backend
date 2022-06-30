import * as Hapi from "@hapi/hapi";
import { Createmgmtexp, Updatemgmtexp } from "./mgmtexp";
import { mgmtexpService } from "./mgmtexpService";
import Boom from "@hapi/boom";

export class mgmtexpController {


    public async create(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: Createmgmtexp = request.payload as Createmgmtexp
            const result = await new mgmtexpService().create(requestBody);
            return h.response(result).code(201);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async getAll(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const result = await new mgmtexpService().getAll();
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }


    public async getById(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new mgmtexpService().getById(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async update(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: Updatemgmtexp = request.payload as Updatemgmtexp;
            const result = await new mgmtexpService().update(requestBody, id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }


    public async delete(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new mgmtexpService().delete(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }
    public async managmentaccessdata(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            var data:any;
           
            data = await new mgmtexpService().managmentaccessdata();
            for (var i=0; i<data.length; i++){
                data[i].employeeid=data[i].employeeid.toString()
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