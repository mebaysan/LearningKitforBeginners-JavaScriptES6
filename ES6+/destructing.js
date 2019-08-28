let number1, number2;

arr = [100, 200, 300, 400];

[number1, number2] = arr; // number1 otomatik olarak number[0]'a eşitlenir. number2 otomatik olarak arr[1]'e eşitlenir


let [deger1, deger2] = arr; // bu şekilde de tek satırda değişken oluşturup destructing ile atama yapabiliriz


// Obje Destructing

const Person = {
    name: "Enes",
    lastName: "Baysan",
    age: 18
};

let { name, lastName, age } = Person; // bu işlemi mesela post isteği ile bir istek geldiği zaman kullanıp direk olarak veritabanına kayıt edebiliriz. obje içerisindeki proplar otomatik olarak aynı isimdeki değişkenlere atanabilir. key value gibi düşünebiliriz

let { name: ad, lastName: soyad, age: yas } = Person; // gelen name değişkenini ad olarak kullanmak istiyoruz dedik


// Function Destructing

let getLangs = () => ['PHP', 'Python', 'JavaScript'];
let [lang1, lang2, lang3] = getLangs(); // sırasıyla; lang1'e PHP, lang2'ye Python gelmiş oldu

const Kişi = {
    name: "Enes",
    lastName: "Baysan",
    age: 18,
    showInfos: () => console.log(`Bilgiler : ${name} ${lastName} ${age}`)
}
let { name: isim, lastName: soyadi, age: yasi, showInfos: bilgileri } = Kişi;
bilgileri();