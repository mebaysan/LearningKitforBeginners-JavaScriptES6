let getData = (data) => { // Promise Objesi döndüren fonksiyon
    return new Promise((resolve, reject) => { // olumlu dönüşler(veriler) resolve, olumsuz dönüşler(hatalar) reject ile döner.
        setTimeout(() => {
            return typeof data === "string" ? resolve(data) : reject(new Error("Lütfen bir string değer girin!")); // istersek bu şekilde bir error da döndürebiliriz
        }, 1000);
    });
}

getData("Merhaba").then((response) => { // eğer Promise yapısı resolve(olumlu) dönerse bunu then bloğu ile yakalayabiliriz
    //console.log(response); // ve ordan dönen resolve değeri response'a eşitlenir
});


getData(12).catch((err) => { // hataları böyle yakalayabiliriz. reject içindeki değer err'e atanacak
    //console.log(err);
});

getData("Enes")
    .then((response) => { return response; }) // bu da bir alttaki promise'e return edecek ve alttaki promise burdan gelen değeri resolve olarak alabilecek
    .then((response2) => { console.log(response2 + " Naber") })
    .catch((err) => { console.error(err); }); // promise chain yaptık. Ard arda bir sürü then kullanabiliriz fakat sadece bir adet catch yapabiliriz.
