import express from 'express';
import { listAllUsers, updateUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', listAllUsers);
router.put('/:id', updateUser);

export default router;
