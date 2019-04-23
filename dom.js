document.getElementById("bio").innerHTML = "Enes Baysan JS Dersleri" // bağlı olduğu dökümanda Id'si "bio" olan tag'i al ve bunu değiştir.
document.getElementById("head").innerHTML = "JavaScript ile Yazılan Başlık"

var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj"); // mesaj değişkenine mesaj idli elementi atadık

mesaj.innerHTML = intro1.innerHTML; // mesaj elementinin html görüntüsünü intro1 değişkeninden atadık

var tümListeler = document.getElementsByTagName("ul"); // bağlı olduğu dökümandaki bütün ul etiketleri

var şehirler = tümListeler[0]; // şehirler değişkenini tümListeler değişken dizesinin ilk elemanı haline getirdik

tümElemanlar = şehirler.getElementsByTagName("li"); // tümElemanlar değişkenini şehirler değişkenindeki "li" tag name sahip olanlara atadık

// for(i=0;i<tümElemanlar.length;i++){
//     alert(tümElemanlar[i].innerHTML); // alert sayesinde bütün li etiketleri ekrana bastırıyoruz.

// }


var classElemanları = document.getElementsByClassName("intro1"); // intro1 class'ını kullananları dize içine atar
// alert(classElemanları[1].innerHTML); // yukardan aşağı class'ı ilk kullanan 0, diğerleri 1,2,3 diye gider.

var querySelector = document.querySelectorAll("p.intro1"); // p elementlerinden intro1 class'ında olanlar
// alert(querySelector.length);

var nameElemanları = document.getElementsByName("musteriAdi");
// alert(nameElemanları[0].value); // bize onun değerini verir

var selectEvent = document.getElementById("selectEvent").addEventListener("click",rengiDegistir); // idsi selectEvent olan etiket üstünde 'click' eventi olursa rengiDegistir fonksiyonunu çalıştır dedik.

function rengiDegistir() {
    document.getElementById("p1").style.backgroundColor="red"; // p1 elementinin rengini red yap dedik
    nameElemanları[0].value = "Burası Click Olunca Değişti";
    nameElemanları[0].style.color="red";
    //HTML DOM EVENTS
}

var node = document.getElementById("agac");
alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node2  = document.createTextNode("Merhaba JavaScrip DOM ile oluştu bu başlık :)");
baslik.appendChild(node2); // baslik değişkenini node2'nin alt node'u yaptık.(tree mantığı)
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2); // div1 içine baslik değişkenini ekle ama p2'den önce
alert("p2 siliniyor");
div1.removeChild(p2); // div1 içindeki p2 elementini sil
alert("baslik ile p1 yer değiştiriyor!");
div1.replaceChild(baslik,p1);
