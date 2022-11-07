function countDailyRate(data) {
  const { age, gender, height, physicalActivity, weight } = data;

  let dailyRate;
  switch (gender) {
    case "male":
      dailyRate = (
        (66.5 + 13.75 * weight + 5.003 * height - 6.775 * age) *
        physicalActivity
      ).toFixed(2);
      break;
    case "female":
      dailyRate = (
        (655.1 + 9.563 * weight + 1.85 * height - 4.676 * age) *
        physicalActivity
      ).toFixed(2);
      break;
    default:
      dailyRate = 0;
  }
  return dailyRate;
}

module.exports = countDailyRate;
/*

Формула для расчета ПБМ выглядит следующим образом:

Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).
Полученный результат – это суточная норма калорий, необходимая организму для нормального функционирования. Чтобы посчитать, сколько ккал необходимо употреблять для поддержания веса, нужно полученную цифру умножить на коэффициент физической активности:

1.2 – минимальный (сидячая работа, отсутствие физических нагрузок);
1.375 – низкий (тренировки не менее 20 мин 1-3 раза в неделю);
1.55 – умеренный (тренировки 30-60 мин 3-4 раза в неделю);
1.7 – высокий (тренировки 30-60 мин 5-7 раза в неделю; тяжелая физическая работа);
1.9 – экстремальный (несколько интенсивных тренировок в день 6-7 раз в неделю; очень трудоемкая работа).


age: "45"
bloodType: "1"
desiredWeight: "80"
gender: "female"
height: "180"
physicalActivity: "1.2"
weight: "100"


*/