const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const facebookAuth = async (req, res) => {
  const { _id, email, name } = req.user;
  const payload = {
    id: _id,
  };
  const token = jwt.sign(payload, `${process.env.SECRET_KEY}`, {
    expiresIn: "6h",
  });
  await User.findByIdAndUpdate(_id, { token });
  res.redirect(
    `http://localhost:3000/?token=${token}&_id=${_id}&email=${email}&name=${name}`
  );
};

module.exports = facebookAuth;
