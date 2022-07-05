import * as Hapi from "@hapi/hapi";
import { Createimgexp, Updateimgexp } from "./imgexp";
import { imgexpService } from "./imgexpService";
import Boom from "@hapi/boom";

export class imgexpController {


    public async create(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: Createimgexp = request.payload as Createimgexp
            const result = await new imgexpService().create(requestBody);
            return h.response(result).code(201);
        }   catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async getAll(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const result = await new imgexpService().getAll();
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }


    public async getById(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new imgexpService().getById(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async update(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: Updateimgexp = request.payload as Updateimgexp;
            const result = await new imgexpService().update(requestBody, id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }


    public async delete(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new imgexpService().delete(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }

    public async operationalaccess(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            var data:any;
           
            data = await new imgexpService().operational();
            console.log(data);
            for (var i=0; i<data.length; i++){
                data[i].employeeid=data[i].employeeid.toString()
                data[i].totalexpenses=data[i].totalexpenses.toString();
               
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