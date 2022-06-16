import { empdataController } from "./empdataController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new empdataController();

// configure the routes
const empdataRoutes = {
    name: "empdata",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/empdata',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/empdata',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/empdata/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/empdata/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/empdata/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default empdataRoutes;