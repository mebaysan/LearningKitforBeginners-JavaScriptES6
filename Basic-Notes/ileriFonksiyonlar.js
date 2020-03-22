var selamFonksiyonu = function selam(isim) {
    console.log("Selam " + isim);
}

const selamFonksiyonu2 = (isim) => console.log("Merhaba " + isim); // bir fonksiyondur. '()' ->(parantez içine parametre alır) fonksiyon olduğuna işaret eder, '=>' -> burdan sonrakilerin yapılacağını söyler

const selamFonksiyonu3 = (isim) =>{
    console.log("Merhaba " + isim);
}
// Yukarıda 3 tip fonksiyon tipi vardır. const/var/let olabilir

selamFonksiyonu2("Enes");

selamFonksiyonu("Baysan");

selamFonksiyonu3("Muhammed");