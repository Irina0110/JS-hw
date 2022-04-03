'use strict'

let count=216;

let ost = count %100;
if (ost===1) {
    console.log(count, 'товар');
}
if ((ost >= 11) && (ost <= 19)) {
    console.log(count, 'товаров');
} else {
    let ost1 = ost %10;
    if ((ost1 >= 2) && (ost1 <= 4)) {
        console.log(count, 'товара');
    }
    if (((ost1 >= 5) && (ost1 <= 9)) || (ost1 === 0)){
        console.log(count, 'товаров');
    }
}
