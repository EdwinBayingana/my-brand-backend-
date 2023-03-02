import express from 'express'
import comment from '../controllers/commentController.js';

const router = express.Router();

router.post('/:id', comment.comment)
router.post('/', (req, res) => res.status(400).json({ 

        message: "Please specify which blog to comment on" 
        
    })
)

export default router