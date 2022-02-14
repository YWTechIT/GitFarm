import "regenerator-runtime";
import request from "supertest";
import { GOAL } from "../../model/default/index.js";
import app from "../../server.js";

describe("/api/users", () => {
  const token =
    "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0NTQzMDEzIiwiZW1haWwiOiJ5d3RlY2hpdEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IllXVGVjaElUIiwiaWF0IjoxNjQ0ODQ5NTA0LCJleHAiOjE2NDU0NTQzMDR9.KiW72eE8_ZNos42UYOa73_KohnoaiiHEYLeMFxO9eYw";

  describe("/api/users/rank", () => {
    test("GET rank", async () => {
      const response = await request(app)
        .get("/api/users/rank")
        .set("Cookie", token)
        .send();

      const expectedStatus = 200;
      const expectedMyRank = {
        username: expect.any(String),
        avatarUrl: expect.any(String),
        score: expect.any(Number),
      };
      const expectedUserRank = [
        {
          username: expect.any(String),
          avatarUrl: expect.any(String),
          score: expect.any(Number),
        },
      ];

      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body.data.myRank).toEqual(
        expect.objectContaining(expectedMyRank),
      );
      expect(response._body.data.userRank).toEqual(
        expect.arrayContaining(expectedUserRank),
      );
    });
  });

  describe("/api/users/repos/language", () => {
    test("GET language", async () => {
      const response = await request(app)
        .get("/api/users/repos/language")
        .set("Cookie", token)
        .send();

      const expectedStatus = 200;
      const expectedBody = [
        {
          repo: expect.any(String),
          language: expect.any(String),
        },
      ];

      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body.languages).toEqual(
        expect.arrayContaining(expectedBody),
      );
    });
  });

  describe("/api/users/resolution", () => {
    test("POST resolution", async () => {
      const response = await request(app)
        .post("/api/users/resolution")
        .set("Cookie", token)
        .send({ resolution: "테스트 코드 작성 재밌다." });

      const expectedStatus = 201;
      const expectedBody = {
        success: true,
        resolution: "테스트 코드 작성 재밌다.",
      };

      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body).toStrictEqual(expectedBody);
    });

    test("GET resolution", async () => {
      const response = await request(app)
        .get("/api/users/resolution")
        .set("Cookie", token)
        .send();

      const expectedStatus = 200;
      const expectedBody = {
        success: true,
        resolution: "테스트 코드 작성 재밌다.",
      };

      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body).toStrictEqual(expectedBody);
    });
  });

  describe("/api/users/goal", () => {
    test("POST Goal", async () => {
      const response = await request(app)
        .post("/api/users/goal")
        .set("Cookie", token)
        .send({ goal: GOAL });

      const expectedStatus = 201;
      const expectedBody = {
        success: true,
        goal: GOAL,
      };

      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body).toStrictEqual(expectedBody);
    });

    test("GET Goal", async () => {
      const response = await request(app)
        .get("/api/users/goal")
        .set("Cookie", token)
        .send();

      const expectedStatus = 200;
      const expectedBody = {
        success: true,
        goal: GOAL,
      };

      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body).toStrictEqual(expectedBody);
    });
  });

  describe("/api/users/badge", () => {
    test("POST badge", async () => {
      const response = await request(app)
        .post("/api/users/badge")
        .set("Cookie", token)
        .send({ badge: 1 });

      const expectedStatus = 201;
      const expectedBody = {
        success: true,
        badge: 1,
      };
      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body).toStrictEqual(expectedBody);
    });

    test("GET badge", async () => {
      const response = await request(app)
        .get("/api/users/badge")
        .set("Cookie", token)
        .send();
      const badge = [
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
      const expectedStatus = 200;
      const expectedBody = {
        success: true,
        badge,
      };
      expect(response.statusCode).toEqual(expectedStatus);
      expect(response._body).toStrictEqual(expectedBody);
    });
  });
});
