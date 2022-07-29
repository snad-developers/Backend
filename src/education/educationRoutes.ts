import { educationController } from "./educationController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new educationController();

// configure the routes
const educationRoutes = {
    name: "education",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/education',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
           
            {
                method: 'POST',
                path: '/geteducation',
                handler: controller.geteducation,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/education/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/education/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/education/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
 }

export default educationRoutes;