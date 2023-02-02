async function getCurrent(req, res, next) {
  const { email, _id, token, name, healthyData } = req.user;

  res.json({
    token,
    user: {
      id: _id,
      name,
      email,
      healthyData,
    },
  });
  next();
}
module.exports = getCurrent;
