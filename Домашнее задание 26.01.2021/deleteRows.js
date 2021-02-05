/*Удалить из массива все столбцы которые не имеют ни одного нулевого 
элемента и сумма которых положительна - оформить в виде функции*/

for (var i = 0; i < arr.length; i++) { 
    console.log(arr) 
     if(arr[i].indexOf(0) != -1) {
        arr.splice(i, 1)
    }
    console.log(arr)
    }
