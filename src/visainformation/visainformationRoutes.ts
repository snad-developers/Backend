import { visainformationController } from "./visainformationController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new visainformationController();

// configure the routes
const visainformationRoutes = {
    name: "visainformation",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/visainformation',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/visainformation',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/visainformation/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/visainformation/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/visainformation/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
 }

export default visainformationRoutes;