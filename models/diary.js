const { Schema, model, SchemaTypes } = require("mongoose");
const joi = require("joi");

const handleMongooseSchemaError = require("../utils/handleMongooseSchemaError");

const diarySchema = new Schema(
  {
    listProducts: {
      type: Array,
      default: [
        {
          name: "",
          weight: "0",
          calories: "0",
        },
      ],
    },
    date: {
      type: String,
      default: "01.01.2023",
    },
    sumCaloriesOfDay: {
      type: String,
      default: "0",
    },
    sumWeightOfDay: {
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
diarySchema.post("save", handleMongooseSchemaError);

const Diary = model("diary", diarySchema);

const diaryTemplate = joi.object({});

module.exports = { Diary, diaryTemplate };
