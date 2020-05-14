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

const filtrelenen_notlar = (dizi, query) => {
  return dizi.filter((item, index) => {
    // .filter tüm diziyi döner. parametre olarak objeyi ve index'i alır
    const baslik_filtre = item.baslik
      .toLowerCase()
      .includes(query.toLowerCase());
    const icerik_filtre = item.icerik
      .toLowerCase()
      .includes(query.toLowerCase());
    return baslik_filtre || icerik_filtre; // bu ifadelere uyan obje return olacak
  });
};

console.log(filtrelenen_notlar(notlar, "tumm"));
