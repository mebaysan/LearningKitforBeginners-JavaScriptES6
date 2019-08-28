const merhaba = (isim) => {
    console.log(`Merhaba ${isim}`);
}
merhaba("Baysan");

const selamla = isim => { // fonksiyonumuz tek parametre alacaksa parantez kullanmak zorunda değiliz
    console.log(`Selam ${isim}`);
}
selamla("Enes");

const elSalla = (isim, soyisim) => console.log(`Sana el salladım ${isim} ${soyisim}`); // fonksiyonumuz tek bir işlem yapacaksa da süslü parantez kullanmak zorunda değiliz
elSalla("Enes", "Baysan");

const cube = x => x * x * x; // fonksiyonumuz tek bir işlem yapıp return ediyorsa bu şekilde de yazabiliriz
console.log(cube(3));