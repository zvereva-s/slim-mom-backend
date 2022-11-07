const { User } = require("../../models/user");
const { requestError } = require("../../utils");

const { APP_URL } = process.env;

async function verifyEmail(req, res) {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw requestError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.redirect(`${APP_URL}/signin`);
  // res.send({
  //   message: "Verification successful",
  // });
}
module.exports = verifyEmail;
