'use strict';

function checkName (name){
    if (name.value.length < 1 || name.value.length > 20) {
        name.nextElementSibling.innerText = "Значение должно быть в диапазоне от 1 до 20";
        return false;
    }
    else {
        name.nextElementSibling.innerText = "";
        return true;
    }
}

function checkDate(data){
    let dateNow = Date.now();
    let dateInput = Date.parse(data.value);
    if (dateInput < dateNow || data.value === ""){
        data.nextElementSibling.innerText = "Дата не может быть в прошлом";
        return false;
    } else {
        data.nextElementSibling.innerText = "";
        return true;
    }
}
document.forms["addTask"]
    .elements.nameZad
    .addEventListener("input", function (){
        checkName(this);
    });

document.forms["addTask"]
    .elements.dateZad
    .addEventListener("input", function (){
            checkDate(this);
    });

function addMember() {
    let member = document.createElement("div");
    member.classList = "inputMember"
    member.innerHTML = `
        <input class="member" type="text" placeholder="Введите имя участника">
        <button type="button" data-set="delete" class="clean">&#10008</button>
    `;
    document.getElementById("members").append(member);
}

document.getElementById("buttonAddUser")
    .addEventListener("click", addMember);

let members = document.getElementById("members");
members.addEventListener("click", remove);
function remove (event){
    let clickElem = event.target;
    let code = clickElem.dataset.set;
    if (code){
        clickElem.parentNode.parentNode.removeChild(clickElem.parentNode);
    }

}

function addTask (event){
    event.preventDefault();
    let nameTask = this.elements.nameZad;
    let description = this.elements.descriptionZad.value;
    let deadline = this.elements.dateZad;
    let members = [];

    if (checkName(nameTask)) {
        nameTask = nameTask.value;
        if (checkDate(deadline)) {
            deadline = deadline.value;
            for (let elem of this.getElementsByClassName("member")){
                if (elem.value.length) members.push(elem.value);
            }
            let taskInfo = {
                nameTask,
                description,
                deadline,
                members
            }

            let tasks = localStorage.getItem("tasks");
            tasks = JSON.parse(tasks);
            if (tasks) {
                console.log(tasks.length + 1);
                taskInfo.id = tasks[tasks.length - 1].id + 1;
            }
            else {
                tasks = [];
                taskInfo.id = 1;
            }

            tasks.push(taskInfo);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            console.log(tasks);
            this.reset();
        }
    }

}
document.forms["addTask"].addEventListener("submit", addTask);

