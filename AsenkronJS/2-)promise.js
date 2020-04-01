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

function newTodo(todo) {
    return new Promise((resolve, reject) => { // resolve & reject isimli 2 parametre alır
        // resolve -> her şey başarılı olduğunda promise'dan dönecek sonucu verir, reject ise hata olduğunda dönecek sonucu verir
        setTimeout(() => {
            todos.push(todo);
            const e = false; // db işlemlerini simüle ediyoruz. Yani error false (yok) dedik
            if (!e) {
                resolve(todos); // hata yoksa resolve et (içine todos verdik ve todos döndü)
            } else {
                reject("Hata var...."); // hata varsa reject et. string döndürdük
            }
        }, 2000);
    });

}


newTodo({ title: 'Todo 4', description: 'Todo içerik 4' })
    .then(response => { // resolve dönerse then ile yakalarız. burda response todos değişkenine eşitlendi çünkü; resolve ile todos'u döndürdük
        console.log("Yeni liste = ", response);
    })
    .catch(e => { // hata varsa reject'i catch ile yakalarız. e değişkeni "Hata var..." stringine eşitlendi çünkü reject ile onu döndürdük
        console.log(e);
    }); 



