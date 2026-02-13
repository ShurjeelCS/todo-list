import "./styles.css";
import { Todo } from "./todo";
import {test} from "./todo";
import { Project } from "./todo";

console.log("Script ran");

const item1 = new Todo("taksk", "custom task", 2026, 1000);
const item2 = new Todo("number 2", "second task", 20, 37);
const arr =[1, 2, 3, 4, 4];

const project = new Project("name");
project.addTodo(item1);
console.log(JSON.parse(JSON.stringify(project)));

project.addTodo(item2);
console.log(JSON.parse(JSON.stringify(project)));
