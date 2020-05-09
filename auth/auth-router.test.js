const request = require('supertest');

const server = require('../api/server.js');
const db = require('../database/dbConfig.js')

describe('auth-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    it('register should return 201 status', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({username: "john", password: 'pass'})
        .set("Content-Type", "application/json")
        
        expect(res.status).toBe(201);
    })

    it('register should encrypt the password into something different', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({username: "john", password: 'pass'})

        expect(res.body.password).not.toBe('pass')
    })

});
