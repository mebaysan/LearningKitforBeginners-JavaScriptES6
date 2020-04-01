const fetch = require("node-fetch");
const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Deneme");
});
const p3 = "157123";
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    res.json();
});

Promise.all([p1, p2, p3, p4]).then(promises => { // bütün promise'lar çalıştığında içerideki blok çalışır
    console.log("Promises => ", promises);
});