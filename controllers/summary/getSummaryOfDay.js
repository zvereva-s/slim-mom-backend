const { Product } = require("../../models/product");
const { HealthyData } = require("../../models/healthyData");

const joi = require("joi");

const dateSchema = joi
  .string()
  //   .pattern(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/)
  .required();

async function getSummaryOfDay(req, res) {
  const { date } = req.params;
  const owner = req.user._id;

  const arrOfAllDayProducts = await Product.find(
    { owner, date },
    "-createdAt -updatedAt"
  ).populate("owner", "email _id");

  const { dailyRate } = await HealthyData.findOne({ owner });

  //? CONSUMED
  const consumed = arrOfAllDayProducts
    .reduce((previousValue, { sumCaloriesOfProduct }) => {
      return previousValue + Number(sumCaloriesOfProduct);
    }, 0)
    .toFixed(2);

  //? LEFT
  const left = (dailyRate - consumed).toFixed(2);

  //? PROCENTOFDAYNORM
  const procentOfDayNorm =
    dailyRate === "0" ? "0" : ((consumed * 100) / dailyRate).toFixed(2);

  res.json({
    left,
    consumed,
    dailyRate,
    procentOfDayNorm,
  });
}

module.exports = { getSummaryOfDay, dateSchema };
