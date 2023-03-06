import request from 'supertest';
import app from '../server_test';

describe('Testing the logoutController', () => {
  it('should log out a signed in user', async () => {
    const response = await request(app).post('/api/logout').expect(200);
    expect(response.body.message).toBe('You are now logged out');
  });
});
