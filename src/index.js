import "./styles.css";
import { Todo } from "./todo";
import {test} from "./todo";
import { Project } from "./todo";


const project = new Project("default");

const addTask = document.querySelector(".add");

const dialog = document.querySelector(".dialog");

addTask.addEventListener("click", () => {
    dialog.showModal();
});