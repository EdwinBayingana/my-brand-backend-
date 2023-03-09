// Dislike Reaction route
import express from 'express';
import dislike from '../controllers/dislikeController.js';

const router = express.Router();

router.post('/:id', dislike.createDislikeReaction);
router.post('/', (req, res) =>
  res.status(400).json({
    message: 'Please specify which blog to dislike-react',
  }),
);

export default router;
