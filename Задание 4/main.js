/*Написать функцию которая генерирует массив случайных значений, 
таким образом что все элементы результирующего массива являются 
уникальными. Генерациями происходит в рамках чисел от N до M, 
где N,M - могут быть как положительные так и отрицательными, 
и еще одним параметром количество значений которые нужно сгенерировать. 
Если количество генерируемых значений больше чем чисел в 
диапазоне - отдавать пустой массив.*/

var arr = [];

const roundArray = (count, diapazon) => {
  while (arr.length < count) {
    var random = Math.floor(Math.random() * diapazon);
    if (arr.indexOf(random) === -1) {
      arr.push(random);
    };
    if (count > random) {
      arr = [];
    };
  };
  return arr;
};

console.log(roundArray(8, 20));

/*Использовать функцию из предыдущего задания чтобы получить массив из нужного 
количества значений. Найти процентное соотношение отрицательных, положительных 
и нулевых элементов массива.*/

var arr = [];

const roundArray = (count, diapazon) => {
  while (arr.length < count) {
    var random = Math.floor(Math.random() * diapazon);
    if (arr.indexOf(random) === -1) {
      arr.push(random);
    };
    if (count > random) {
      arr = [];
    };
  };
  return arr;
};

console.log(roundArray(8, 20));

(positiveNumber = []), (negativeNumber = []);
for (var i = 0; i < arr.length; i++) {
  arr[i] >= 0 ? positiveNumber.push(arr[i]) : negativeNumber.push(arr[i]);
};
var result =
  "Положительные числа: " +
  positiveNumber.join(",") +
  " (количество: " +
  positiveNumber.length +
  "); " +
  "Отрицательные числа: " +
  negativeNumber.join(",") +
  " (количество: " +
  negativeNumber.length +
  ");";
console.log(result);

/*Написать рекурсивную функцию которая выводит абсолютно все элементы 
ассоциативного массива (объекта) - любого уровня вложенности*/

const obj = {
  a: 5,
  b: "Hello obj",
  c: "Hi",
  sayHello: function () {
    console.log("Hello"),
      function () {
        console.log("Hello 2");
      },
      (objInObj = {
        a: 5,
        b: "Hello obj",
        c: "Hi",
        sayHello: function () {
          console.log("Hello2"),
            function () {
              console.log("Hello 3");
            };
        },
      });
  },
};
for (let item in obj) {
  console.log(obj[item]);
};

/*Задано предложение - подсчитать количество вхождений каждого слова в предложении. 
Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось
*/

let str =
  "span div p a h1 h3 h2 h4 h1 span input link input br body button h4 span";
let strSplits = str.split(" ");
let arr = [];
let array = [];
for (let i = 0; i < strSplits.length; i++) {
  if (arr.indexOf(strSplits[i]) === -1) {
    arr.push(strSplits[i]);
  } else {
    array.push(strSplits[i]);
  };
};
let repetWord = [];
for (let i = 0; i < array.length; i++) {
  if (repetWord.indexOf(array[i]) === -1) {
    repetWord.push(array[i]);
  };
  for (let w = 0; w < repetWord.length; w++) {
    arr = arr.filter(function (item) {
      return item !== repetWord[i];
    });
  };
};
var countWords = { };
for (var i = 0; i < strSplits.length; i++) {
  countWords[strSplits[i]] = (countWords[strSplits[i]] || 0) + 1;
};
 
console.log("Вся строка: " + strSplits);
console.log("Слова, которые повторяются: " + repetWord);
console.log("Слова уникальные: " + arr);
console.log(countWords);

// или второй вариант  сприминением "filter";

let strSplitsDemo = strSplits.filter((item, index) => {
  return strSplits.indexOf(item) == index;
})
console.log("Слова уникальные: " + strSplitsDemo)

let strSplitsDemoDuble = strSplits.filter((item, index) => {
  return strSplits.indexOf(item) !== index;
})
console.log("Слова, которые повторяются: " + strSplitsDemoDuble)
