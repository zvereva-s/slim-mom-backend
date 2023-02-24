const { Schema, model, SchemaTypes } = require("mongoose");
const joi = require("joi");

const handleMongooseSchemaError = require("../utils/handleMongooseSchemaError");
const dataRegexp = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)/;

const productSchema = new Schema(
  {
    date: {
      type: String,
      match: dataRegexp,
      required: [true, "Set date of your diary list"],
      default: "01.01.2023",
    },
    key: {
      type: String,
      require: true,
    },
    name: {
      type: String,
    },
    weight: {
      type: String,
      required: [true, "Set product weight for your diary list"],
      require: true,
    },
    sumCaloriesOfProduct: {
      type: String,
    },
    sumProteinsOfProduct: {
      type: String,
    },
    sumFatOfProduct: {
      type: String,
    },
    sumCarbohydratesOfProduct: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
productSchema.post("save", handleMongooseSchemaError);

const Product = model("product", productSchema);

const productAddTemplate = joi.object({
  date: joi.string().pattern(dataRegexp).required().messages({
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: '02.02.2023'`,
  }),
  key: joi.string().required(),
  weight: joi.string().min(1).required(),
});

module.exports = { Product, productAddTemplate };
