import { Router } from 'express';
import blogController from '../controllers/blogController.js';
import verifyIsAdmin from '../middleware/verifyIsAdmin.js';
import cookieJwtAuth from '../middleware/cookieJwtAuth.js';
import upload from '../middleware/multer.js';
import express from 'express';

// Router method
const router = express.Router();

router.get('/getAllBlogs', blogController.getBlogs);
router.get('/:id', blogController.getBlog);
router.post(
  '/newBlog',
  // upload.single('imageUrl'),
  verifyIsAdmin,
  blogController.createBlog,
);
router.put(
  '/updateBlog/:id',
  cookieJwtAuth,
  verifyIsAdmin,
  blogController.updateBlog,
);
router.delete(
  '/deleteBlog/:id',
  cookieJwtAuth,
  verifyIsAdmin,
  blogController.deleteBlog,
);

export default router;
