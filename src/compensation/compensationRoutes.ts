import { compensationController } from "./compensationController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new compensationController();

// configure the routes
const compensationRoutes = {
    name: "compensation",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/compensation',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/compensation',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/compensation/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/compensation/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/compensation/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
 }

export default compensationRoutes;