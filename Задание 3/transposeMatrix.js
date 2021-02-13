/*Написать функцию, которая транспонирует матрицу*/

let arr = [
  ["A", "B", "C"],
  ["A", "B", "C"],
  ["A", "B", "C"],
];

let newArray = [];
for (let i = 0; i < arr.length; i++) {
  let arrDemo = [];
  for (let j = 0; j < arr[i].length; j++) {
    arrDemo.push(arr[j][i]);
  };
  newArray.push(arrDemo);
};
console.log(newArray);