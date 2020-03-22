// Otomatik promise döndürür
async function fn() {
    return "hello";
}
console.log(fn()); // async ile işaretlediğimiz fonksiyon otomatik olarak promise döndürür. Bunu görmek için console'a yazdırıyoruz.
fn()
    .then(res => console.log(res));



    