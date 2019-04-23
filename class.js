const header = document.getElementById("classPage").innerHTML="JavaScript ES6 Class Mantığı";

class Person{ // classlar Pascal Case (büyük harf) yazılır
    
    
    constructor(_ad,_soyad){ // bildiğimiz gibi bir class'ın constructor'ı biz onu 'new'lediğimizde zaten çalışır. burada bu class'tan nesne oluştururken ad ve soyad değişkenlerini vereceğim dedik.
        this.ad=_ad;
        this.soyad=_soyad;
    }
    kaydet(){ // bu class'a bir method yazdık
        console.log(`kaydet fonksiyonu çalıştı!\n  ${this.ad} kaydedildi`); // + işareti kullanarak değer birleştirmek yerine altgr+noktalıvirgül(;) ile -> `` bu iki işaret arasına yazıp başına $ işareti koyup kod yazabilirsin
    }

}
const kişi = new Person(); // bildiğimiz mantık ile bu class'tan bir nesne oluşturuyoruz. proplarını veriyoruz(constructor'dan gelen)
const kişi2 = new Person("Yusuf","Baysan"); // istersek constructor ile de set edebiliriz.
/*
GETTER SETTER YANLIŞ KULLANIM İN jS!!
kişi.ad = "Enes";
kişi.soyad = "Baysan";
Bu üstteki ikisi yanlış çünkü javascriptte 'proste skrypty' denilen bir olay vardır. istediğin zaman istediğin bir class'ı set edebilirsin.
Yani burada ;
kişi.firstName = "Enes"; -> desekte buna firstName diye bir prop ekleyip set etmiş olurduk.
*/
kişi.ad = "Enes";
kişi.soyad = "Baysan";
console.log("kişi nesnesinin adı = " + kişi.ad);
kişi.kaydet();
console.log("kişi2 nesnesinin adı = " + kişi2.ad);