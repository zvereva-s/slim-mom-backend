const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { HealthyData } = require("../../models/healthyData");
const { requestError } = require("../../utils");

const { SECRET_KEY } = process.env;

async function signin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const owner = user._id;
  const healthyData = await HealthyData.findOne({ owner });

  if (!user) {
    throw requestError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw requestError(401, "Email or password is wrong");
  }

  // create token //
  const payload = { id: user._id };

  const token = jwt.sign(payload, `${SECRET_KEY}`, { expiresIn: "6h" });

  res.status(201).json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    healthyData: {
      owner: healthyData.owner,
      notAllowedProducts: healthyData.notAllowedProducts,
      bodyCalculating: healthyData.bodyCalculating,
      dailyRate: healthyData.dailyRate,
    },
  });
}
module.exports = signin;
