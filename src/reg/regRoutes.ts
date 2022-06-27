import { regController } from "./regController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new regController();

// configure the routes
const regRoutes = {
    name: "reg",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/reg',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/reg',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/reg/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/reg/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/reg/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            },

            {
                method: 'POST',
                path: '/reg/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
        ]);
    }
}

export default regRoutes;