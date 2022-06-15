import * as Hapi from "@hapi/hapi";
import baseRoute from "./baseRoute";
import regRoutes from "./reg/regRoutes";
import usersRoutes from "./users/usersRoutes";
import * as HapiSwagger from "../node_modules/hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";





class App {

    theApp: Hapi.Server | undefined;

    constructor() {
    }

    // function to initialize the server after routes have been registered

    public async init() {

        // set up server
        this.theApp = Hapi.server({
            port: process.env.PORT || 3000,
            host: process.env.HOST || 'localhost',
             routes: {
                cors: {
                    origin: ['*'], // an array of origins or 'ignore'    
                    credentials: true // boolean - 'Access-Control-Allow-Credentials'
                }
            }
        });

        // Configure swagger documentation

        const swaggerOptions: HapiSwagger.RegisterOptions = {
            info: {
                title: "Project 1",
                version: "1.0.0",
                description: "Test",
                contact: {
                    name: "Test",
                    url: "TEST"
                }
            }

        };

        const swaggerPlugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
            {
                plugin: Inert
            },
            {
                plugin: Vision
            },
            {
                plugin: HapiSwagger,
                options: swaggerOptions
            }
        ]

        // register swagger plugins
        await this.theApp.register(swaggerPlugins, { once: true });

        // register routes
        await this.theApp.register([
            baseRoute,
            regRoutes

        ], { once: true }).then(async () => {
            console.log("Route(s) have been registered");

            // initialize app with routes
            await this.theApp?.initialize().then(() => {
                console.log("The app has been initialized");
            });

        });
    }

    // Function to start the server for the main application or for tests

    public async start() {
        await this.theApp?.start();
    }


}

// create singleton for use in main app or for tests.
const appInstance = new App();

export default appInstance;



