let input = document.getElementById("todo-add-input");
let button = document.getElementById("todo-add-button");
let list = document.getElementById("list");
let doneList = document.getElementById("done-list");
const todos = [];
const doneTodos = [];

button.addEventListener('click', () => {
   todos.push(input.value);
   input.value = "";
   printTodos();
});
function printTodos() {
   list.innerHTML = "";
   for (let i = 0; i < todos.length; i++) {
      list.innerHTML += `<li>${todos[i]} <button id='${i}'>DONE</button></li>`
   }
   doneList.innerHTML = "";
   for (let a = 0; a < doneTodos.length; a++) {
      doneList.innerHTML += `<li>${doneTodos[a]}</li>`;
   };
}

list.addEventListener('click', (e) => {
   if (e.target.tagName == 'BUTTON') {
      doneTodos.push(todos[e.target.id]);
      todos.splice(e.target.id, 1);
      printTodos();
   }



})









