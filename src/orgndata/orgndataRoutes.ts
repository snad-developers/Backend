import { orgndataController } from "./orgndataController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new orgndataController();

// configure the routes
const orgndataRoutes = {
    name: "orgndata",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/orgndata',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/orgndata',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/orgndata/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/orgndata/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/orgndata/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default orgndataRoutes;