import express from 'express';
import fire from '../controllers/fireController.js';

const router = express.Router();

router.post('/:id', fire.createFireReaction);
router.post('/', (req, res) =>
  res.status(400).json({
    message: 'Please specify which blog to fire-react',
  }),
);

export default router;
