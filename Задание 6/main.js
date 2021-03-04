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

  let select = document.createElement("select");
  select.className = "select";
  let option1 = document.createElement("option");
  let optionName = document.createElement("option");
  let optionEstimate = document.createElement("option");
  let optionCourse = document.createElement("option");
  let optionActive = document.createElement("option");

  optionName.text = "Имя";
  optionEstimate.value = "2";
  optionEstimate.text = "Оценка";
  optionCourse.value = "3";
  optionCourse.text = "Курс";
  optionActive.value = "4";
  optionActive.text = "Активность";

  select.add(optionName);
  select.add(optionEstimate);
  select.add(optionCourse);
  select.add(optionActive);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  li.textContent =
    "Name: " +
    names.value +
    ", estimate - " +
    estimates.value +
    ", course - " +
    courses.value +
    ", active - " +
    actives.value;

  if (estimates.value <= 3) {
    li.style.background = "rgba(255, 30, 0, 0.4)";
  } else if (estimates.value <= 4) {
    li.style.background = "rgba(255, 238, 0, 0.4)";
  } else if (estimates.value <= 5) {
    li.style.background = "rgba(94, 255, 0, 0.4)";
  }

  ol.prepend(li);
  li.appendChild(removeStudent);
  li.appendChild(checkbox);
  li.appendChild(select);

  removeStudent.addEventListener("click", function () {
    ol.removeChild(li);
  });
  students.push({
    name: document.getElementById("name").value,
    estimate: document.getElementById("estimate").value,
    course: document.getElementById("course").value,
    active: document.getElementById("active").value,
  });
  newStudent();

  if (students.length > 0) {
    let list = document.querySelector(".list");
    list.textContent = "Список студентов";
  }
  names.value = "";
  estimates.value = "";
  courses.value = "";
  actives.value = "";

  checkbox.addEventListener("change", function (e) {
    if (this.checked) {
      li.textContent = ", active - true";
    } else {
      li.textContent = ", active - false";
    }
    li.appendChild(removeStudent);
    li.appendChild(checkbox);
  });
}

function newStudent() {
  for (let i = 0; i < students.length; i++) {
    let li = document.createElement("li");
    let removeStudent = document.createElement("button");
    removeStudent.textContent = "X";
    removeStudent.className = "removeStudent";

    let select = document.createElement("select");
    select.className = "select";
    let option1 = document.createElement("option");
    let optionName = document.createElement("option");
    let optionEstimate = document.createElement("option");
    let optionCourse = document.createElement("option");
    let optionActive = document.createElement("option");

    let changeData = document.createElement("button");
    changeData.className = "changeData";
    changeData.textContent = "Изменить: ";

    optionName.value = "1";
    optionName.text = "Имя";
    optionEstimate.value = "2";
    optionEstimate.text = "Оценка";
    optionCourse.value = "3";
    optionCourse.text = "Курс";
    optionActive.value = "4";
    optionActive.text = "Активность";

    select.add(optionName);
    select.add(optionEstimate);
    select.add(optionCourse);
    select.add(optionActive);

    changeData.addEventListener('click', function () {
      let inp = document.createElement("input");
      let btn = document.createElement("button");
      btn.textContent = "OK";
      if (select.value == "1") {
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      }
    })

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    li.textContent =
      "Name: " +
      students[i].name +
      ", estimate - " +
      students[i].estimate +
      ", course - " +
      students[i].course +
      ", active - " +
      students[i].active;

    if (students[i].estimate <= 3) {
      li.style.background = "rgba(255, 30, 0, 0.4)";
    } else if (students[i].estimate <= 4) {
      li.style.background = "rgba(255, 238, 0, 0.4)";
    } else if (students[i].estimate <= 5) {
      li.style.background = "rgba(94, 255, 0, 0.4)";
    }

    checkbox.addEventListener("change", function (e) {
      if (this.checked) {
        li.textContent =
          "Name: " +
          students[i].name +
          ", estimate - " +
          students[i].estimate +
          ", course - " +
          students[i].course +
          ", active - true";
      } else {
        li.textContent =
          "Name: " +
          students[i].name +
          ", estimate - " +
          students[i].estimate +
          ", course - " +
          students[i].course +
          ", active - false";
      }
      li.appendChild(removeStudent);
      li.appendChild(checkbox);
    });

    ol.prepend(li);
    li.appendChild(removeStudent);
    li.appendChild(checkbox);
    li.appendChild(select);
    li.appendChild(changeData);

    removeStudent.addEventListener("click", function (e) {
      ol.removeChild(li);
      students.pop(students[i]);
      if (students.length < 1) {
        let list = document.querySelector(".list");
        list.textContent = "Студенты не найдены";
      }
    });
  }
}
newStudent();

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
  let num = count / arr.length
  
  arrDemo.push(
    "Средний балл по курсу " + course + " составляет " + num
  );
  count = 0;
}

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
let estimate = document.querySelector(".estimate");

estimate.textContent = `${arrDemo[1]}, ${arrDemo[2]}, ${arrDemo[3]}, ${arrDemo[4]}, ${arrDemo[5]}`;
