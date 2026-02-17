import { Todo } from "./todo";
import { Project } from "./todo";

//intialise list of projects
let projectList = [];
const project = new Project("default");


const wrapper = document.querySelector(".tasklist");
const container = document.querySelector(".projects");



function updateList(project) {
    wrapper.innerHTML = '';
    let temp = document.querySelector("#template");
    
    project.todos.forEach(todo => {
        const clone = temp.content.cloneNode(true);
        clone.querySelector(".task").setAttribute("id", todo.id);
        const btn = clone.querySelector("#deleteBtn");
        //delete todo item
        btn.addEventListener("click", () => {
            btn.parentNode.parentNode.removeChild(btn.parentNode);
            const index = project.todos.indexOf(todo);
            project.todos.splice(index, 1);
            console.log(`the projects todo list is ${project.todos}`);
        });
        console.log(clone.querySelector("#todoName").textContent + "this is what your looking for");
        clone.querySelector("#todoName").textContent = todo.title;
        clone.querySelector("#todoDate").textContent = todo.dueDate;
        wrapper.appendChild(clone);
    });
}

function updateProjects(project) {
    container.innerHTML = '';
    projectList.push(project);
    let temp = document.querySelector("#projTemp");     
    for (let i = 0; i < projectList.length; i++) {
        const clone = temp.content.cloneNode(true);
        clone.querySelector(".projName").textContent = projectList[i].name;
        container.appendChild(clone);
    }
}

export { updateList, projectList, project, updateProjects };