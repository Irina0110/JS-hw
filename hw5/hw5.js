'use strict';

//Задача 1

function range(x, y, k=1){
    let arr = [];
    let elem;
    if ((y > x) && (k > 0)) {
        while (y >= x) {
            elem = x;
            arr.push(elem)
            x += k;
        }
    }
    if ((k < 0) && (y < x)){
        while (x >= y) {
            elem = y;
            arr.push(elem)
            x += k;
        }
    }
    if (((k < 0) && (y > x)) || ((k > 0) && (y < x))) {
        console.warn()
        return null;
    }
    return arr;
}

console.log(range(3, 9, 2)); //вернет массив вида [3, 5, 7, 9]
console.log(range(3, 9)); //вернет массив вида [3, 4, 5, 6, 7, 8, 9]

//Задача 2

// function checkSpam (a, ...spamWords){
//     let del = " ";
//     let arrWords = a.split(del);
//     let period = 0;
//     for (let i = 0; i <= arrWords.length; i++){
//         for (let j = 0; j <= spamWords.length; j++){
//             if (arrWords[i] === spamWords[j]){
//                 period += 1;
//             }
//         }
//     }
//         if (period === 0) {
//             return "Спам не встречается";
//         }
//         if ((period/arrWords.length) <= .5) {
//             return "Спам-слово встречается редко";
//         }
//             return  "Спам-слово встречается часто";
//
// }

//Задача 2

function checkSpam (a, ...spamWords){
    let del = " ";
    let arrWords = a.split(del);
    let period = [];
    for (let i = 0; i < arrWords.length; i++){
        for (let j = 0; j < spamWords.length; j++){
            if (arrWords[i] === spamWords[j]){
                if (!period[j]) {
                    period[j] = 1;
                } else
                period[j] += 1;
            }
        }
    }
    console.log(period)
    for (let i = 0; i <= period.length; i++){
        if ((period[i] === 0) || (!period[i])) {
            console.log(spamWords[i] + " Спам-слово не встречается");
        }
        if (period[i] <= 4) {
            console.log(spamWords[i] + " Спам-слово встречается редко");
        }
        if (period[i] >= 5) {
            console.log(spamWords[i] + " Спам-слово встречается часто");
        }
    }
    return arrWords;

}
console.log(checkSpam("sjbgv dlrbr ball ball ball ball spam ball ebrb", "spam", "ball", "rush"));