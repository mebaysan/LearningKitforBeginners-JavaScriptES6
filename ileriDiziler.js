const dizi = [1,2,3,4];

const kareDizisi = [];

dizi.forEach(sayi =>{
    kareDizisi.push(sayi*sayi);
})

console.log(kareDizisi);

// map

const mapDizi = dizi.map(sayi=> sayi*3); // mapDizi dizisine dizi dizesindeki her bir elemanı 3 ile çarparak ekleyecek. !*! map kullanacaksan mecburen teksatır ile kullanmalısın.

console.log(mapDizi);

// filter

const filterDizi = dizi.filter(sayi=>sayi>2); // dizi içinde dolaş ve dizi içindeki her bir sayi 'sayi>2' ise 2'den büyükse hepsini filterDizidizesine ekle
console.log(filterDizi);

//reduce

const toplam = dizi.reduce((acc,sayi)=>{ // acc -> default 0'dır.
    return acc + sayi;
},10); // ,10 -> acc değerini 10'dan başlattık ve dizi içindeki elemanları 10 üzerine topladı
console.log(toplam);