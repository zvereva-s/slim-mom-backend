const bcrypt = require("bcryptjs");
const bsonId = require("bson-objectid");

const { BASE_URL } = process.env;
const { User } = require("../../models/user");
const { requestError, sendMail } = require("../../utils");

async function signup(req, res) {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw requestError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const verificationToken = bsonId();
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Confirm the registration on contacts application",
    html: `<a href="${BASE_URL}/api/auth/verify/${verificationToken}" target="_blank">Push to confirm</a>`,
  };

  await sendMail
    .sendMail(mail)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      verify: result.verify,
      verificationToken: result.verificationToken,
    },
  });
}

module.exports = signup;
