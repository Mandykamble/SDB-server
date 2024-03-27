/* eslint-disable no-undef */
const request = require("supertest");
const app = require("./index.js");

describe("GET /", () => {
  it("responds with Hello from mandar !", (done) => {
    request(app).get("/").expect("Hello from mandar !", done);
  });
});

describe("GET /api/students/", () => {
  it("responds with json", (done) => {
    request(app)
      .get("/api/students/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
