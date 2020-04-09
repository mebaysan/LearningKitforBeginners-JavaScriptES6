// Multiple Arguments
let ekle = function (a, b) {
    return a + b
}
let sonuc = ekle(2, 3)
console.log(sonuc)





// Default Arguments
let scoreAl = function (name = 'Anonymous', score = 0) { // name adlı değişkeni 'Anonymous' olarak belirledik ve score adlı değişkeni default olarak 10'değerine atadık
    console.log(`${name} adlı oyuncu: ${score}`)
}
scoreAl(undefined, 19) // name değişkenini tanımlamadan verebiliriz



