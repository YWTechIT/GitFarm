/* eslint-disable import/extensions */
import GitHub from "passport-github2";
import keys from "../../config/keys.js";
import { User } from "../../model/index.js";

const GitHubStrategy = GitHub.Strategy;
const { clientID, clientSecret } = keys.GitHub;

const callbackURL =
  keys.NODE_ENV === "production"
    ? `${keys.domain}/api/auth/github/callback`
    : `${keys.serverURI}/api/auth/github/callback`;

const config = {
  clientID,
  clientSecret,
  callbackURL,
};

export default new GitHubStrategy(
  config,
  async (accessToken, refreshToken, profile, done) => {
    const { username } = profile;
    // eslint-disable-next-line no-underscore-dangle
    const { id, avatar_url: avatarUrl } = profile._json;

    const findUser = await User.findOne({ id });
    if (!findUser) {
      const newUser = new User({
        id,
        username,
        avatarUrl,
        accessToken,
      });

      newUser.save();
      return done(null, newUser);
    }
    return done(null, findUser);
  },
);
