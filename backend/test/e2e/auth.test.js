const supertest = require('supertest');
const app = require('../../src/app');
const faker = require('faker');
const { assert } = require('chai');

const server = supertest(app);
const userClient = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe('Authentication', () => {
  describe('Login', () => {
    it('login client', async () => {
      const res = await server.post('/v1/login').send({
        email: userClient.email,
        password: userClient.password,
      });

      console.log(res.body, res.error);
      assert.equal(res.status, 200);
    });
  });
});
