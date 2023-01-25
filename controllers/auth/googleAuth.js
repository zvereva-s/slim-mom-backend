const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { APP_URL } = process.env;

async function googleAuth(req, res) {
  const { _id } = req.user;

  // const payload = { id: _id };

  const token = jwt.sign({ _id }, `${process.env.SECRET_KEY}`, {
    expiresIn: "6h",
  });
  await User.findByIdAndUpdate(_id, { token });

  //  res
  //  .status(201)
  // .json({
  //   token,
  // //   _id,
  //  })

  res.redirect(APP_URL);
}
module.exports = googleAuth;

/* 
backend 
redirect to main from contoroller
localhost:3000/?token=token&_id=id
frontend
проверем парамс 
App-> useEffect
usegueryparams 
--> redux 
*/
