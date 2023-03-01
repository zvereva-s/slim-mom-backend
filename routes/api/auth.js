const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/auth");
const { asyncWrapper } = require("../../utils");
const { validateBody, auth, authenticateSocial } = require("../../middleware");
const { templates } = require("../../models/user");

// !sign Up //
router.post(
  "/signup",
  validateBody(templates.registerTemplate),
  asyncWrapper(controllers.signup)
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
router.post("/logout", asyncWrapper(controllers.logout));

//! google auth
router.get(
  "/google",
  authenticateSocial.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  authenticateSocial.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
  }),
  asyncWrapper(controllers.googleAuth)
);

module.exports = router;
