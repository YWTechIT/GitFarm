import dotenv from "dotenv";

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  domain: process.env.domain,
  mongoURI: process.env.mongoURI,
  secretOrKey: process.env.secretOrKey,
  cookieMaxAge: 1000 * 60 * 60 * 24 * 14,
  GitHub: {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
  },
};
