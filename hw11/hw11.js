'use strict';
generateField(4);
function generateField (n){
    let tablePriz = document.createElement("table");
    tablePriz.classList.add("field");
    if (n < 3) return;
    for (let i = 0; i < n; i++){
        let row = tablePriz.insertRow();
        for (let j = 0; j < n; j++){
            row.insertCell();
        }
    }
    document.body.append(tablePriz);
    let cells = document.querySelectorAll(".field td");
    for (let i = 0; i < 3; i++){
        let ind = Math.floor(Math.random() * cells.length);
        console.log(ind);
        cells[ind].innerText = "Приз";
        cells[ind].style.fontSize = 0;
    }

}

let tableP = document.querySelector(".field");
tableP.addEventListener("click", showPrize);

let count = 4;
function showPrize (event){
    let clickElem = event.target;
    console.log(clickElem);
    let cells = document.querySelectorAll(".field td");
    count--;

    if (clickElem.innerText === "Приз") {
        clickElem.style.fontSize = null;
        tableP.removeEventListener("click", showPrize);
    }
    // for (let i = 0; i < cells.length; i++){
    //     if (cells[i].textContent === "Приз") {
    //         clickElem.style.fontSize = null;
    //     }
    // }
}
