
let tasks = [];

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const errorMessage = document.getElementById("error-message");

addButton.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();
  
  if (task === "") {
    errorMessage.textContent = "Please enter a task!";
    return;
  }
  
  tasks.push(task);
  taskInput.value = "";
  errorMessage.textContent = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    
    const taskText = document.createElement("span");
    taskText.textContent = task;
    
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(index));
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));
    
    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
  });
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


