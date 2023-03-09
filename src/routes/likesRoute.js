import express from 'express';
import like from '../controllers/likesController.js';

const router = express.Router();

router.post('/:id', like.createLike);
router.post('/', (req, res) =>
  res.status(400).json({
    message: 'Please specify which blog to like',
  }),
);

export default router;
