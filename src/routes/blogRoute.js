import express from "express"
import blogController from "../controllers/blogController.js"
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"
import cookieJwtAuth from "../middleware/cookieJwtAuth.js"
import upload from "../middleware/multer.js"

// Router method
const router = express.Router()

router.get("/", blogController.getBlogs) 
router.get("/:id", blogController.getBlog) 
router.post("/", upload.single('imageUrl'), verifyIsAdmin, blogController.createBlog) 
router.put("/:id", cookieJwtAuth, verifyIsAdmin,blogController.updateBlog) 
router.delete("/:id", cookieJwtAuth, verifyIsAdmin,blogController.deleteBlog) 


export default router
