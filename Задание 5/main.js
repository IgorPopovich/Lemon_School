/*Задан двумерный массив - объединить каждый внутренний 
массив с верхнем массивом - только по уникальным значениям. 
Например [1,2,4[8,4,12],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], 
получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,11,6,7,21]
*/

let arr = [
  1,
  2,
  4,
  [8, 4, 12],
  [13, 29, 11],
  [0, 5, 3, 11],
  5,
  6,
  7,
  [3, 8, 21],
  3,
];

let arrFlat = arr.flat();
let arrNumbers = [];
for (let i = 0; i < arrFlat.length; i++) {
  if (arrNumbers.indexOf(arrFlat[i]) === -1) {
    arrNumbers.push(arrFlat[i]);
  }
}

console.log(arrNumbers);

/*Написать функцию которая возвращает true/false в зависимости 
от того - все ли уникальные значения в массиве или есть не уникальные*/

let numbers = [1, 2, 4, 8, 12, 13, 29, 11, 0, 5, 3, 6, 7, 21];

function changeArr(arr) {
  var counts = [];
  for (var i = 0; i <= arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      console.log("Нет уникальных значений");
      return false;
    }
  }
  console.log("Все значения уникальные");
  return true;
}

changeArr(numbers);

/*Задан массив объектов студентов вида 
[
  {name: “Ivan”, estimate: 4, course: 1, active: true},
  {name: “Ivan”, estimate: 3, course: 1, active: true},
  {name: “Ivan”, estimate: 2, course: 4, active: false},
  {name: “Ivan”, estimate: 5, course: 2, active: true}
] 
  - заполнить его более большим количеством студентов. 
  Написать функцию которая возвращает: среднюю оценку студентов в разрезе 
  каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только 
  тех студентов которые активны. Посчитать количество неактивных студентов 
  в разрезе каждого курса и общее количество неактивных студентов.*/

const students = [
  { name: "Ivan", estimate: 4, course: 1, active: true },
  { name: "Nick", estimate: 3, course: 1, active: true },
  { name: "Igor", estimate: 2, course: 4, active: false },
  { name: "Alex", estimate: 5, course: 2, active: true },
  { name: "Alex", estimate: 4, course: 3, active: true },
  { name: "James", estimate: 3, course: 2, active: true },
  { name: "Kevin", estimate: 2, course: 4, active: false },
  { name: "Simon", estimate: 5, course: 2, active: true },
  { name: "Thomas", estimate: 4, course: 1, active: true },
  { name: "Michael", estimate: 3, course: 3, active: true },
  { name: "Lucas", estimate: 2, course: 4, active: false },
  { name: "Jack", estimate: 5, course: 2, active: true },
  { name: "Harry", estimate: 2, course: 3, active: true },
  { name: "Edward", estimate: 3, course: 2, active: true },
  { name: "Neil", estimate: 2, course: 5, active: false },
  { name: "Julian", estimate: 5, course: 2, active: true },
];

let activeStudents = [];
let noActiveStudents = [];

students.forEach((item) => {
  if (item.active === false) {
    noActiveStudents.push(item);
  } else {
    activeStudents.push(item);
  };
});

let course1 = [];
let course2 = [];
let course3 = [];
let course4 = [];
let course5 = [];

function noActStud(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].course === 1 && arr[i].active === false) {
      course1.push(arr[i]);
    } else if (arr[i].course === 2 && arr[i].active === false) {
      course2.push(arr[i]);
    } else if (arr[i].course === 3 && arr[i].active === false) {
      course3.push(arr[i]);
    } else if (arr[i].course === 4 && arr[i].active === false) {
      course4.push(arr[i]);
    } else if (arr[i].course === 5 && arr[i].active === false) {
      course5.push(arr[i]);
    };
  };
};

noActStud(students);

console.log(
  "Количество неактивных студентов в разрез каждого курса: " +
    "Курс 1: " +
    course1.length +
    " студентов; " +
    "Курс 2: " +
    course2.length +
    " студентов; " +
    "Курс 3: " +
    course3.length +
    " студентов; " +
    "Курс 4: " +
    course4.length +
    " студентов; " +
    "Курс 5: " +
    course5.length +
    " студентов;"
);
console.log(
  "Общее количество неактивных студентов = " + noActiveStudents.length + "."
);

let courseStud1 = [];
let courseStud2 = [];
let courseStud3 = [];
let courseStud4 = [];
let courseStud5 = [];

function middleEstimateActive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].course === 1) {
      courseStud1.push(arr[i]);
    } else if (arr[i].course === 2) {
      courseStud2.push(arr[i]);
    } else if (arr[i].course === 3) {
      courseStud3.push(arr[i]);
    } else if (arr[i].course === 4) {
      courseStud4.push(arr[i]);
    } else if (arr[i].course === 5) {
      courseStud5.push(arr[i]);
    };
  };
};

middleEstimateActive(activeStudents);

let count = 0;

function estimAtsStudActive(arr) {
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].estimate;
  };
  let course = 0;
  for (let i = 0; i < arr.length; i++) {
    course = arr[i].course;
  };
  console.log(
    "Средний балл по курсу " + course + " составляет " + count / arr.length
  );
  count = 0;
};

estimAtsStudActive(courseStud1);
estimAtsStudActive(courseStud2);
estimAtsStudActive(courseStud3);
estimAtsStudActive(courseStud4);
estimAtsStudActive(courseStud5);
