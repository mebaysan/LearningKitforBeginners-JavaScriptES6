/*
const cevap = confirm("Emin misiniz?"); // kullanıcıya evet-hayır alert'i verir

if (cevap) {
    console.log("Tebrikler sen eminsin");
} else {
    console.log("Malesef sen emin değilsin");
}
*/
/*
const cevap = prompt("2 + 2 = ?");
if(cevap!=4){
    console.log("Yanlış Cevap");
}else{
    console.log("Doğru Cevap");
}
*/

let value;
value = window; // bir window objesi oluşturduk
value = window.location // window'un location'unu aldık
value = window.location.host; // ip'sine erişebiliriz
value = window.location.hostname;
value = window.location.port; // portu verir
value = window.location.href; // o pencerenin url'ini verir
// window.location.reload(); // web sayfasını yeniler
value = window.outerHeight; // piksel uzunluğu
value = window.outerWidth; // piksel genişliği
value = window.innerHeight; // web console hariç yerlerin piksel uzunluğu
value = window.innerWidth; // web consolehariç yerlerin piksel genişliği
value = window.scrollX; // x ekseninde(yatay) pencere scroll çubuğunun yeri
value = window.scrollY; // y ekseninde(dikey) pencere scroll çubuğunun yeri
console.log(value);