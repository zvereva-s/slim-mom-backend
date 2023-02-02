const joi = require("joi");
const countDailyRate = require("../../service/countDailyRate");
const notAllowedProducts = require("../../db/notAllowedProducts");

const gender = ["female", "male"];
const physicalActivity = ["1.2", "1.375", "1.55", "1.7", "1.9"];

const dailyRateTemplate = joi.object({
  age: joi.string().min(2).required(),
  gender: joi.string().valueOf(gender).required(),
  height: joi.string().min(3).required(),
  physicalActivity: joi.string().valueOf(physicalActivity).required(),
  weight: joi.string().min(2).required(),
  bloodType: joi.string().required(),
  desiredWeight: joi.string().required(),
});

async function getDailyRate(req, res) {
  const { body } = req;

  const dailyRate = await countDailyRate(body);

  res.status(200).json({
    dailyRate,
    notAllowedProducts,
  });
}

module.exports = { getDailyRate, dailyRateTemplate };
