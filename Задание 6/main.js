/*(С этого занятия и все последующие по поводу вывода данных - выводим в HTML документе, если не указано иного)
- Посчитать количество ссылок на странице, вывести их содержимое
- Посчитать количество тегов “p” на странице которые имеют класс “phrase” - вывести их содержимое
- В задании из пятого урока, взять массив со студентами и вывести их на страницу согласно сверстанной HTML-структуре, 
рядом с каждым студентом вывести крестик - по нажатию на который студент будет удален 
(удаляется как со страницы, так и с объекта), 
если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
- Вывести статистику средних оценок в разрезе курса и статистику по количеству неактивных студентов в разрезе каждого 
курса и общее количество неактивных студентов
- Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса, оценки и checkbox для активности студента, 
по нажатии на кнопку “Добавить” - студент новый добавляется в список студентов
*/

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

let buttonAdd = document.getElementById("buttonAdd");
let names = document.getElementById("name");
let estimates = document.getElementById("estimate");
let courses = document.getElementById("course");
let actives = document.getElementById("active");
let ol = document.querySelector("ol");

function sortStudents() {
  let noActiveStudents = [];
  students.forEach((item) => {
    if (item.active === false) {
      noActiveStudents.push(item);
    }
  });
}

function addStudent() {
  let li = document.createElement("li");
  let removeStudent = document.createElement("button");
  removeStudent.textContent = "X";
  removeStudent.className = "removeStudent";
  li.textContent =
    "Name: " +
    names.value +
    ", estimate - " +
    estimates.value +
    ", course - " +
    courses.value +
    ", active - " +
    actives.value;
  ol.appendChild(li);
  li.appendChild(removeStudent);
  removeStudent.addEventListener("click", function () {
    ol.removeChild(li);
  });
  students.push({
    name: document.getElementById("name").value,
    estimate: document.getElementById("estimate").value,
    course: document.getElementById("course").value,
    active: document.getElementById("active").value,
  });
  if (students.length > 0) {
    let list = document.querySelector(".list");
    list.textContent = "Список студентов";
  }
  names.value = "";
  estimates.value = "";
  courses.value = "";
  actives.value = "";
}

for (let i = 0; i < students.length; i++) {
  let li = document.createElement("li");
  let removeStudent = document.createElement("button");
  removeStudent.textContent = "X";
  removeStudent.className = "removeStudent";
  li.textContent =
    "Name: " +
    students[i].name +
    ": estimate - " +
    students[i].estimate +
    ", course - " +
    students[i].course +
    ", active - " +
    students[i].active;
  ol.appendChild(li);
  li.appendChild(removeStudent);
  removeStudent.addEventListener("click", function (e) {
    ol.removeChild(li);
    students.pop(students[i]);
    if (students.length < 1) {
      let list = document.querySelector(".list");
      list.textContent = "Студенты не найдены";
    }
  });
}

let noActiveStudents = [];

students.forEach((item) => {
  if (item.active === false) {
    noActiveStudents.push(item);
  }
});

let course1 = [];

let course2 = [];

let course3 = [];

let course4 = [];

let course5 = [];

function countCourseStudent(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].course === 1) {
      course1.push(arr[i]);
    } else if (arr[i].course === 2) {
      course2.push(arr[i]);
    } else if (arr[i].course === 3) {
      course3.push(arr[i]);
    } else if (arr[i].course === 4) {
      course4.push(arr[i]);
    } else if (arr[i].course === 5) {
      course5.push(arr[i]);
    }
  }
}
countCourseStudent(students);

let estimate = document.querySelector(".estimate");

let count = 0;
let arrDemo = [];
function estimAtsStudActive(arr) {
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].estimate;
  }
  let course = 0;
  for (let i = 0; i < arr.length; i++) {
    course = arr[i].course;
  }
  arrDemo.push (
    "Средний балл по курсу " + course + " составляет " + count / arr.length
  );
  count = 0;
}
//let estimate = document.querySelector(".estimate");

//estimate.textContent = `${aaa[1]}, ${aaa[2]}, ${aaa[3]}, ${aaa[4]}, ${aaa[5]}`;


let arrArr = [];

arrArr.push(course1, course2, course3, course4, course5);

arrArr.forEach((item) => {
  estimAtsStudActive(item);
});

let span = document.querySelector(".span");
span.textContent = document.querySelectorAll("p").length;
let ahref = document.querySelector(".ahref");
ahref.textContent = document.querySelectorAll("a").length;
let noActStudents = document.querySelector(".noActStudents");
noActStudents.textContent = noActiveStudents.length;

estimate.textContent = `${arrDemo[1]}, ${arrDemo[2]}, ${arrDemo[3]}, ${arrDemo[4]}, ${arrDemo[5]}`;
