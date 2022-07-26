import { empexpController } from "./empexpController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new empexpController();

// configure the routes
const empexpRoutes = {
    name: "empexp",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/empexp',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/empexp',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/empexp/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/empexp/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/empexp/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/employeeaccessdata',
                handler: controller.employeeaccessdata,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'POST',
                path: '/empexpdetails',
                handler: controller.expdetails,
                options: {
                    tags: ['api']
                }
            },


        ]);
    }
 }

export default empexpRoutes;