
const students = [
  { name: "Ivan", estimate: 4, course: 1, active: true },
  { name: "Nick", estimate: 3, course: 1, active: true },
  { name: "Alex", estimate: 5, course: 2, active: false },
  { name: "James", estimate: 3, course: 2, active: true },
  { name: "Kevin", estimate: 2, course: 4, active: false },
  { name: "Simon", estimate: 5, course: 2, active: true },
  { name: "Lucas", estimate: 2, course: 4, active: false },
  { name: "Jack", estimate: 5, course: 2, active: true },
  { name: "Harry", estimate: 2, course: 3, active: true },
  { name: "Edward", estimate: 3, course: 2, active: false },
  { name: "Neil", estimate: 2, course: 5, active: false },
  { name: "Julian", estimate: 5, course: 2, active: true },
];


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

let noActStudents = document.querySelector(".noActStudents");
noActStudents.textContent = noActiveStudents.length;
let estimate = document.querySelector(".estimate");

estimate.textContent = `${arrDemo[1]}, ${arrDemo[2]}, ${arrDemo[3]}, ${arrDemo[4]}, ${arrDemo[5]}`;

let buttonAdd = document.getElementById("buttonAdd");
let names = document.getElementById("name");
let estimates = document.getElementById("estimate");
let courses = document.getElementById("course");
let actives = document.getElementById("active");
let emails = document.getElementById("email");
let ol = document.querySelector("ol");

//---------------------------------------addStudent---------------------------------
function addStudent() {
  let li = document.createElement("li");
  let removeStudent = document.createElement("button");
  removeStudent.textContent = "X";
  removeStudent.className = "removeStudent";

  let reg = /[A-Za-z]/; //names
  let reg2 = /[0-9]/; //estimases, courses
  let reg3 = /[A-Za-z]/; // actives
  let reg4 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})/; // emails

  if (!validate(reg, names.value)) {
    names.style.border = "3px solid red";
    names.placeholder="Введите имя..."
    return;
  } else if (!validate2(reg2, estimates.value)) {
    estimates.style.border = "3px solid red";
    estimates.placeholder="Введите оценку..."
    return;
  } else if (!validate3(reg2, courses.value)) {
    courses.style.border = "3px solid red";
    courses.placeholder="Введите курс..."
    return;
  } else if (!validate4(reg3, actives.value)) {
    actives.style.border = "3px solid red";
    actives.placeholder="Укажите активность..."
    return;
  } else if (!validate5(reg4, emails.value)) {
    emails.style.border = "3px solid red";
    emails.placeholder="Введите email..."
    return;
  } else {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.addEventListener("change", function (e) {
    for (let i = 0; i < students.length; i++) {
      if (checkbox.checked) {
        li.textContent =
          "Name: " +
          students[i].name +
          ", estimate - " +
          students[i].estimate +
          ", course - " +
          students[i].course +
          ", active - " + true +
          ", email - " +
          emails.value;
      } else {
        li.textContent =
          "Name: " +
          students[i].name +
          ", estimate - " +
          students[i].estimate +
          ", course - " +
          students[i].course +
          ", active - " + false +
          ", email - " +
          emails.value;
      }
    }
    li.appendChild(removeStudent);
    li.appendChild(checkbox);
    li.appendChild(select);
    li.appendChild(changeData);
  })

  let select = document.createElement("select");
  select.className = "select";
  let optionName = document.createElement("option");
  let optionEstimate = document.createElement("option");
  let optionCourse = document.createElement("option");
  let optionEmail = document.createElement("option");

  let changeData = document.createElement("button");
  changeData.className = "changeData";
  changeData.textContent = "Изменить: ";

  optionName.value = "1";
  optionName.text = "Имя";
  optionEstimate.value = "2";
  optionEstimate.text = "Оценка";
  optionCourse.value = "3";
  optionCourse.text = "Курс";
  optionEmail.value = "4";
  optionEmail.text = "Email";

  select.add(optionName);
  select.add(optionEstimate);
  select.add(optionCourse);
  select.add(optionEmail);

  li.textContent =
    "Name: " +
    names.value +
    ", estimate - " +
    estimates.value +
    ", course - " +
    courses.value +
    ", active - " +
    actives.value +
    ", email - " +
    emails.value;
  if (estimates.value <= 3) {
    li.style.background = "rgba(255, 30, 0, 0.4)";
  } else if (estimates.value <= 4) {
    li.style.background = "rgba(255, 238, 0, 0.4)";
  } else if (estimates.value <= 5) {
    li.style.background = "rgba(94, 255, 0, 0.4)";
  }

  changeData.addEventListener('click', function () {
    for (let i = 0; i < students.length; i++) {
      if (select.value == "1") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";
        removeStudent.addEventListener("click", function () {
          ol.removeChild(li);
        });
        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";
        btn.addEventListener("click", function () {
          if (students[i].email === undefined) {
            li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - отсутствует";
          } else {
            li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - " +
            students[i].email;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        })

        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";
          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              inp.value +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active - " + true +
              ", email - " +
              students[i].email;
          } else {
            li.textContent =
              "Name: " +
              inp.value +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active - " + false +
              ", email - " +
              students[i].email;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      } else if (select.value == "2") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";
        removeStudent.addEventListener("click", function () {
          ol.removeChild(li);
        });
        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";
        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            inp.value +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - " +
            students[i].email;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
          if (inp.value <= 3) {
            li.style.background = "rgba(255, 30, 0, 0.4)";
          } else if (inp.value <= 4) {
            li.style.background = "rgba(255, 238, 0, 0.4)";
          } else if (inp.value <= 5) {
            li.style.background = "rgba(94, 255, 0, 0.4)";
          }
        })
        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";
          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              inp.value +
              ", course - " +
              students[i].course +
              ", active - " + true +
              ", email - " +
              students[i].email;
          } else {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              inp.value +
              ", course - " +
              students[i].course +
              ", active - " + false +
              ", email - " +
              students[i].email;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      } else if (select.value == "3") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";
        removeStudent.addEventListener("click", function () {
          ol.removeChild(li);
        });
        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";
        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            inp.value +
            ", active - " +
            students[i].active +
            ", email - " +
            students[i].email;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        })
        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";
          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              inp.value +
              ", active - " + true +
              ", email - " +
              students[i].email;
          } else {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              inp.value +
              ", active -" + false +
              ", email - " +
              students[i].email;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      } else if (select.value == "4") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";
        removeStudent.addEventListener("click", function () {
          ol.removeChild(li);
        });
        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";
        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - " +
            inp.value;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        })
        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";
          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              inp.value +
              ", active - " + true +
              ", email - " +
              students[i].email;
          } else {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active -" + false +
              ", email - " +
              inp.value;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      }
    }
  })

  ol.prepend(li);
  li.appendChild(removeStudent);
  li.appendChild(checkbox);
  li.appendChild(select);
  li.appendChild(changeData);

  removeStudent.addEventListener("click", function () {
    ol.removeChild(li);
  });

  if (actives.value == "false") {
    noActiveStudents.push({
      name: document.getElementById("name").value,
      estimate: document.getElementById("estimate").value,
      course: document.getElementById("course").value,
      active: document.getElementById("active").value,
    })
    noActStudents.textContent = noActiveStudents.length;
  }

  students.push({
    name: document.getElementById("name").value,
    estimate: document.getElementById("estimate").value,
    course: document.getElementById("course").value,
    active: document.getElementById("active").value,
    email: document.getElementById("email").value,
  });
  if (students.length > 0) {
    let list = document.querySelector(".list");
    list.textContent = "Список студентов";
  }

  }

  function validate (regex, names) {
    return regex.test(names)
  }
  function validate2 (regex, estimates) {
    return regex.test(estimates)
  }
  function validate3 (regex, courses) {
    return regex.test(courses)
  }
  function validate4 (regex, actives) {
    return regex.test(actives)
  }
  function validate5 (regex, emails) {
    return regex.test(emails)
  }

  names.style.border = "1px solid black";
  names.placeholder="имя";
  estimates.style.border = "1px solid black";
  estimates.placeholder="оценка";
  courses.style.border = "1px solid black";
  courses.placeholder="курс";
  actives.style.border = "1px solid black";
  actives.placeholder="активность";
  emails.style.border = "1px solid black";
  emails.placeholder="emails";
  
  names.value = "";
  estimates.value = "";
  courses.value = "";
  actives.value = "";
  emails.value = "";
}


