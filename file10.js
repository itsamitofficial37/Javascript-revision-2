//  clone nodes

const unorderdList = document.querySelector(".todo-list");
const list = document.querySelector("li");

list.textContent = "New todo";
//  clone 

const list2= list.cloneNode(true);

unorderdList.append(list);
unorderdList.prepend(list2);
