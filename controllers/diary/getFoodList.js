const createFullFoodList = require("../../service/createFullFoodList");

async function getFoodList(_, res) {
  const fullDataFood = await createFullFoodList();
  res.status(200).json({
    fullDataFood,
  });
}

module.exports = getFoodList;
