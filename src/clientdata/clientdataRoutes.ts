import { clientdataController } from "./clientdataController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new clientdataController();

// configure the routes
const clientdataRoutes = {
    name: "clientdata",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/clientdata',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/clientdata',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/clientdata/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/clientdata/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/clientdata/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
 }

export default clientdataRoutes;