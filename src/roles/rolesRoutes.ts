import { rolesController } from "./rolesController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new rolesController();

// configure the routes
const rolesRoutes = {
    name: "roles",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/roles',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/roles',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/roles/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/roles/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/roles/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default rolesRoutes;