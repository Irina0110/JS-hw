'use strict';

let blockTasks = document.getElementById("tasks");
let tasks = localStorage.getItem("tasks");
if (tasks){
    tasks = JSON.parse(tasks);
    console.log(tasks);
    for (let task of tasks){
        let block = document.createElement("div");
        block.dataset.id = task.id;
        block.classList = "task";
        let data = task.deadline;
        block.innerHTML = `
           <h3 class="title"> ${task.nameTask} </h3>
           <p>${task.description}</p>
           <p>Выполнить к: <span class="data">${data}</span> </p>            
        `
        if (task.members.length > 0){
            let members = document.createElement("p");
            members.innerText = `Участники: ${task.members} `;
            block.append(members);
        }
        blockTasks.append(block);
    }
    let buttonDelete = document.createElement("div");
    buttonDelete.classList = "buttonDelete";
    buttonDelete.innerHTML = `
    <button id="buttonDelete" type="button"> Удалить выбранные</button>
    `
    blockTasks.append(buttonDelete);
    let tasksBlock = document.querySelectorAll(".task");
    //let checkElements = [];
    for (let elem of tasksBlock){
        elem.addEventListener("click", function (){
                this.classList.toggle("check");
/*                if (this.classList.contains("check")) checkElements.push(elem.id);
                else checkElements.splice(elem.id, 1);//
                console.log(checkElements);*/

            }
        )
    }
    buttonDelete.addEventListener("click", clean);
    function clean(){
        for (let elem of tasksBlock){
            if (elem.classList.contains("check")) {
                console.log(elem.dataset.id);
                for (let i = tasks.length-1; i >= 0; i--){
                    console.log(tasks[i].id);
                    if (elem.dataset.id == tasks[i].id){
                        tasks.splice(i, 1);
                        elem.remove();
                    }
                }
            }

        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
} else  {
    let emptyStorage = document.createElement('div');
    emptyStorage.classList = "empty";
    emptyStorage.innerHTML = `
    <a href="form.html">Добавьте задачу через форму по данной ссылке</a>
`
    blockTasks.append(emptyStorage);
}
