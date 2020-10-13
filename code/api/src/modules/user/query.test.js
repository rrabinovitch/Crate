import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

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
