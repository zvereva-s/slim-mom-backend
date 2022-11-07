const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/daily");
const { dailyRateTemplate } = require("../../controllers/daily/getDailyRate");
const { asyncWrapper } = require("../../utils");
const { validateBody } = require("../../middleware");

router.post(
  "/daily-rate",
  validateBody(dailyRateTemplate),
  asyncWrapper(controllers.getDailyRate)
);

module.exports = router;
