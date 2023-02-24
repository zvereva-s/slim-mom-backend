const { HealthyData } = require("../../models/healthyData");

const countDailyRate = require("../../service/countDailyRate");

async function getDailyRateUser(req, res) {
  const owner = req.params.id;
  const { body } = req;

  const dailyRate = countDailyRate(body);

  const result = await HealthyData.findOneAndUpdate({
    owner,
    dailyRate,
    bodyCalculating: body,
  });

  res.status(200).json({
    owner: result.owner,
    dailyRate,
    bodyCalculating: body,
  });
}
module.exports = getDailyRateUser;
