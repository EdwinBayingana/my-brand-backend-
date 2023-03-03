import supertest from "supertest"
import createServer from "../utils/serverUtil.js"

const app = createServer();

describe("Blog CRUD tests", () => {
    describe("Get a blog route", () => {
        describe("given the blog does not exist", () => {

            it("should return a 404", async () => {
                const blogId = 123;
                await supertest(app).get(`/blogs/${blogId}`).expect(404)
            })
        })
    })
})