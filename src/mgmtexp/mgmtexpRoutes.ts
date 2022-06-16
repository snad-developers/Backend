import { mgmtexpController } from "./mgmtexpController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new mgmtexpController();

// configure the routes
const mgmtexpRoutes = {
    name: "mgmtexp",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/mgmtexp',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/mgmtexp',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/mgmtexp/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/mgmtexp/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/mgmtexp/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default mgmtexpRoutes;