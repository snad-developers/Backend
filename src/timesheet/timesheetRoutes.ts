import { timesheetController } from "./timesheetController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new timesheetController();

// configure the routes
const timesheetRoutes = {
    name: "timesheet",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/timesheet',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/timesheet',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/timesheet/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/timesheet/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/timesheet/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default timesheetRoutes;