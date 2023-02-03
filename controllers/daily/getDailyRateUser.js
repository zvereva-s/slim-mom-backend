const { User } = require("../../models/user");
const countDailyRate = require("../../service/countDailyRate");
const notAllowedProducts = require("../../db/notAllowedProducts");

async function getDailyRateUser(req, res) {
  const { id } = req.params;
  const { body, user } = req;

  const dailyRate = await countDailyRate(body);

  const result = await User.findByIdAndUpdate(id, {
    healthyData: { bodyCalculating: body, dailyRate, notAllowedProducts },
  });

  res.status(200).json({
    healthyData: result.healthyData,
  });
}
module.exports = getDailyRateUser;
