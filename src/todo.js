function Todo(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
}

function test() {
    return "hello mate";
}

export {Todo, test};