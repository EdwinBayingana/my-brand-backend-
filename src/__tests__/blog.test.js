// import mongoose from "mongoose";
// import supertest from "supertest"
// import createServer from "../utils/serverUtil.js"
// import createBlog from "../controllers/blogController.js"

// const app = createServer();

// const theBlogId = new mongoose.Types.ObjectId().toString();

// export const blogPayload = {
//         _id: theBlogId,
//         author: "The tester",
//         title: "test photo 2",
//         body: "jdbvchecbie",
//         imageUrl: "http://res.cloudinary.com/dlw8ohn6p/image/upload/v1677652490/achafoxzcdhk1z7myxvk.jpg",
// }

// describe("Blog CRUD tests", () => {
//     describe("Get a blog route", () => {
//         describe("given the blog does not exist", () => {

//             it("should return a 404", async () => {
//                 const blogId = 123;
//                 await supertest(app).get(`/blogs/${blogId}`).expect(404)
//             })
//         })
//     });

//     describe("Get a blog route", () => {
//         describe("given the blog does exist", () => {

//             it("should return a 200 status and the product", async () => {

//                 const blog = await createBlog(blogPayload)


//                 const {body, statusCode} = await supertest(app).get(`/blogs/${blog.blogId}`)
//                 expect(statusCode).toBe(200)
//                 expect(body.blogId).toBe(blog.blogId)   
                
//             })
//         })
//     });
// })