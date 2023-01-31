const { Strategy } = require("passport-facebook");

const { User } = require("../../models/user");

const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, FACEBOOK_CALLBACK_URL } =
  process.env;

const facebookParams = {
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: FACEBOOK_CALLBACK_URL,
};

const facebookCallback = async (
  req,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    console.log(profile);
    const { email, displayName } = profile;
    const user = await User.findOne({ email });
    if (user) {
      return done(null, user);
      // req.user = user;
    }
    const newUser = await User.create({ email, name: displayName });
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};
