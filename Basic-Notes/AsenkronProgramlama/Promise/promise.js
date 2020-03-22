var products = [
    { id: 1, name: "Telefon1", price: 1000 },
    { id: 2, name: "Telefon2", price: 2000 },
    { id: 3, name: "Telefon3", price: 3000 }
] // objelerden bir liste oluşturduk
let added = true;
addProduct = (prd, callback) => { // prd bir parametre ve parametre olarak bir  callback fonksiyon alsın dedik
    return new Promise((resolve, reject) => { // resolve -> çözümlendiğinde reject -> ise bir hata döndürmek istediğimizde
        setTimeout(() => {
            products.push(prd);
            
            if (added) { // eğer added değeri true ise
                resolve(); // resolve fonksiyonu çalışsın
            } else { // değilse reject fonksiyonu çalışsın
                reject('hata : 500'); // reject içinde bir obje döndürdük
            }

        }, 2000);
    });
}

getProducts = (prd) => {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000);
}

addProduct({ id: 4, name: "Telefon4", price: "4000" }) // addProduct fonksiyonunu çalıştırdık
    .then(getProducts) // addProducts çalıştıktan sonra .then -> resolve yerine geçecek fonksiyon (getProducts olsun dedik) çalışsın
    .catch((err) => { // eğer hata olursa reject yerine geçecek fonksiyon
        console.log(err);
    });