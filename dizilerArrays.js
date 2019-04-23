var numbers = [1,2,3,4,5,6,7,8,9,10]; // dizi tanımladık

var cities = ["İstanbul","Üsküdar","Fatih"];

var differentDizi = ["Değişik",false,12]; // javascriptte farklı olarak her tipi bir dizi içerisinde tutabiliriz.

function selamla() {
    alert("Merhaba!");
}
function uğurla() {
    alert("Güle Güle!");
}

var garipDize = [selamla,uğurla]; // js'de fonksiyonları bile dize içerisinde tutabilirsin.
alert(garipDize[0]); // dizeznin 0.(ilk) elemanını listeledik
alert(garipDize[0]()); // dizenin 0. elemanının fonksiyon özelliğini kullandık.

var demoDize = ["Deneme","Deneme1","Deneme2","Deneme3","Deneme4"];
alert(demoDize.pop()); // .pop -> dizenin son elemanını çıkar ve ekrana bas.
alert(demoDize.shift()); // .shift -> dizeyi sola kaydırır ve en soldaki elemanı(ilk) atar ekrana basar.
demoDize.push("DenemeYeni"); // .push -> dizeye eleman ekler ve dizede kaç eleman olduğunu verir.
demoDize.concat(differentDizi); // .concat -> içine parametre olarak verilen dizeyi, kullanıldığı dizeye ekler.
demoDize.sort() // alfabetik olarak sıralar
demoDize.length // bu bir fonksiyon değil özelliktir. dizenin kaç elemanlı olduğunu verir.

