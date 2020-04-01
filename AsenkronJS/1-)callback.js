const todos = [
    { title: 'Todo 1', description: 'Todo içerik 1' },
    { title: 'Todo 2', description: 'Todo içerik 2' },
    { title: 'Todo 3', description: 'Todo içerik 3' }
]

function todoList() {
    let sayac = 1;
    setTimeout(() => {
        todos.forEach(item => {
            console.log(`${sayac}. Todo = ${item.title}`);
            sayac++;
        });
    }, 1000);
}

function newTodo(todo, callback) { // parametre olarak bir fonksiyon alacak
    setTimeout(() => {
        todos.push(todo); // todos listesine eleman ekle
        callback(); // aldığı fonksiyonu burada çalıştıracak
    }, 2000); // 2 saniye sonra içerideki işlem yap
}


newTodo({ title: 'Todo 4', description: 'Todo içerik 4' }, todoList); // parametre olarak fonksiyonu yolluyoruz
