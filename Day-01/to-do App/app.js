const taskinput = document.getElementById('taskinput');
const addtaskbtn = document.getElementById('addtaskbtn');
const tasklist = document.getElementById('tasklist');

window.onload = function(){
    const tasks = JSON.parse(this.localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text , task.completed);
    });
};

function saveTasks(){
    const tasks = [];
    document.querySelectorAll('#tasklist li').forEach(li =>{
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function addTaskToDOM(tasktext,completed=false){
    const li = document.createElement('li');
    li.style.display= 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';

    const taskTextNode = document.createTextNode(tasktext);
    li.appendChild(taskTextNode);
    if (completed){
        li.classList.add('completed');
    }
const delbtn = document.createElement('button');
delbtn.textContent = 'X';
delbtn.style.marginLeft = '10px';
delbtn.style.color = 'red';
delbtn.style.border = 'none';
delbtn.style.background = 'transparent';
delbtn.style.cursor = 'pointer';


delbtn.addEventListener('click' ,e =>{
e.stopPropagation();
tasklist.removeChild(li);
saveTasks();
});
li.appendChild(delbtn);

li.addEventListener('click',()=>{
        li.classList.toggle('completed');
    });

    tasklist.appendChild(li);
    

}


addtaskbtn.addEventListener('click',()=>{
    const tasktext  = taskinput.value.trim();
    if(tasktext === ''){
        alert('Please enter a task ');
        return;
    }
    addTaskToDOM(tasktext);
    taskinput.value = '';
    saveTasks();
});
   taskinput.addEventListener('keypress',e =>{
    if(e.key === 'Enter'){
        addtaskbtn.click();
    }
   });
li.style.display = 'flex';
li.style.justifyContent = 'space-between';
li.style.alignItems = 'center';
 li.textContent = tasktext;





