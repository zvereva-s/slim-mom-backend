const { Strategy } = require("passport-google-oauth2");
const { User } = require("../../models/user");
const passport = require("passport");

const googleParams = {
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  // callbackURL: `${process.env.APP_URL}${process.env.GOOGLE_CALLBACK_URL}`,
  callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,

  passReqToCallback: true,
};
const googleCallback = async (
  req,
  accessToken,
  refreshToken,
  profile,
  done
  // cb
) => {
  try {
    const { email, displayName } = profile;
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, user);
      // req.user = user;
    }
    const newUser = await User.create({ email, name: displayName });
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};
const googleStrategy = new Strategy(googleParams, googleCallback);
module.exports = googleStrategy;
