import "./styles.css";
import { Todo } from "./todo";
import {test} from "./todo";
import { Project } from "./todo";
import { updateList } from "./update";


const project = new Project("default");

const addTask = document.querySelector(".add");

const dialog = document.querySelector(".dialog");

const close = document.querySelector("#close");
close.addEventListener("click", () => {
    dialog.close();
});

addTask.addEventListener("click", () => {
    dialog.showModal();
});

const add = document.querySelector("#addItem")

add.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority").value;
    console.log(`${title} and ${description} by ${date} its ${priority}`);
    const todo = new Todo(title, description, date, priority);
    project.addTodo(todo);
    console.log(project);
    updateList(project);
    dialog.close();
})