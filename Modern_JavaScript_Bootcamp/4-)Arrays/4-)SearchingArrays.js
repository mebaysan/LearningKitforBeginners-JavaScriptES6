const kelimeler = ["elma", "armut", "araba"];

const notlar = [
  {
    baslik: "İlk notum",
    icerik: "İlk not iceriği",
  },
  {
    baslik: "İkinci notum",
    icerik: "İkinci not iceriği",
  },
  {
    baslik: "Ucuncu notum",
    icerik: "Ucuncu not iceriği",
  },
];

console.log(kelimeler.indexOf("armut")); // parametre olarak verilen eleman dizide kaçıncı indexte onu verir. eğer yoksa -1 döner

let aranan_index = notlar.findIndex((note, index) => {
  // diziyi tek tek döner
  return note.baslik === "Ucuncu notum"; // eğer aradığımız koşul varsa indexi döner yoksa -1 döner
});

console.log(aranan_index);

const index_bul = (dizi, prop, aranan) => {
  let sira = 0;
  for (index in dizi) {
    // console.log(dizi[index][prop], aranan);
    // console.log(dizi[index][prop]=== aranan);
    if (dizi[index][prop] === aranan) {
      return index;
    }
  }
};

const index_bul2 = (dizi, prop, aranan) => {
  return dizi.findIndex((item, index) => item[prop] === aranan); // findIndex -> tüm diziyi döner
};

console.log("Bulunan değer:", index_bul(notlar, "baslik", "İkinci notum"));
console.log("--------------");
console.log("Fınd index", index_bul2(notlar, "baslik", "İkinci notum"));
