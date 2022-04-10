'use strict';
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//Задача 1
function price(obj, from, to){
    let subObj = {};
    for (let elem in obj){
        if (obj[elem].price >= from && obj[elem].price < to) subObj[elem] = obj[elem];
    }
    return subObj;
}
console.log(price(items, 1000, 3000));

//Задача 2
function search(obj, itemTitle, countToCart){

    for (let items in obj) {
            if (obj[items].title === itemTitle && obj[items].count >= countToCart) {
                obj[items].count -= countToCart;
                return true;
            }
        }
    console.log("недостаточно товара");
    return false;
}
console.log(search(items, "Арфа", 5));
console.log(items);

//Задача 3
//Отсортировать массив books по значению свойства title вложенных объектов

let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];
books.sort((prev, next) => {
    if (prev.title < next.title) return -1;
    if (prev.title > next.title) return 1;
} )
console.log(books);