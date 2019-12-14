const request = require('supertest');

const server = require('../auth/auth-model.js');
const db = require('../database/dbConfig.js');

describe('auth-model', () => {
  describe('add()', function() {
    beforeEach(async () => {
      await db('users').truncate();
    });

    it('should add a user', async () => {
      await server.add({ username: 'John', password: 'abc' });

      const users = await db('users');

      expect(users).toHaveLength(1);
    });

    it('should add the provided user', async () => {
      await server.add({ username: 'Jane', password: 'abc' });
      await server.add({ username: 'John', password: 'abcd' });

      const users = await db('users');

      expect(users).toHaveLength(2);
      expect(users[0].username).toBe('Jane');
      expect(users[1].username).toBe('John');
    });
  });
});
