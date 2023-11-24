// document.createElement();
// append 
// prepend
// remove

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Student");
const list = newTodoItem.appendChild(newTodoItemText);

const todoList = document.querySelector(".todo-list");

todoList.append(list);

//  prepend 
todoList.prepend(list)

// remove 
newTodoItemText.remove();

// console.log(newTodoItem);