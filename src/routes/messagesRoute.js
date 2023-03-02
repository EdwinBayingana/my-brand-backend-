import express  from "express";
import messages from "../controllers/messageController"
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router = express.Router();

router.post('/', messages.sendMessage)
router.get('/', verifyIsAdmin, messages.displayMessage)

export default router