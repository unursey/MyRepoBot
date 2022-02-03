"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomNumber = function (n) {
  return Math.floor(Math.random() * Math.floor(n));
};

const start = function () {
  let myNumber = randomNumber(100);
  let attempt = 10;
  const game = function () {
    attempt--;
    if (attempt < 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        start();
      } else {
        alert("До свидания!");
        return;
      }
    } else {
      const num = prompt("Угадай число от 1 до 100");
      if (num === null) {
        alert("Игра окончена!");
        return;
      }
      if (isNumber(num)) {
        const yourNumber = +num;
        if (yourNumber > myNumber) {
          alert(`Загаданное число меньше, осталось ${attempt} попыток.`);
          game();
        } else if (yourNumber < myNumber) {
          alert(`Загаданное число больше, осталось ${attempt} попыток.`);
          game();
        } else {
          if (confirm("Поздравляю, Вы угадали!!! Сыграем еще?")) {
            start();
          } else {
            alert("Игра окончена!");
            return;
          }
        }
      } else {
        alert("Введите число");
        game();
      }
    }
  };
  game();
};
start();
