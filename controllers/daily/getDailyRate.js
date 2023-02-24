const countDailyRate = require("../../service/countDailyRate");
const notAllowedProducts = require("../../db/notAllowedProducts");

async function getDailyRate(req, res) {
  const { body } = req;

  const dailyRate = countDailyRate(body);

  res.status(200).json({
    dailyRate,
    notAllowedProducts,
  });
}

module.exports = { getDailyRate };
