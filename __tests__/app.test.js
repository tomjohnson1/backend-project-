const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data");

beforeEach(() => seed(data));
afterAll(() => db.end());

describe(`/api/topics tests`, () => {
  describe(`GET tests`, () => {
    test(`/api/topics, returns an array of objects`, () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then(({ body }) => {
          const { topics } = body;
          topics.forEach((topic) =>
            expect(topic).toEqual(
              expect.objectContaining({
                slug: expect.any(String),
                description: expect.any(String),
              })
            )
          );
        });
    });
  });
  describe(`Error handling tests`, () => {
    test(`404 - Path not found for /api/topi`, () => {
      return request(app)
        .get("/api/topi")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("Route not found");
        });
    });
  });
});
describe(`/api/articles tests`, () => {
  describe(`GET tests`, () => {
    test(`/api/articles, returns an array of objects`, () => {
      return request(app)
        .get("/api/articles")
        .expect(200)
        .then(({ body }) => {
          const { articles } = body;
          articles.forEach((article) =>
            expect(article).toEqual(
              expect.objectContaining({
                author: expect.any(String),
                title: expect.any(String),
                article_id: expect.any(Number),
                topic: expect.any(String),
                created_at: expect.any(String),
                votes: expect.any(Number),
              })
            )
          );
        });
    });
  });
});
describe(`/api/users tests`, () => {
  describe(`GET tests`, () => {
    test(`/api/users, returns an array of objects`, () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body }) => {
          const { users } = body;
          users.forEach((user) =>
            expect(user).toEqual(
              expect.objectContaining({
                username: expect.any(String),
              })
            )
          );
        });
    });
  });
});
