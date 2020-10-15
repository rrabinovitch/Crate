import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import models from '../../setup/models';

const bcrypt = require('bcrypt');

describe("user queries", () => {
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

  beforeEach(async () => {
    const user1Data = {
      name: "The Admin",
      email: "admin@crate.com",
      password: bcrypt.hashSync('password123', 10),
      role: "admin",
    };

    const user2Data = {
      name: "The User",
      email: "user@crate.com",
      password: bcrypt.hashSync('password321', 10),
      role: "user",
    };

    await models.User.create(user1Data);
    await models.User.create(user2Data);
  });

  // this is what I think needs to be added in order to teardown
  // afterAll(() => {
  //   server.close();
  // });

  it("returns all users", async () => {
    const response = await request(server)
    .post('/')
    .send({ query: '{ users { name email } }'})
    .expect(200)

    expect(response.body.data.users.length).toEqual(2)
  });

  it("returns user by id", async () => {
    const response = await request(server)
    .post('/')
    .send({ query: '{ user(id: 2) {email name} }'})
    .expect(200)

    expect(response.body.data.user.name).toEqual('The User')
    expect(response.body.data.user.email).toEqual('user@crate.com')
    expect(response.body.data.user.style).toBeUndefined()
  });
});
