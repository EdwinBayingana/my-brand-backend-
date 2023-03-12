import express from 'express';
import {
  listAllUsers,
  updateUser,
  deleteUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.get('/', listAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser); //!.........................

export default router;
