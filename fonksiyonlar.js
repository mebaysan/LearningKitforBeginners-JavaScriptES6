var isim = prompt("Adın nedir ? ");
function selamVer(name) { // fonksiyon oluşturmak için function ile başlarız, fonksiyonun adını veririz ve gerekirse parametreleri gireriz.
    alert("Selam " + name);
}

selamVer(isim); // yazdığımız fonksiyonu kullandık

function topla(a,b) {
    var toplam = a+b;
    document.writeln(toplam);
    return a + b; // değer döndürdük
}
topla(3,5);
alert(topla(3,5) + 12);