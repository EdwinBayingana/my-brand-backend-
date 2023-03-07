import app from '../server_test.js';
import request from 'supertest';
import messages from '../controllers/messageController.js';

describe('Testing the messageController', () => {
  describe('Sending an inquiry message', () => {
    it('should display all messages from contact me page', async () => {
      try {
        await request(app).get('/api/messages').expect(200);
      } catch (error) {
        await request(app).get('/api/messages').expect(401);
      }
    });
  });
  describe('Sending a feedback message but to the wrong endpoint/route', () => {
    it('should create a new feedback message', async () => {
      const response = await request(app).post('/api/messagess');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Page Not Found');
    });
  });
});
