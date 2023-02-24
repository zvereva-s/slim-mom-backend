const { Product } = require("../../models/product");
const countCaloriesOfProduct = require("../../service/countCaloriesOfProduct");

async function addProduct(req, res) {
  const { body } = req;
  const { weight, key } = body;

  const owner = req.user._id;

  const {
    sumCaloriesOfProduct,
    sumProteinsOfProduct,
    sumFatOfProduct,
    sumCarbohydratesOfProduct,
  } = await countCaloriesOfProduct(weight, key);

  const result = await Product.create({
    ...body,
    owner,
    sumCaloriesOfProduct,
    sumProteinsOfProduct,
    sumFatOfProduct,
    sumCarbohydratesOfProduct,
  });

  res.status(200).json({
    date: result.date,
    owner: result.owner,
    key: result.key,
    weight: result.weight,
    sumCaloriesOfProduct: result.sumCaloriesOfProduct,
    _id: result._id,
  });
}

module.exports = addProduct;
