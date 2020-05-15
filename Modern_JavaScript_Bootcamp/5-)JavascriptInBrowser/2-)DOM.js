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

const eklenecek_elem = document.createElement("h4"); // yeni bir eleman oluşturduk
eklenecek_elem.textContent = "Bu element js ile eklendi"; // içeriğini set ettik
document.querySelector("body").appendChild(eklenecek_elem); // body elementi seçtik ve değişkene atadığımız elementi child'ı olarak ekledik
