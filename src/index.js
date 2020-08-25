document.addEventListener("DOMContentLoaded", () => {

function addTask(){
  let input = document.querySelector('input').value;
  let list = document.getElementById('tasks');
  let task = document.createElement('li');
  task.innerText = input;
  list.append(task);
};

let button = document.querySelectorAll('input')[1]

button.addEventListener('click', function(e){
  e.preventDefault();
  addTask();
});

});