document.addEventListener("DOMContentLoaded", () => {
  const tasklist= new Tasklist();

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const taskUl = document.getElementById("tasks");

newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask= event => {
  event.preventDefault(); 

  const newTaskDescription=document.getElementById("new-task-description");
  const newTask=document.createElement("li");
  newTask.innerText= newTaskDescription.value;

  appendNewTask(newTask);
  event.targegt.reset(); 
};

const appendNewTask= task=>{
  document.getElementById("tasks").appencChild(task);
};
}












});
