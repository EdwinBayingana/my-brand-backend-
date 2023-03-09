// Love Reaction route
import express from 'express';
import love from '../controllers/loveController.js';

const router = express.Router();

router.post('/:id', love.createLoveReaction);
router.post('/', (req, res) =>
  res.status(400).json({
    message: 'Please specify which blog to fire-react',
  }),
);

export default router;
