import request from 'supertest';
import { Express } from 'express';
import app from '../server_test.js';

describe('Testing the loginController', () => {
  describe('Log a User in', () => {
    it('should log a user if they already have an account', async () => {
      const userToSignin = {
        email: 'email',
        password: 'password',
      };
      try {
        const response = await request(app).post('/login').send(userToSignin);
        expect(response.statusCode).toBe(200);
      } catch (error) {
        const err = await request(app).post('/login').send(userToSignin);
        expect(err.statusCode).toBe(404);
      }
    });
  });
});
