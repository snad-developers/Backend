import { payrollexpenseController } from "./payrollexpenseController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new payrollexpenseController();

// configure the routes
const payrollexpenseRoutes = {
    name: "payrollexpense",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/payrollexpense',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/payrollexpense',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/payrollexpense/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/payrollexpense/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/payrollexpense/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/payrollaccess',
                handler: controller.payrollaccessdata,
                options: {
                    tags: ['api']
                }
            },
        ]);
    }
}

export default payrollexpenseRoutes;