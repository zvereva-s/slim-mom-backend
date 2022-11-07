const signin = require("./signin");
const signup = require("./signup");

const logout = require("./logout");
const getCurrent = require("./getCurrent");

const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signin,
  signup,
  logout,
  getCurrent,
  verifyEmail,
  resendVerifyEmail,
};
