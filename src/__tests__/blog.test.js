const sum = require("../sum.js")

test('Add 2 numbers', () => {
    expect(sum(1,2)).toBe(3)
})


// import supertest from "supertest"
// import app from "../server.js"

// describe("Blog CRUD tests", () => {
//     describe("Get a blog route", () => {
//         describe("given the blog does not exist", () => {

//             it("should return a 404", async () => {
//                 const blogId = 123;
//                 await supertest(app).get(`/api/blogs/${blogId}`).expect(404)
//             })
//         })
//     })
// })