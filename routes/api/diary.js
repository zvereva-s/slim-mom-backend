const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/diary");
const { productAddTemplate } = require("../../models/product");
const { asyncWrapper } = require("../../utils");
const { validateBody, auth, isValidId } = require("../../middleware");

router.get("/", auth, asyncWrapper(controllers.getProductDiaryList));
router.post(
  "/add",
  auth,
  validateBody(productAddTemplate),
  asyncWrapper(controllers.addProduct)
);
router.delete(
  "/delete/:id",
  auth,
  isValidId,
  asyncWrapper(controllers.deleteProduct)
);

//? food list
router.get("/food-list", auth, asyncWrapper(controllers.getFoodList));

module.exports = router;
