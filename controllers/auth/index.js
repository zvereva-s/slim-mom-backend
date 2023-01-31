const signin = require("./signin");
const signup = require("./signup");

const logout = require("./logout");
const getCurrent = require("./getCurrent");

const googleAuth = require("./googleAuth");
const facebookAuth = require("./facebookAuth");

module.exports = {
  signin,
  signup,
  logout,
  getCurrent,
  googleAuth,
  facebookAuth,
};
