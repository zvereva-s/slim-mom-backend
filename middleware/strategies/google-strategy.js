const { Strategy } = require("passport-google-oauth2");
const { User } = require("../../models/user");
const notAllowedProducts = require("../../db/notAllowedProducts");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL, APP_URL } =
  process.env;

const callbackURL = `${APP_URL}${GOOGLE_CALLBACK_URL}`;

const googleParams = {
  clientID: `${GOOGLE_CLIENT_ID}`,
  clientSecret: `${GOOGLE_CLIENT_SECRET}`,
  callbackURL,
  passReqToCallback: true,
};

const googleCallback = async (
  req,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    const { email, displayName } = profile;
    const user = await User.findOne({ email });
    if (user) {
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      name: displayName,
      healthyData: {
        notAllowedProducts,
        bodyCalculating: {
          age: 0,
          gender: "",
          height: 0,
          physicalActivity: 0,
          weight: 0,
          bloodType: 0,
          desiredWeight: 0,
        },
        dailyRate: "0",
      },
    });
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};

const googleStrategy = new Strategy(googleParams, googleCallback);
module.exports = googleStrategy;
