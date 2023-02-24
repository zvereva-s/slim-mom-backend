function sumsOfDay(list) {
  const calories = list.reduce((total, item) => {
    return total + Number(item.calories);
  }, 0);

  const weight = list.reduce((total, item) => {
    return total + Number(item.weight);
  }, 0);

  return { calories, weight };
}

module.exports = sumsOfDay;
