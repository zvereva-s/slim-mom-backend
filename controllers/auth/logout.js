const { User } = require("../../models/user");

async function logout(req, res) {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(200).json({ message: "Done✅" });
}
module.exports = logout;
