import axios from "axios";

const MILLISECOND = 1000;
const SECOND = 15;

export const LOADING_TIME = MILLISECOND * SECOND;

export const { MODE } = process.env;

export const SERVER_URL =
  // eslint-disable-next-line no-nested-ternary
  MODE === "production"
    ? "/"
    : MODE === "development"
    ? "http://localhost:7777"
    : "http://localhost:8888";

export const LOGIN_URL =
  // eslint-disable-next-line no-nested-ternary
  MODE === "production"
    ? "/api/auth/github"
    : MODE === "development"
    ? "http://localhost:7777/api/auth/github"
    : "/main";

export const LOADING_URL =
  // eslint-disable-next-line no-nested-ternary
  MODE === "production"
    ? "/api/users/loading"
    : MODE === "development"
    ? `${SERVER_URL}/api/users/loading`
    : "/main";

export const AXIOS = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

const mockServer = MODE === "mock";

export const todayCommitURL = mockServer ? "/today" : "/api/users/today";

export const todayDetailCommitURL = mockServer
  ? "/detail"
  : "/api/users/today/detail";

export const myInfoURL = mockServer ? "/mypage" : "/api/users/mypage";

export const commitsTotalPerMonthURL = mockServer
  ? "/month"
  : "/api/users/commits/total/per/year";

export const commitMonthlyURL = mockServer
  ? "/perMonth"
  : "/api/users/commits/total/per/day";

export const userBadgesURL = mockServer ? "/badge" : "/api/users/badges";

export const badgesURL = mockServer ? "/badge" : "/api/users/badge";

export const goalURL = mockServer ? "/goal" : "/api/users/today/goal";

export const resolutionURL = mockServer
  ? "/resolution"
  : "/api/users/resolution";

export const recentThreeYearURL = mockServer
  ? "/recentThreeYear"
  : "/api/users/commits/total/recent/year";

export const reposLanguageURL = mockServer
  ? "/reposLanguage"
  : "/api/users/repos/language";

export const logoutURL = mockServer ? "/logout" : "/api/auth/logout";

export const deleteAccountURL = mockServer ? "/delete" : "/api/users/delete";

export const rankURL = mockServer ? "/rank" : "/api/users/rank";
