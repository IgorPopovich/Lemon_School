/*Написать функцию, которая умножает две матрицы. (в данном случае сложение)*/

let arr1 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

var arr2 = [
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
];

var sum1 = 0;

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1[i].length; j++) {
    sum1 += arr1[i][j];
  };
};

var sum2 = 0;

for (var i = 0; i < arr2.length; i++) {
  for (var j = 0; j < arr2[i].length; j++) {
    sum2 += arr2[i][j];
  };
};

console.log(sum1 + sum2);
