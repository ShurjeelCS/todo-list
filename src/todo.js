function Todo(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = self.crypto.randomUUID();

    this.toString = function () {
        return `${this.title} with ${this.dueDate} date`;
    }
}

function Project(name) {
    this.name = name;
    this.todos = [];

    this.addTodo = function (todo) {
        this.todos.push(todo);
    };
}

function test() {
    return "hello mate";
}

export { Todo, Project, test };
