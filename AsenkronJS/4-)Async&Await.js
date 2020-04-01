const fetch = require('node-fetch');



async function fetchPosts() { // await işlemleri çalıştırmak için async olarak işaretledik
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // bu işlem yapılmadan bir alta geçmeyecek
    const data = await response.json();
    data.forEach(item => {
        console.log(item);
    });
}

fetchPosts();