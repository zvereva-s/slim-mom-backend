const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/auth");
const { asyncWrapper } = require("../../utils");
const { validateBody, auth } = require("../../middleware");
const { templates } = require("../../models/user");

// !sign Up //

router.post(
  "/signup",
  validateBody(templates.registerTemplate),
  asyncWrapper(controllers.signup)
);

//! verify //

router.get("/verify/:verificationToken", asyncWrapper(controllers.verifyEmail));
router.post(
  "/auth/verify",
  validateBody(templates.registerTemplate),
  asyncWrapper(controllers.resendVerifyEmail)
);

//! sign In //

router.post(
  "/signin",
  validateBody(templates.loginTemplate),
  asyncWrapper(controllers.signin)
);

//! current //
router.get("/current", auth, asyncWrapper(controllers.getCurrent));

//! logout //
router.post("/logout", auth, asyncWrapper(controllers.logout));

module.exports = router;