//---------------------------------------newStudent---------------------------------
function newStudent() {
  for (let i = 0; i < students.length; i++) {
    let li = document.createElement("li");
    let removeStudent = document.createElement("button");
    removeStudent.textContent = "X";
    removeStudent.className = "removeStudent";

    let select = document.createElement("select");
    select.className = "select";
    let optionName = document.createElement("option");
    optionName.className = "aaa"
    let optionEstimate = document.createElement("option");
    let optionCourse = document.createElement("option");
    let optionEmail = document.createElement("option");

    let changeData = document.createElement("button");
    changeData.className = "changeData";
    changeData.textContent = "Изменить: ";
    optionName.value = "1";
    optionName.text = "Имя";
    optionEstimate.value = "2";
    optionEstimate.text = "Оценка";
    optionCourse.value = "3";
    optionCourse.text = "Курс";
    optionEmail.value = "4";
    optionEmail.text = "Email";

    select.add(optionName);
    select.add(optionEstimate);
    select.add(optionCourse);
    select.add(optionEmail);

    changeData.addEventListener('click', function () {
      if (select.value == "1") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";

        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";

        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            inp.value +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - " +
            students[i].email;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        })

        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";

          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              inp.value +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active - " + true +
              ", email - " +
              students[i].email;
          } else {
            li.textContent =
              "Name: " +
              inp.value +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active - " + false +
              ", email - " +
              students[i].email;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      } else if (select.value == "2") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";

        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";

        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            inp.value +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - " +
            students[i].email;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
          if (inp.value <= 3) {
            li.style.background = "rgba(255, 30, 0, 0.4)";
          } else if (inp.value <= 4) {
            li.style.background = "rgba(255, 238, 0, 0.4)";
          } else if (inp.value <= 5) {
            li.style.background = "rgba(94, 255, 0, 0.4)";
          }
        })

        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";

          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              inp.value +
              ", course - " +
              students[i].course +
              ", active - " + true +
              ", email - " +
              students[i].email;
          } else {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              inp.value +
              ", course - " +
              students[i].course +
              ", active - " + false +
              ", email - " +
              students[i].email;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      } else if (select.value == "3") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";
        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";

        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            inp.value +
            ", active - " +
            students[i].active;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        })

        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";

          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              inp.value +
              ", active - " + true;
          } else {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              inp.value +
              ", active - " + false;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      } else if (select.value == "4") {
        let removeStudent = document.createElement("button");
        removeStudent.textContent = "X";
        removeStudent.className = "removeStudent";
        let inp = document.createElement("input");
        inp.className = "inp";
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "OK";

        btn.addEventListener("click", function () {
          li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - " +
            students[i].active +
            ", email - " + 
            inp.value;
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        })

        checkbox.addEventListener("change", function (e) {
          let select = document.createElement("select");
          select.className = "select";
          let optionName = document.createElement("option");
          let optionEstimate = document.createElement("option");
          let optionCourse = document.createElement("option");
          optionName.value = "1";
          optionName.text = "Имя";
          optionEstimate.value = "2";
          optionEstimate.text = "Оценка";
          optionCourse.value = "3";
          optionCourse.text = "Курс";

          select.add(optionName);
          select.add(optionEstimate);
          select.add(optionCourse);
          if (this.checked) {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active - " + true +
              ", email - " + 
              inp.value;
          } else {
            li.textContent =
              "Name: " +
              students[i].name +
              ", estimate - " +
              students[i].estimate +
              ", course - " +
              students[i].course +
              ", active - " + false +
              ", email - " + 
              inp.value;
          }
          li.appendChild(removeStudent);
          li.appendChild(checkbox);
          li.appendChild(select);
          li.appendChild(changeData);
        });
        li.textContent = "";
        li.prepend(inp);
        li.append(btn);
      }
    })

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    if (students[i].email === undefined) {
      li.textContent =
      "Name: " +
      students[i].name +
      ", estimate - " +
      students[i].estimate +
      ", course - " +
      students[i].course +
      ", active - " +
      students[i].active +
      ", email - отсутствует";
    } else {
      li.textContent =
      "Name: " +
      students[i].name +
      ", estimate - " +
      students[i].estimate +
      ", course - " +
      students[i].course +
      ", active - " +
      students[i].active +
      ", email - " +
      students[i].email;
    }
    

    if (students[i].estimate <= 3) {
      li.style.background = "rgba(255, 30, 0, 0.4)";
    } else if (students[i].estimate <= 4) {
      li.style.background = "rgba(255, 238, 0, 0.4)";
    } else if (students[i].estimate <= 5) {
      li.style.background = "rgba(94, 255, 0, 0.4)";
    }

    checkbox.addEventListener("change", function (e) {
      let select = document.createElement("select");
      select.className = "select";
      let optionName = document.createElement("option");
      let optionEstimate = document.createElement("option");
      let optionCourse = document.createElement("option");

      optionName.text = "Имя";
      optionEstimate.value = "2";
      optionEstimate.text = "Оценка";
      optionCourse.value = "3";
      optionCourse.text = "Курс";
      select.add(optionName);
      select.add(optionEstimate);
      select.add(optionCourse);
      if (this.checked) {
        if (students[i].email === undefined) {
          if (students[i].email === undefined) {
            li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - true" +
            ", email - отсутствует";
          } else {
            li.textContent =
            "Name: " +
            students[i].name +
            ", estimate - " +
            students[i].estimate +
            ", course - " +
            students[i].course +
            ", active - true" +
            ", email - " +
            students[i].email;
          }
        }
      } else {
        if (students[i].email === undefined) {
          li.textContent =
          "Name: " +
          students[i].name +
          ", estimate - " +
          students[i].estimate +
          ", course - " +
          students[i].course +
          ", active - false" +
          ", email - отсутствует";
        } else {
          li.textContent =
          "Name: " +
          students[i].name +
          ", estimate - " +
          students[i].estimate +
          ", course - " +
          students[i].course +
          ", active - false" +
          ", email - " +
          students[i].email;
        }
      }
      li.appendChild(removeStudent);
      li.appendChild(checkbox);
      li.appendChild(select);
      li.appendChild(changeData);

      if (!this.checked) {
        noActiveStudents.push({
          name: students[i].name,
          estimate: students[i].estimate,
          course: students[i].course,
          active: false,
        })
        noActStudents.textContent = noActiveStudents.length;
      }
    });

    ol.prepend(li);
    li.appendChild(removeStudent);
    li.appendChild(checkbox);
    li.appendChild(select);
    li.appendChild(changeData);

    removeStudent.addEventListener("click", function (e) {
      if (students[i].active === false) {
        noActiveStudents.pop(students[i])
        noActStudents.textContent = noActiveStudents.length;
      }

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
