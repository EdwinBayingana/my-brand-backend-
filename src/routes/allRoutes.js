import { Router } from 'express';
import blogRoute from './blogRoute.js';
import registerRoute from './registerRoute.js';
import loginRoute from './loginRoute.js';
import logout from '../routes/logoutRoute.js';
import messagesRoute from '../routes/messagesRoute.js';
import commentRoute from '../routes/commentRoutes.js';

const router = Router();

// List all routes below
router.use('/blogs', blogRoute);
router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/logout', logout);
router.use('/messages', messagesRoute);
router.use('/comment', commentRoute);

router.use((req, res) => {
  return res.status(404).json({
    message: 'Page Not Found',
  });
});

export default router;
