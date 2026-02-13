import "./styles.css";
import { Todo } from "./todo";
import {test} from "./todo";
import { Project } from "./todo";




console.log("greeting");
const item = new Todo("taksk", "custom task", 2026, 1000);
const arr =[1, 2, 3, 4, 4];
const project = new Project(arr);
console.log(project);
console.log(item);
console.log(test());