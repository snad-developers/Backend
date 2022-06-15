import chai, { expect } from "chai"
import chaiHttp from "chai-http";
import * as Hapi from "@hapi/hapi";
import appInstance from "./src/app";


chai.use(chaiHttp);



describe("end-to-end / integration tests", () => {

    // let server: Hapi.Server;
    let server: Hapi.Server;

     const API = 'http://localhost:3000'

   
    beforeAll(async () => {
        await appInstance.init();
        // server = await appInstance.theApp;
        server = await appInstance.theApp
        // await server.start()
        await server.start()
    });

    beforeEach(async () => {

    });

    afterAll(async () => {
        await server.stop();
    });

    describe("Base route endpoint", () => {
        it("Live server should return success from base route", done => {
            chai.request(API)
                .get("/")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });



    describe("User model endpoint", () => {
        it("Live server should return all users in the database", done => {
            chai.request(API)
                .get("/users")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });



})


