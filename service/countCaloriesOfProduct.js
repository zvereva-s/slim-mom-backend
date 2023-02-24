const createFullFoodList = require("./createFullFoodList");

async function countCaloriesOfProduct(weight, key) {
  const foodList = await createFullFoodList();

  const { Proteins, Fat, Carbohydrates, Calorie } = foodList.find(
    (el) => String(el.key) === key
  );

  const sumCaloriesOfProduct = ((Number(weight) / 100) * Calorie).toFixed(2);
  const sumProteinsOfProduct = ((Number(weight) / 100) * Proteins).toFixed(2);
  const sumFatOfProduct = ((Number(weight) / 100) * Fat).toFixed(2);
  const sumCarbohydratesOfProduct = (
    (Number(weight) / 100) *
    Carbohydrates
  ).toFixed(2);

  return {
    sumCaloriesOfProduct,
    sumProteinsOfProduct,
    sumFatOfProduct,
    sumCarbohydratesOfProduct,
  };
}

module.exports = countCaloriesOfProduct;
