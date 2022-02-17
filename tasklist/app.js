// UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearAllBtn = document.querySelector('.clear-tasks');
const clearBtn = document.querySelector('.clear-filtered-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Load tasks from Local Storage
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all tasks event
  clearAllBtn.addEventListener('click', clearTasks);
  // Clear viewed tasks event
  clearBtn.addEventListener('click', clearViewedTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);

}

function getTasks() {
  let tasks;
  const storedTasks = localStorage.getItem('tasks');
  
  if(storedTasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(storedTasks);
  }

  tasks.forEach(function(task){
    assembleTask(task);
  });

}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
    e.preventDefault();
    return;
  }

  // Create Task and append to TaskList
  assembleTask(taskInput.value);
  // Store in Local Storage
  storeInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

function assembleTask(text){
  // Create list item element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append it to list item
  li.appendChild(document.createTextNode(text));
  // Display style
  li.style.display = 'block';
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add remove icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to the list item
  li.appendChild(link);

  // Append list item to the list of tasks
  taskList.appendChild(li);
}

function storeInLocalStorage(task) {
  let tasks;
  const storedTasks = localStorage.getItem('tasks');
  
  if(storedTasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(storedTasks);
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  removeFromLocalStorage(e.target.parentElement.parentElement);
  
}

function removeFromLocalStorage(listItem) {
  let tasks;
  const storedTasks = localStorage.getItem('tasks');
  
  if(storedTasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(storedTasks);
  }

  tasks.forEach(function(task, index){
    if(task === listItem.textContent) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // https://jsperf.com/innerhtml-vs-removechild

  clearLocalStorage();
}

function clearLocalStorage() {
  localStorage.clear();
}

function clearViewedTasks() {
  document.querySelectorAll('.collection-item').forEach(function(task){
    if(task.style.display === 'block'){
      task.remove();
      removeFromLocalStorage(task);
    }
  });
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
