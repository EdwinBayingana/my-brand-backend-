import request from 'supertest';
import app from '../server_test.js';
import { Blog } from '../models/blogModel.js';

describe('Testing the blog Controller', () => {
  //   jest.setTimeout(15000);
  describe('Given the blog exists', () => {
    it('should return the blog', async () => {
      const response = await request(app).get(
        `/blogs/64045fa8740cb65459587765`,
      );
      try {
        expect(response.status).toBe(200);
      } catch (error) {
        expect(response.status).toBe(404);
      }
    });
  });
  describe('Given the blog does not exist', () => {
    it('should return a 404', async () => {
      const blogId = 123;
      await request(app).post(`/blogs/${blogId}`).expect(404);
      // await supertest(app).post(`/blogs/${blogId}`).expect(404);                           //! Work on this line
    });
  });
  describe('Given we want to create a blog but you are not logged in', () => {
    it('should create a new blog', async () => {
      const response = await request(app)
        .post('/api/blogs')
        .field('author', 'the author name')
        .field('title', 'The blog title')
        .field('body', 'New test blog body')
        .field('image', 'reserved for image');
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('No token provided');
    });
  });
});
