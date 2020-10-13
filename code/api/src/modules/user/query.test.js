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

  it("is true", () => {
    expect(true).toBe(true)
  });

  it("returns all users", async () => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ users { name email } }'})
    .expect(200)

    console.log(response.body.data)
    expect(response.body.data.users.length).toEqual(2)
  });

  it("returns user by id", async () => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ user(id: 2) {email name} }'})
    .expect(200)
    console.log(response.body.data)
    expect(response.body.data.user.name).toEqual('The User')
  });
});
