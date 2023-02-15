//your code here
var todoValue = document.getElementById("newTodoInput");
var btnv = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo (){
    if(todoValue.value){
        var li = document.createElement('li')
        li.textContent = todoValue.value;
        ol.appendChild('li');
        todoValue.value = "";
    }
}

btn.addEventListener('click', addTodo);
