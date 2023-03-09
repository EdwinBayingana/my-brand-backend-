// Thinking / not_Sure Reaction route
import express from 'express';
import thinkingReaction from '../controllers/thinkingController.js';

const router = express.Router();

router.post('/:id', thinkingReaction.createThinkingReaction);
router.post('/', (req, res) =>
  res.status(400).json({
    message: 'Please specify which blog to think-react',
  }),
);

export default router;
