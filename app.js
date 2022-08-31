let input = document.getElementById("todo-add-input");
let button = document.getElementById("todo-add-button");
let list = document.getElementById("list");
let doneList = document.getElementById("done-list");
const todos = getItemFromStorage() || [];
const doneTodos = getItemFromStorage() || [];

printTodos();
button.addEventListener('click', () => {
   todos.push(input.value);
   setItemToStorage(todos);
   input.value = "";
   printTodos();
});
function printTodos() {
   list.innerHTML = "";
   for (let i = 0; i < todos.length; i++) {
      list.innerHTML += `<li>${todos[i]} <button id='${i}' class='list-buttons'>DONE</button></li>`
   }
   doneList.innerHTML = "";
   for (let a = 0; a < doneTodos.length; a++) {
      doneList.innerHTML += `<li>${doneTodos[a]}<button id='${a}' class='list-buttons'>DELETE</button></li>`;
   };
}

list.addEventListener('click', (e) => {
   if (e.target.tagName == 'BUTTON') {
      doneTodos.push(todos[e.target.id]);
      todos.splice(e.target.id, 1);
      setItemToStorage();
      printTodos();
   }
})
doneList.addEventListener('click', (e) => {
   if (e.target.tagName == 'BUTTON') {
      console.log(e.target.id, e.target);
      doneTodos.splice(e.target.id, 1);
      setItemToStorage();
      printTodos();
   }
})

function getItemFromStorage() {
   JSON.parse(localStorage.getItem("todos"));
}
function setItemToStorage() {
   localStorage.setItem("todos", JSON.stringify(todos));
   localStorage.setItem("doneTodos", JSON.stringify(doneTodos));
}









