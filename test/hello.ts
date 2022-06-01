import supertest from "supertest";
import app from "../src/hello";
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;

describe("GET /", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        expect(res.text).to.equal("Hello world!");
        if (err) done(err);
        done();
      });
  });
});

describe("GET /user", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
