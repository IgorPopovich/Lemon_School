let num = 20,
  delNumber = [];
for (let i = 2; i != num; i++) {
  if (num % i == 0) delNumber.push(num / i);
}
console.log('Первые N делителей этого числа нацело = ' + delNumber);