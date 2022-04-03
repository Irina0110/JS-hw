'use strict'

//Задача 1
let arr = [5, -6, -331, 45, 985];
console.log(arr);
let pArr=[];
for (let elem of arr){
    if (elem > 0){
        pArr.push(elem);
    }
}
console.log(pArr);

//Задача 2

let count = new Array(7);
for (let i=0; i<count.length; i++){
    count[i]=Math.floor((Math.random() * (295 + 1)+5))
}
console.log(count);
let min=300, i_min;
let max=5, i_max;
for (let i=0; i<count.length; i++){
    if (count[i]<min){
        min=count[i];
        i_min=i;
    }
}
for (let i=0; i<count.length; i++){
    if (count[i]>max){
        max=count[i];
        i_max=i;
    }
}
count[i_max]=min;
count[i_min]=max;
console.log(count)

//Задача 3 (Эту задачу не совсем поняла:( )

let str;
let strArr=[];
while (true) {
    str = prompt("Введите строку");
    if (str === '0') {
        break;
    }
    while (!strArr.includes(str)) {
        strArr.push(str);
    }
}
console.log(strArr);