const express = require("express");
const router = express.Router();

const {
  getSummaryOfDay,
  dateSchema,
} = require("../../controllers/summary/getSummaryOfDay");
const { asyncWrapper } = require("../../utils");
const { auth, validateParamsDate } = require("../../middleware");

router.get(
  "/:date",
  auth,
  validateParamsDate(dateSchema),
  asyncWrapper(getSummaryOfDay)
);
module.exports = router;
