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

for (index in notlar) { // pythondaki gibi bir yapısı var. döndüğü elemanın index nosunu alır
  console.log(index);
}

for (object of notlar) { // elemanı obje olarak alır
  console.log(object);
}
