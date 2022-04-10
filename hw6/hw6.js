'use strict'

/*Задача 1 на метод sort()
Дан массив, необходимо отсортировать его по возрастанию длин вложенных массивов*/

let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function sortTemp(a, b){
    if (a.length === b.length) return 0;
    if (a.length < b.length) return -1;
    return 1;
}
numbers.sort(sortTemp);
console.log(numbers);

/*Задача 2 на методы sort() и Math.random()
Необходимо случайным образом изменить порядок элементов в массиве.*/

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];

function rand(a, b) {
    if (a === b) return Math.floor(Math.random() * 3 - 1);
    if (a < b) return Math.floor(Math.random() * 3 - 1);
    return Math.floor(Math.random() * 3 - 1);
}
presents.sort(rand);
console.log(presents);

/*Задача 3 на методы filter() и includes()
Создать массив из пересечений массива first и second.*/
/*В итоге должен быть создан массив: ["Октябрь", "Май"]*/

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];

let check = first.filter(elem => second.includes(elem));
console.log(check);

/*Задача 4 на метод some()
Дан массив температур. Необходимо выяснить, поднималась ли температура выше 500, вывести информацию об этом в консоль.*/

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

let checkTemp = function (element, index, array) {
    for (let subArr of array){
        for (let elem of subArr) {
            if (elem > 500) return true;
        }
    }
}
if (temperatures.some(checkTemp)) console.log("температура поднималась выше 500");
else console.log("температура не поднималась выше 500");



if (temperatures.some(elem=> elem.some(temp => temp > 500))) console.log("температура поднималась выше 500");
else console.log("температура не поднималась выше 500");