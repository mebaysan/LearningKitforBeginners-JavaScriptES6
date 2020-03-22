const ileriBaslik = document.getElementById("ileriBaslik").innerHTML = "JS-ES6 İleri Nesneler Dersi";

const nesne = {
    ekle : function ekle(ürün) {
        console.log("Added " + this); // burada this fonksiyonun ta kendisidir
    }
}

nesne.ekle();


