const { Product } = require("../../models/product");

async function getProductDiaryList(req, res) {
  const owner = req.user._id;

  const result = await Product.find(
    { owner },
    "-createdAt -updatedAt"
  ).populate("owner", "email _id");
  res.status(200).json(result);

  res.status(200).json({
    ...result,
  });
}

module.exports = getProductDiaryList;
