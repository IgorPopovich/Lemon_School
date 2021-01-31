let string = "123456";
let numbers = string.split("");
let sum = 0;
numbers.forEach((number) => {
  if (number % 2 === 0) sum += +number;
});
console.log('Cумма цифр числа, которые кратны двум = ' + sum);