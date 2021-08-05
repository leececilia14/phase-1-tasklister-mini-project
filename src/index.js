const newTaskDescription= document.getElementById("new-task-description");

const list= document.getElementById("tasks");

const createNewTask= event=> {
  event.preventDefault();
  const newTask= document.createElement('li');

newTask.innerText= newTaskDescription.value;
createButton (newTask); 
list.appendChild(newTask);

event.target.reset();

};

const createButton= task => {
  const boop= document.createElement('button');
  boop.innerText= "X";

  task.appendChild(boop);
  boop.addEventListener('click', (e)=> deleteTask(e));
}

const deleteTask= (e)=> {
  const selectedTask= e.target.parentElement;
  list.removeChild(selectedTask);
}

document.querySelector('#create-task-form').addEventListener("submit", (e)=>
createNewTask(e))


document.addEventListener("DOMContentLoaded", () => 
