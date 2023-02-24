const { Schema, model } = require("mongoose");
const joi = require("joi");

const handleMongooseSchemaError = require("../utils/handleMongooseSchemaError");
const notAllowedProducts = require("../db/notAllowedProducts");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
// const nameRegexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
// const passwordRegexp = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      // match: passwordRegexp,
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseSchemaError);

const User = model("user", userSchema);

// schema joi - template //

const registerTemplate = joi.object({
  name: joi.string().required().messages({
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: Minimum six characters, only letters'`,
  }),
  password: joi.string().required().messages({
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.min": `{{#label}} min lenght 6`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: Minimum six characters, at least one letter, one number and one special character'`,
    "any.required": `{{#label}} is a required field`,
  }),
  email: joi.string().pattern(emailRegexp).required().messages({
    "string.base": `{{#label}}should be a type of 'text'`,
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.min": `{{#label}} min lenght 5`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: 'email@mail.com'`,
    "string.pattern.name": `{{#label}} with value {:[.]} fails to match the 'email@mail.com' pattern`,
    "any.required": `"email" is a required field`,
  }),
  token: joi.string(),
});
const loginTemplate = joi.object({
  email: joi.string().pattern(emailRegexp).required().messages({
    "string.base": `{{#label}}should be a type of 'text'`,
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.min": `{{#label}} min lenght 5`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: 'email@mail.com'`,
    "string.pattern.name": `{{#label}} with value {:[.]} fails to match the 'email@mail.com' pattern`,
    "any.required": `"email" is a required field`,
  }),
  password: joi.string().required().messages({
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.min": `{{#label}} min lenght 6`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: Minimum six characters, at least one letter, one number and one special character'`,
    "any.required": `{{#label}} is a required field`,
  }),
});

const templates = {
  registerTemplate,
  loginTemplate,
};
module.exports = { User, templates };
