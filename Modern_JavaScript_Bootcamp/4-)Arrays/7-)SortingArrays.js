const notlar = [
  {
    baslik: "İlk notum",
    icerik: "İlk not iceriği",
  },
  {
    baslik: "İkinci notumm",
    icerik: "İkinci nottun iceriği",
  },
  {
    baslik: "Ucuncu notum",
    icerik: "Ucuncu nottun iceriği",
  },
];

let notlari_sirala = function (notlar) {
  notlar.sort((ilk_item, ikinci_item) => {
    // objeleri sort ederken 2 parametre alır. 1 -> ilk_dönen item, 2 -> ilk_dönenden sonraki item
    if (ilk_item.baslik.toLowerCase() < ikinci_item.baslik.toLowerCase()) {
      return -1;
    } else if (
      ikinci_item.baslik.toLowerCase() < ilk_item.baslik.toLowerCase()
    ) {
      return -1;
    } else {
      return 0;
    }
  });
};

notlari_sirala(notlar);

console.log(notlar);
