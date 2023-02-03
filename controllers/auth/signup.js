const bcrypt = require("bcryptjs");
const bsonId = require("bson-objectid");

const { User } = require("../../models/user");
const { requestError } = require("../../utils");

const notAllowedProducts = require("../../db/notAllowedProducts");

async function signup(req, res) {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw requestError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    name,
    email,
    password: hashPassword,
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

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      healthyData: result.healthyData,
    },
  });
}

module.exports = signup;
