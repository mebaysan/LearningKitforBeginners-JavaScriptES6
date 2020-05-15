const h1 = document.querySelector("h1");
h1.textContent = "Not Kaydetme Uygulaması"; // ilgili elementin içeriğini (text) değiştirebiliriz
const h2 = document.querySelector("h2"); // en üstten h2 etiketini seçtik
h2.remove(); // seçilen h2'i kaldırır

const h3_ler = document.querySelectorAll("h3");

for (h3 of h3_ler) {
  // tüm h3'leri döndük
  console.log(h3.textContent); // elementin içeriğine (textine) eriştik
  if (h3.textContent.includes("Silinecek")) {
    // eğer içerik 'Silinecek' ifadesi içeriyorsa
    h3.remove(); // objeyi sildik
  }
}

const eklenecek_elem = document.createElement("h2"); // yeni bir eleman oluşturduk
eklenecek_elem.textContent = "Notlar *****"; // içeriğini set ettik
document.querySelector("body").appendChild(eklenecek_elem); // body elementi seçtik ve değişkene atadığımız elementi child'ı olarak ekledik

const notlar = [
  { baslik: "Not 1", icerik: "Not 1 içeriği", bitti_mi: false },
  { baslik: "Not 2", icerik: "Not 2 içeriği", bitti_mi: true },
  { baslik: "Not 3", icerik: "Not 3 içeriği", bitti_mi: false },
];

const bitenler = notlar.filter((not) => not.bitti_mi);
const bitmeyenler_render = () => {
  document.querySelector("h2").remove();
  const bitmeyenler = notlar.filter((not) => !not.bitti_mi);
  const ozet = document.createElement("h2");
  ozet.textContent = `Bekleyen ${bitmeyenler.length} adet notun var!`;
  document.querySelector("body").appendChild(ozet);
};
bitmeyenler_render();
document.getElementById("button").addEventListener("click", (e) => {
  // id'si button olan elementi yakala ve click eventi ekle
  //   console.log("çalıştı");
  //   console.log(e);
  //   e.target.textContent = "Butona Basıldı :)"; // aldığı ilk parametre (e) elementin kendisini referans alır (#button)
});
const notlari_temizle = () => {
  for (not of document.querySelectorAll(".not")) {
    not.remove();
  }
  document.querySelector("#notlar-div").innerHTML = ""; // innerHTML -> direk html'e müdahale eder. #notlar-div içerisindeki html'i değiştirir
  //   console.clear(); // console'u temizler
};
document.querySelector("#btn_sil").addEventListener("click", () => {
  // id'e göre yakalamanın farklı versiyonu, '.class_name' diyerek de class'a göre yakalayabiliriz
  //   console.log("Notlar siliniyor...");
  notlari_temizle();
});

document.querySelector("#search").addEventListener("input", (e) => {
  // input event -> her karakter girildiğinde tetiklenir
  //   console.log(e.target.value); // referans -> #search    target -> input box    value -> girilen her değer
  const filtrelenen_notlar = notlar.filter(
    (not) =>
      not.baslik.includes(e.target.value) || not.icerik.includes(e.target.value)
  );
  console.log(filtrelenen_notlar);
  notlari_temizle();
  for (not of filtrelenen_notlar) {
    let not_el = document.createElement("p");
    not_el.textContent = `Başlık: ${not.baslik} - İçerik: ${not.icerik} - Bitti mi: ${not.bitti_mi}`;
    document.querySelector("#notlar-div").appendChild(not_el);
  }
});

document.querySelector("#not-ekle-form").addEventListener("submit", (e) => {
  e.preventDefault(); // elementin asıl görevini yapmasını engeller
  //   console.log("Form submit edilemedi");
  //   console.log(e.target.elements.baslik.value);
  let baslik = e.target.elements.baslik.value; // referans (#not-ekle-form) gösterdiği elementin elementlerinden name'i baslik olanın değerini al
  let icerik = e.target.elements.icerik.value;
  notlar.push({ baslik: baslik, icerik: icerik, bitti_mi: false });
  e.target.elements.baslik.value = ""; // işlem tamamlanınca inputları temizliyoruz
  e.target.elements.icerik.value = "";
  bitmeyenler_render();
});

document.querySelector("#beni-kontrol-et").addEventListener("change", (e) => {
  // change eventi, ilgili element üzerinde bir değişiklik olduğunda çalışır
  console.log(e.target.checked); // referans (#beni-kontrol-et) gösterdiği element işaretli mi
}); 
