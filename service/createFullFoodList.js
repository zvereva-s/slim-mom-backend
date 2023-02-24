const en_food = require("../db/js_translates_foodList/en_food");
const ua_food = require("../db/js_translates_foodList/ua_food");
const ru_food = require("../db/js_translates_foodList/ru_food");

async function createFullFoodList() {
  const newEn = en_food.map((el, idx) => ({ ...el, key: idx + 1 }));

  const newUa = ua_food.map((el, idx) => ({ ...el, key: idx + 1 }));
  const newRu = ru_food.map((el, idx) => ({ ...el, key: idx + 1 }));

  const result = newEn.map((en) => {
    return {
      ...en,
      Name: {
        en: en.Name,
        ua: newUa.find((el) => el.key === en.key).Name,
        ru: newRu.find((el) => el.key === en.key).Name,
      },
    };
  });

  return result;
}

module.exports = createFullFoodList;
