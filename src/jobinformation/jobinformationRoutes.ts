import { jobinformationController } from "./jobinformationController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new jobinformationController();

// configure the routes
const jobinformationRoutes = {
    name: "jobinformation",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/jobinformation',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/jobinformation',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/jobinformation/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/jobinformation/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/jobinformation/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
 }

export default jobinformationRoutes;