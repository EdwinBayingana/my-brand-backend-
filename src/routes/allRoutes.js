import { Router } from 'express';
import blogRoute from './blogRoute.js';
import registerRoute from './registerRoute.js';
import loginRoute from './loginRoute.js';
import logout from '../routes/logoutRoute.js';
import messagesRoute from '../routes/messagesRoute.js';
import commentRoute from '../routes/commentRoutes.js';
import likesRoute from './likesRoute.js';
import cookieJwtAuth from '../middleware/cookieJwtAuth.js';
import usersRoute from './usersRoute.js';
import verifyIsAdmin from '../middleware/verifyIsAdmin.js';
//blog-Reaction routes
import fireRoute from './fireRoute.js';
import loveRoute from './loveRoute.js';
import dislikeRoute from './dislikeRoute.js';
import thinkingRoute from './thinkingRoute.js';

const router = Router();

router.use('/blogs', blogRoute);
router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/logout', logout);
router.use('/messages', messagesRoute);
router.use('/comment', commentRoute);
// router.use('/users', cookieJwtAuth, verifyIsAdmin, usersRoute); //!Commented out to initially allow easy integration
router.use('/users', usersRoute);
// router.use('/like', cookieJwtAuth, likesRoute);
router.use('/like', likesRoute);

//BLOG REACTIONS
router.use('/fire-reaction', cookieJwtAuth, fireRoute);
router.use('/love-reaction', cookieJwtAuth, loveRoute);
router.use('/dislike-reaction', cookieJwtAuth, dislikeRoute);
router.use('/thinking-reaction', cookieJwtAuth, thinkingRoute);

router.use((req, res) => {
  return res.status(404).json({
    message: 'Page Not Found',
  });
});

export default router;
