import { imgexpController } from "./imgexpController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new imgexpController();

// configure the routes
const imgexpRoutes = {
    name: "imgexp",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/imgexp',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/imgexp',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/imgexp/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/imgexp/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/imgexp/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default imgexpRoutes;