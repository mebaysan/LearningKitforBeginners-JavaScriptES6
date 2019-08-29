// ajax'a tercih edilebilecek bir api'dir.
let getTextFile = () => {
    fetch("example.txt")
        .then(response => response.text()) // response'umuz txt dosyası olduğu için text kullandık json olsa json kullanacaktık 
        // arrow func özelliği. Tek bir işlem yaptığımız için süslü parantezleri kullanmadık, tek bir şey return ettiğimiz için return kullanmadık
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
getTextFile();



// fetch ile get isteği
class Request {
    get(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/users");