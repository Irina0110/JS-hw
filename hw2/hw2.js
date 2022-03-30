'use strict';

//Задача 1
let count=43;
if ((count <= 100)&&(count >= 90)){
    console.log("Отлично");
}
 else if ((count <= 89)&&(count >= 60)){
    console.log("Хорошо");
 }
 else if ((count <= 59)&&(count >= 40)){
    console.log("удовлетворительно");
 }
 else if ((count <= 39)&&(count >= 0)){
    console.log("попробуйте еще раз");
 }

//Задача 2
let sum=1900, code="1111";
switch (code) {
    case "4653":
        console.log("Сумма покупки с учетом скидки равна", (sum*0.7));
        break;
    case "5698":
    case "5111":
        console.log("Сумма покупки с учетом скидки равна", (sum*0.8));
        break;
    case "6922":
    case "6113":
    case "6099":
        console.log("Сумма покупки с учетом скидки равна", (sum*0.9));
        break;
    default:
        console.log("Сумма покупки", sum);
}

//Задача 3
let wash=0.5, plates=2;
while ((wash > 0) && (plates > 0)){
    wash=wash-0.5;
    plates--;
    console.log("Осталось", wash, "моющего");
}
if (wash === 0){
    console.log("Осталось", plates, "тарелок");
}
else {
    console.log("Осталось", wash, "моющего");
}
if ((wash === 0) && (plates === 0)){
    console.log("Моющего средства хватило ровно");
}
//Задача 4
let a = Math.floor(Math.random() * (8 + 1)+1);
while (true){
    let b=prompt("Введите число");
    if (b === "0") {
        console.log("Попробуйте еще раз");
        break;
    }
    if (a === b) {
        console.log("Вы угадали");
        break;
    } else if (a > b){
        console.log("загаданное число больше");
        break;
    } else {
        console.log("загаданное число меньше");
        break;
    }
}

//Задача 5
let c = Math.floor(Math.random() * (490 + 1)+25);
    if ((c > 25) && (c < 200)) {
        console.log(" Число", c, "содержится в интервале (25;200)");
    } else {
        console.log(" Число", c, "не содержится в интервале (25;200)");
    }

//Задача 6
let min = 0;
let max = 100;
while (true) {
    if (max === min) {
        console.log("Ваше число ", max);
        break;
    }
    console.log("Число больше или равно",Math.round(max - (( max - min ) / 2)));
    let ans = prompt("Ответ");
    if (ans === "да") {
        min = Math.round((max - (max - min) / 2));
    }
    if (ans === "нет") {
        max = Math.round((min + (max - min) / 2));
    }
    if (ans === "стоп") {
        break;
    }
}
