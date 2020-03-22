                // Set Item
//localStorage.setItem("hareket", "mekik");




                // Get Item
//let value = localStorage.getItem('hareket');
//console.log(`Tipi ${typeof (value)} olan değişkenin değeri = ${value}`);



                // Clear LocalStorage
//localStorage.clear();



                // LocalStorage Array Yazma
// var todos = ['todo1','todo2','todo3'];
// localStorage.setItem('todos',JSON.stringify(todos)); // önce bunu json olarak storage'a gömdük
// var todos = JSON.parse(localStorage.getItem('todos')); // sonra parse ederek array haline getirdik
// console.log(todos);




const form = document.getElementById('todo-form');
const todo_input = document.getElementById('todo');
form.addEventListener('submit', addTodo);
function addTodo(e) {
    const value = todo_input.value;
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    e.preventDefault();
}