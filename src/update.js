import { Todo } from "./todo";
import { Project } from "./todo";

const wrapper = document.querySelector(".tasklist");

function updateList(project) {
    wrapper.innerHTML = '';
    let temp = document.querySelector("#template");
    
    project.todos.forEach(todo => {
        const clone = temp.content.cloneNode(true);
        const btn = clone.querySelector("#deleteBtn");
        btn.addEventListener("click", () => {
            console.log(btn.parentNode);
            btn.parentNode.parentNode.removeChild(btn.parentNode);
        });
        clone.querySelector("#todoName").textContent = todo.title;
        clone.querySelector("#todoDate").textContent = todo.dueDate;
        console.log(`the clone date is ${todo.dueDate}`);
        wrapper.appendChild(clone);
    });
}

export { updateList };