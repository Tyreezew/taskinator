var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
    console.log(event);
    event.preventDefault();

  var listItemEl = document.createElement("li"); //create new task item
  listItemEl.className = "task-item";  // style the new task item
  listItemEl.textContent = "This is a new task.";  // add the text
  tasksToDoEl.appendChild(listItemEl);  // append the element to the task
  }; 

formEl.addEventListener("submit", createTaskHandler);

