const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/daily");
const { dailyRateTemplate } = require("../../models/healthyData");
const { asyncWrapper } = require("../../utils");
const { validateBody, auth, isValidId } = require("../../middleware");

router.post(
  "/daily-rate",
  validateBody(dailyRateTemplate),
  asyncWrapper(controllers.getDailyRate)
);
router.patch(
  "/daily-rate/:id",
  isValidId,
  auth,
  validateBody(dailyRateTemplate),
  asyncWrapper(controllers.getDailyRateUser)
);

module.exports = router;
