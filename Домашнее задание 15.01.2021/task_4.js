let procent = 0.02;
let money = 10000;
let years = 5;
let first = procent * money; // переплата за 1 год
let second = first * years; // переплата за 5 лет.
alert(
  "Переплата за год составляет " +
    first +
    " грн" +
    ", a за 5 лет переплата составляет " +
    second +
    " грн !"
);