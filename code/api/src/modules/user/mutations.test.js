import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import models from '../../setup/models';

const bcrypt = require('bcrypt');

describe("user mutations", () => {
  let server;

  beforeAll(() => {
    server = express(); // setting up server

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  beforeAll(async () => {
    const userData1 = {
      id: 1,
      name: "The User",
      email: "user@crate.com",
      password: bcrypt.hashSync('password321', 10),
      role: "user"
    };

    await models.User.create(userData1);
  });

  afterAll(async () => {
    await models.User.destroy({ where: {} })
    server.close();
  });

  it("updates user's style preference", async() => {
    const response = await request(server)
    .post('/')
    .send({ mutation: '{ userUpdate(id: 2) { style: "cute" } }'})
    .expect(200)
  })
})
