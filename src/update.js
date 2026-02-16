import { Todo } from "./todo";
import { Project } from "./todo";

const wrapper = document.querySelector(".tasklist");

function updateList(project) {
    wrapper.innerHTML = '';
    let temp = document.querySelector("#template");
    
    project.todos.forEach(todo => {
        const clone = temp.content.cloneNode(true);
        clone.querySelector(".task").setAttribute("id", todo.id);
        console.log("the clones id is " + clone.querySelector(".task").id);
        const btn = clone.querySelector("#deleteBtn");
        //delete todo item
        btn.addEventListener("click", () => {
            console.log(btn.parentNode);
            btn.parentNode.parentNode.removeChild(btn.parentNode);
            const index = project.todos.indexOf(todo);
            project.todos.splice(index, 1);
        });
        clone.querySelector("#todoName").textContent = todo.title;
        clone.querySelector("#todoDate").textContent = todo.dueDate;
        console.log(`the clone date is ${todo.dueDate}`);
        wrapper.appendChild(clone);
    });
}

export { updateList };