const { HealthyData } = require("../../models/healthyData");

async function getCurrent(req, res, next) {
  const { email, _id, token, name } = req.user;
  const owner = _id;

  const healthyData = await HealthyData.findOne({ owner });

  res.json({
    token,
    user: {
      id: _id,
      name,
      email,
    },
    healthyData: {
      owner: healthyData.owner,
      notAllowedProducts: healthyData.notAllowedProducts,
      bodyCalculating: healthyData.bodyCalculating,
    },
  });
  next();
}
module.exports = getCurrent;
