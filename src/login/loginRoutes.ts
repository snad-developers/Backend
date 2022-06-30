import { loginController } from "./loginController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new loginController();

// configure the routes
const loginRoutes = {
    name: "login",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/login',
                handler: controller.LoginCheck,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'POST',
                path: '/forgotpassword',
                handler: controller.forgotPassword,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'POST',
                path: '/securityanscheck/{id}',
                handler: controller.securityanscheck,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'POST',
                path: '/resetpassword/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },

            {
                method: 'GET',
                path: '/dashboard',
                handler: controller.dashboard,
                options: {
                    tags: ['api']
                }
            },
            {
                method:'POST',
                path:'/approve',
                handler:controller.approve,
                options: {
                    tags: [ 'api' ]
                }
            },
            {
                method:'POST',
                path:'/fileupload',
                handler:controller.fileupload,
                options: {
                    tags: [ 'api' ]
                }
            },
            {
                method:'GET',
                path:'/accessdata',
                handler:controller.accessdata,
                options: {
                    tags: [ 'api' ]
                }
            }
           
        ]);
    }
}

export default loginRoutes;