'use strict';

//Задача 1

function range(x, y, k=1){
    let arr = [];
    let elem;
    while (y >= x) {
        elem = x;
        arr.push(elem)
        x += k;
    }
    return arr;
}

console.log(range(3, 9, 2)); //вернет массив вида [3, 5, 7, 9]
console.log(range(3, 9)); //вернет массив вида [3, 4, 5, 6, 7, 8, 9]

//Задача 2

function checkSpam (a, ...spamWords){
    let del = " ";
    let arrWords = a.split(del);
    let period = 0;
    for (let i = 0; i <= arrWords.length; i++){
        for (let j = 0; j <= spamWords.length; j++){
            if (arrWords[i] === spamWords[j]){
                period += 1;
            }
        }
    }
        if (period === 0) {
            return "Спам не встречается";
        }
        if ((period/arrWords.length) <= .5) {
            return "Спам-слово встречается редко";
        }
            return  "Спам-слово встречается часто";

}
console.log(checkSpam("sjbgv dlrbr ball ball spam ball ebrb", "spam", "ball", "rush", ));