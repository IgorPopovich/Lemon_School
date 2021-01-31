bitesCicle: while (true) {
  let pr = prompt("Введите единицу измерения: Byte, KB, MB, GB");

  if (pr === "Byte") {
    alert(8);

    continue bitesCicle;
  } else if (pr === "KB") {
    alert(1024 + " бит");

    continue bitesCicle;
  } else if (pr === "MB") {
    alert(1024 + " килобайт");

    continue bitesCicle;
  } else if (pr === "GB") {
    alert(1024 + " мегабайт");

    continue bitesCicle;
  } else {
    let restart = confirm("Вы ввели некоректное значение! Начать заново?");

    if (restart === true) {
      continue bitesCicle;
    } else {
      break bitesCicle;
    }
  }
}
