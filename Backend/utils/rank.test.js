import "regenerator-runtime";
import { calcRankWithConcurrentScore } from "../utils/rank.js";

const mockUserData = [
  {
    username: "user1",
    avatarUrl: "https://avatars.githubusercontent.com/u/000?v=4",
    totalScore: 10,
  },
  {
    username: "user2",
    avatarUrl: "https://avatars.githubusercontent.com/u/111?v=4",
    totalScore: 20,
  },
  {
    username: "user3",
    avatarUrl: "https://avatars.githubusercontent.com/u/222?v=4",
    totalScore: 30,
  },
];

const expectUserRank = [
  {
    username: "user3",
    avatarUrl: "https://avatars.githubusercontent.com/u/222?v=4",
    totalScore: 30,
    rank: 1,
  },
  {
    username: "user2",
    avatarUrl: "https://avatars.githubusercontent.com/u/111?v=4",
    totalScore: 20,
    rank: 2,
  },
  {
    username: "user1",
    avatarUrl: "https://avatars.githubusercontent.com/u/000?v=4",
    totalScore: 10,
    rank: 3,
  },
];

describe("calculating rank", () => {
  test("calcRankWithConcurrentScore", async () => {
    expect(calcRankWithConcurrentScore(mockUserData)).toEqual(expectUserRank);
  });
});
