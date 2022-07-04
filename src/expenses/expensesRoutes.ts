import { expensesController } from "./expensesController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new expensesController();

// configure the routes
const expensesRoutes = {
    name: "expenses",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/expenses',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/expenses',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/expenses/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/expenses/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/expenses/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
 }

export default expensesRoutes;