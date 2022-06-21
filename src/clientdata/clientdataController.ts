import * as Hapi from "@hapi/hapi";
import { Createclientdata, Updateclientdata } from "./clientdata";
import { clientdataService } from "./clientdataService";
import Boom from "@hapi/boom";

export class clientdataController {


    public async create(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: Createclientdata = request.payload as Createclientdata
            const result = await new clientdataService().create(requestBody);
            return h.response(result).code(201);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async getAll(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const result = await new clientdataService().getAll();
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }


    public async getById(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new clientdataService().getById(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async update(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: Updateclientdata = request.payload as Updateclientdata;
            const result = await new clientdataService().update(requestBody, id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }


    public async delete(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new clientdataService().delete(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }

}