function Todo(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
}

function Project(list) {
    this.list = list;
}

function test() {
    return "hello mate";
}

export {Todo, Project, test};