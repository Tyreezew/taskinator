var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function() { 
  var listItemEl = document.createElement("li"); //create new task itemk item
  listItemEl.className = "task-item";  // style the new task item
  listItemEl.textContent = "This is a new task.";  // add the text
  tasksToDoEl.appendChild(listItemEl);  // append the element to the task
  }; 

buttonEl.addEventListener("click", createTaskHandler);

