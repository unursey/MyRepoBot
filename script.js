"use strict";
/* ЗАДАНИЕ:
 * 1. Есть массив игроков с результатами последних 8 боёв. Сформировать массив объектов gamersRating следующего вида:
 * [
 *   {
 *       gamerName: 'Gendalf',
 *       tank: 'T34',
 *       finalPoints: 10235
 *   },
 *   {
 *       gamerName: 'Aragorn',
 *       tank: 'Tiger-II',
 *       finalPoints: 8652
 *   },
 * ]
 * Финальное количество очков считать по следующим правилам:
 * - сумма очков по всем боям(массив points), плюс по 500 очков за каждый фраг(массив frags), при наличии
 * премиум аккаунта сумма очков увеличивается на 30% с округлением в меньшую сторону.
 * 2. Отсортировать gamersRating по убыванию количества очков, то есть, чтобы первым был объект самого результативного игрока.
 * 3. Вывести его в консоль
 * 4. С помощью prompt запросить у пользователя имя игрока
 * Если в массиве gamersRating найден игрок с таким именем, то вывести в alert строку вида:
 * "user: Gendalf, points: 12325, rating: 2"
 * Если не найден, то вывести "Такой игрок не найден"
 * Цикл for не использовать, пользоваться только методами массивов
 * */
const gamers = [
  {
    name: "Gendalf",
    tank: "T34",
    points: [325, 6532, -452, -32, 6587, -1254, 325, 1254],
    frags: [0, 4, 0, 0, 3, 1, 0, 1],
    premium: true,
  },
  {
    name: "Saruman",
    tank: "IS-7",
    points: [2365, 4215, 325, 5256, -124, -1254, 2541, -1],
    frags: [1, 3, 0, 4, 0, 0, 1, 0],
    premium: false,
  },
  {
    name: "Aragorn",
    tank: "Tiger-II",
    points: [-451, 1254, 659, 215, 3654, -56, 5640, -124],
    frags: [1, 0, 1, 1, 3, 0, 3, 1],
    premium: true,
  },
  {
    name: "Frodo",
    tank: "ИСУ-152",
    points: [-235, 1234, -235, 6982, -1230, 2365, -456, 2235],
    frags: [0, 1, 1, 2, 0, 1, 1, 1],
    premium: false,
  },
];

const gamersRating = gamers.map(function (item) {
  const newObj = {
    name: item.name,
    tank: item.tank,
  };
  return newObj;
});
let res3;
gamers.forEach(function (item, index) {
  const res = gamers[index].points.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  const res2 = gamers[index].frags.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  res3 = res + res2 * 500;

  if (gamers[index].premium == true) {
    res3 = Math.floor(res3 * 1.3);
  } else {
    res3;
  }
  gamersRating[index].finalPoints = res3;
});
gamersRating.sort((a, b) => b.finalPoints - a.finalPoints);

console.log(gamersRating);

let num = prompt("Введите имя игрока");
if (gamersRating.find((el) => el.name == num)) {
  gamersRating.forEach(function (item, index) {
    if (item.name === num) {
      alert(
        "user: " +
          item.name +
          " points: " +
          item.finalPoints +
          " rating: " +
          (index + 1)
      );
    }
  });
} else {
  alert("Такой игрок не найден!");
}

/*if (gamersRating.findIndex((el) => el.name == num)) {
  let index = gamersRating.findIndex(num);
  alert("user: "  + " points: " + " rating: ");
} else {
  alert("Такой игрок не найден!");
}
console.log(gamersRating.findIndex((el) => el.name == num));
//let num2 = gamersRating.find(function (name, index) {
/*if (el.name == num) {
  alert(
    "user: " +
      el.name +
      " points: " +
      gamersRating[index].finalPoints +
      " rating: " +
      index
  );
} else {
  alert("Такой игрок не найден!");
  //start();
}
if (num == null) {
  alert("До свидания!");
}
//});
//};*/
