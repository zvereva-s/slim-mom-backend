const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

async function googleAuth(req, res) {
  const { _id, email, name } = req.user;
  const payload = {
    id: _id,
  };
  const token = jwt.sign(payload, `${process.env.SECRET_KEY}`, {
    expiresIn: "1h",
  });
  await User.findByIdAndUpdate(_id, { token });

  res.redirect(
    `https://slim-mom-static.onrender.com/?token=${token}&_id=${_id}&email=${email}&name=${name}`
  );
}
module.exports = googleAuth;
