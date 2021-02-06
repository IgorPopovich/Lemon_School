bitesCicle: while (true) {
  let bit = prompt("Введите единицу измерения: Byte, KB, MB, GB");

  if (bit === "Byte") {
    alert(8);

    continue bitesCicle;
  } else if (bit === "KB") {
    alert(1024 + " бит");

    continue bitesCicle;
  } else if (bit === "MB") {
    alert(1024 + " килобайт");

    continue bitesCicle;
  } else if (bit === "GB") {
    alert(1024 + " мегабайт");

    continue bitesCicle;
  } else {
    let theEnd = confirm("Вы ввели некоректное значение! Начать заново?");

    if (theEnd === true) {
      continue bitesCicle;
    } else {
      break bitesCicle;
    }
  }
}