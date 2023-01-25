const passport = require("passport");
const googleStrategy = require("./strategies/google-strategy");

passport.use("google", googleStrategy);

module.exports = passport;
