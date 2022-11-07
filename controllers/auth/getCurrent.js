async function getCurrent(req, res, next) {
  const { email, _id, token, verify, name } = req.user;
  res.json({
    id: _id,
    name,
    email,
    token,
    verify,
  });
  next();
}
module.exports = getCurrent;
