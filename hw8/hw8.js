'use strict';

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];

function generateTable (arr){
    let table = document.createElement("table");
    let keys = Object.keys(arr[0]);
    let firstRow = table.insertRow();
    for (let title of keys){
        let cell = firstRow.insertCell();
        cell.innerText = title;
    }
    for (let elem of arr){
        let row = table.insertRow();
        for (let elems in elem){
                let cell = row.insertCell();
                cell.innerText = elem[elems];
            }
        }
    document.body.append(table);
}
generateTable(articles);
generateTable(goods);
