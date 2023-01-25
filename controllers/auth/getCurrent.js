async function getCurrent(req, res, next) {
  const { email, _id, token, name } = req.user;
  res.json({
    id: _id,
    name,
    email,
    token,
  });
  next();
}
module.exports = getCurrent;
