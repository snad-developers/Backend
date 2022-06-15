import * as Hapi from "@hapi/hapi";


// configure the base route
const baseRoute = {
    name: "attendance",
    register: async (server: Hapi.Server) => {
        server.route(
            {
                method: 'GET',
                path: '/',
                handler: (request: Hapi.Request,
                    // h: Hapi.ResponseToolkit
                ) => {

                    return `Welcome App`

                }
            }
        );
    }
}

export default baseRoute;