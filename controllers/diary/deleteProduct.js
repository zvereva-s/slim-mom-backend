const { Product } = require("../../models/product");

async function deleteProduct(req, res) {
  const id = req.params.id;

  const result = await Product.findByIdAndDelete(id);

  res.status(200).json({
    message: `Product id${result._id} was deleted`,
    id: result._id,
  });
}

module.exports = deleteProduct;
