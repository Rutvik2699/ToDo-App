//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener("click", deleteTodo);
//Functions

function addTodo(event){

    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv= document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //Check mark button 
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    //Check Trash button 
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn")
    todoDiv.appendChild(trashButton)

    //Append to LIST
    todoList.appendChild(todoDiv)

    //Clear Todo Input Value
    todoInput.value="";

}

function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      todo.classList.add("fall");
      //at the end
      removeLocalTodos(todo);
      todo.addEventListener("transitionend", e => {
        todo.remove();
      });
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      console.log(todo);
    }
  }