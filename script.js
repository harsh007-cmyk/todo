// const form=document.getElementById("form");
// const input=document.getElementById("input");
// const todoUL=document.getElementById("todos");


// const todos=JSON.parse(localStorage.getItem("todosString"));

// if(todos){
//   todos.forEach(todo=>{
//     addTodo(todo);
//   })
// }

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   addTodo();
// })
// function addTodo(todo){
//   console.log("enter to addtodo");
//   let todoText=input.value;
//   if(todo){
//     todoText=todo.text;
//   }
//   console.log(todoText);
//   if(todoText){
//     let todoEl=document.createElement("li");
//     if(todo&&todo.completed){
//       todoEl.classList.add("completed");
//     }
//     todoEl.innerHTML=todoText;
//     todoEl.addEventListener('click',(e)=>{
      
//       todoEl.classList.toggle("completed");
//       updateLs();
//     })
//     todoEl.addEventListener("contextmenu",(e)=>{
//       e.preventDefault();
//       todoEl.remove();
//       updateLs();
//     })
//     todoUL.appendChild(todoEl);
//     input.value="";
//     updateLs();
//   }
 
  
// }
// function updateLs(){
// const todoLs=document.querySelectorAll('li');
// const todo=[];
//   todoLs.forEach(El=>{
//    todo.push({
//       text:El.textContent,
//       completed:El.classList.contains("completed")
//     })
    
  
//   }
//   )
//   localStorage.setItem("todosString",JSON.stringify(todo));  
  
// }

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todosString"));

if(todos){
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
})

function addTodo(todo){
  let todoText = input.value;
  if(todo){
    todoText = todo.text;
  }
  if(todoText){
    const todoEl = document.createElement("li");
    if(todo && todo.isCompleted){
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () =>{
      todoEl.classList.toggle("completed");
      updateLS();
    })
    todoEl.addEventListener("contextmenu", (e)=>{
      e.preventDefault();

      todoEl.remove();
      updateLS();
    })
    todosUL.appendChild(todoEl);
    input.value="";
    updateLS();
  }}
function updateLS(){
  const todosEls = document.querySelectorAll("li");
  const todos = [];
  todosEls.forEach(todoEl => {
    todos.push({
      text:todoEl.textContent,
      isCompleted : todoEl.classList.contains("completed")
    })
  })
  localStorage.setItem("todosString", JSON.stringify(todos));
}