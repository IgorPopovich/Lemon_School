/*Переменная хранит в себе единицу измерения одно из возможных 
значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. 
В зависимости от того какая единица измерения написать скрипт, 
который выводит количество байт. Для вычисления принимает счет что 
в каждой последующей единицы измерения хранится 1024 единиц более 
меньшего измерения.*/

function bitesCicle() {
  let pr = prompt("Введите единицу измерения: Byte, KB, MB, GB");
  if (pr === "Byte") {
    alert(8);
  } else if (pr === "KB") {
    alert(1024 + " бит");
  } else if (pr === "MB") {
    alert(1024 + " килобайт");
  } else if (pr === "GB") {
    alert(1024 + " мегабайт");
    return;
  } else {
    let restart = confirm("Вы ввели некоректное значение! Начать заново?");
    if (restart === true) {
    } else {
      return;
    }
  }
  bitesCicle();
}
bitesCicle();

/*Найти минимальное число которое больше 300 и нацело делиться на 17*/

function minNumber(sum, number) {
  if (sum % number == 0) {
    return sum;
  } else {
    return minNumber(sum + 1, number);
  }
}
alert(minNumber(300, 17));


/*Переменная содержит в себе число. Написать скрипт который посчитает 
факториал этого числа.*/

function factorial(num) {
  if (num < 0) return;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
factorial(5);
