let number = 301;
while (true) {
  if (!(number % 17)) {
    console.log('Минимальное число, которое больше 300 и нацело делиться на 17 = ' + number);
    break;
  }
  number++;
}

// или 
//console.log(17 * Math.ceil(300 / 17));