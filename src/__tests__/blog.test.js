import supertest from "supertest"
import app from "../server.test.js";



describe("Blog CRUD tests", () => {
    describe("Get a blog route", () => {
        describe("given the blog does not exist", () => {

            it("should return a 404", async () => {
                const blogId = 123;
                await supertest(app).get(`/blogs/${blogId}`).expect(404)
            })
        })
    });


})