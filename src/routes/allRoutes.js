import express from "express"

import blogRoute from "./blogRoute.js"
import registerRoute from "./registerRoute.js"
import loginRoute from "./loginRoute.js"
import logout from "../routes/logoutRoute.js"
import messages from "../controllers/messageController.js"
import comment from "../controllers/commentController.js"

const router = express.Router()

// List all routes below
router.use("/blogs", blogRoute)
router.use("/register", registerRoute)
router.use("/login", loginRoute)
router.use('/logout', logout)
router.use('/messages', messages)
router.use('/comment', comment)

router.use((req,res) => {
    return res.status(404).json({
        message: "Page Not Found"
    })
})


export default router