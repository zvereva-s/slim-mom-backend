const { Schema, model, SchemaTypes } = require("mongoose");
const joi = require("joi");

const handleMongooseSchemaError = require("../utils/handleMongooseSchemaError");
const notAllowedProducts = require("../db/notAllowedProducts");

const healthyDataSchema = new Schema(
  {
    notAllowedProducts: {
      type: Object,
      default: { ...notAllowedProducts },
    },
    bodyCalculating: {
      type: Object,
      default: {
        age: 0,
        gender: "",
        height: 0,
        physicalActivity: 0,
        weight: 0,
        bloodType: 0,
        desiredWeight: 0,
      },
    },
    dailyRate: {
      type: String,
      default: "0",
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
healthyDataSchema.post("save", handleMongooseSchemaError);

const HealthyData = model("healthyData", healthyDataSchema);

const gender = ["female", "male"];
const physicalActivity = ["1.2", "1.375", "1.55", "1.7", "1.9"];

const dailyRateTemplate = joi.object({
  age: joi.string().min(2).required(),
  gender: joi.string().valueOf(gender).required(),
  height: joi.string().min(3).required(),
  physicalActivity: joi.string().valueOf(physicalActivity).required(),
  weight: joi.string().min(2).required(),
  bloodType: joi.string().required(),
  desiredWeight: joi.string().required(),
});

module.exports = { HealthyData, dailyRateTemplate };
