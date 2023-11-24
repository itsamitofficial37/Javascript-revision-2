// add new HTML element to page 

// innerHTML to add html element 

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
todoList.innerHTML = "<li> New Todo </li>";
todoList.innerHTML += "<li> New Todo </li>";


// when you should use it or when should not use 
// new element ko add krne ke liye nhi krna hai iska use 
//  kisi html element ko edit krne ke liye iska use kr skte hai