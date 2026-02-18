import "./styles.css";
import { Todo } from "./todo";
import {test} from "./todo";
import { Project } from "./todo";
import { updateList } from "./update";
import { project } from "./update";
import { projectList } from "./update";
import { updateProjects } from "./update";


const addTask = document.querySelector(".add");

const dialog = document.querySelector(".dialog");

const dialogtwo = document.querySelector(".dialogtwo")

const close = document.querySelector("#close");

const add = document.querySelector("#addItem")

const addP = document.querySelector("#projectAdd");

const newProject = document.querySelector("#newProjectBtn");

let index = 0;

updateProjects(project);

const container = document.querySelector(".projects");

container.addEventListener("click", (e) => {
    const card = e.target.closest(".projRow");
    if (!card) return; // click wasn't on a project row
    const id = card.id;
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id === id) {
            index = i;
            console.log(`the index is now ${i}`);
            updateList(projectList[i]);
        }
    }
    card.classList.toggle("altRow");
});


newProject.addEventListener("click", () => {
    dialogtwo.showModal();
});

close.addEventListener("click", () => {
    dialog.close();
});

addTask.addEventListener("click", () => {
    dialog.showModal();
});

addP.addEventListener("click", () => {
    const projectName = document.querySelector("#projectName").value;
    const projectTemp = new Project(projectName);
    console.log(projectTemp);
    updateProjects(projectTemp);
    dialogtwo.close();
});

add.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority").value;
    console.log(`${title} and ${description} by ${date} its ${priority}`);
    //create todo object
    const todo = new Todo(title, description, date, priority);
    projectList[index].addTodo(todo);
    console.log(project);
    //update UI
    updateList(projectList[index]);
    dialog.close();
});
