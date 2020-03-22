var products = [
    { id: 1, name: "Telefon1", price: 1000 },
    { id: 2, name: "Telefon2", price: 2000 },
    { id: 3, name: "Telefon3", price: 3000 }
] // objelerden bir liste oluşturduk

addProduct = (prd, callback) => { // prd bir parametre ve parametre olarak bir  callback fonksiyon alsın dedik
    setTimeout(() => { // 2 saniye sonra çalışacak
        products.push(prd); // eklediği elemanı ekrana basar
        callback(); // parametre olarak aldığı fonksiyonu çalıştırır
    }, 2000);

}

getProducts = (prd) => {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000);
}

addProduct({ id: 4, name: "Telefon4", price: "4000" }, getProducts);