// define Ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');




function loadEventListeners() {
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks)
    //Add Task 
    form.addEventListener('submit', addTask);
    //remove task
    taskList.addEventListener('click', removeTask);
    //clear task 
    clearBtn.addEventListener('click', clearTasks);
    //filter task events
    filter.addEventListener('keyup', filtertasks)

}
loadEventListeners();

// Get tasks from ls
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){

        //create li elements
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
        //Create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content'
        //Add icon html
        link.innerHTML = '✖';
        //Append the link to li
        li.appendChild(link);
    
        //Append li to ul
        taskList.appendChild(li);
    });

}


// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }


    //create li elements
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'
    //Add icon html
    link.innerHTML = '✖';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    //store in the local storage
    storeTaskInLocalstorage(taskInput.value);
    

    //clear input
    taskInput.value = '';


    e.preventDefault();
}

function storeTaskInLocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

//remove task
function removeTask(e){
    if(e.target.classList.contains('delete-item')){
        if(confirm('Karna hi h kya delete bsdk')){
            e.target.parentElement.remove();

            //remove  from ls
            removeTaskFromLocalStorage(e.target.parentElement);
        }
    }
}
//remove from ls
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//clear tasks
function clearTasks() {
    // taskList.innerHTML = '';
    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //clear from ls
    cleartasksFromLocalStorage();
}

//clear from ls
function cleartasksFromLocalStorage(){
    localStorage.clear();

}
// filter tasks
function filtertasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
