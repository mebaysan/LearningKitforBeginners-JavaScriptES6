var şehir = "İstanbul";
şehir = "Üsküdar";
var şehir = "Ankara"; // çoğu programlama dilinde böyle birşey yoktur, bu kodun çıktısı Ankara olacaktır, 'var' ile tanımladığın bir değişkeni aynı isimle tekrar 'var' ile tanımlamak.
// var yerine let ile tanımlanmak bizi bundan kurtarır, let ile tanımladığın değişkeni bir daha let ile tanımlayamazsın

let semt = "Üsküdar";

// var tanımladığın değikene her yerden ulaşabilirken, let ile tanımlanan değişken eğer dışarda tanımlanmışsa heryerden ulaşılabilir yoksa döngüde,koşullu durum bloğunda vs tanımlanan let değişkenine her yerden ulaşamazsın!

const soyad = "Baysan"; // const -> asla değişmeyecek değişkenler için kullanılır
// soyad="Baysan"; -> hata verecektir. 

const cities = ["İstanbul","Ankara"]
cities.push("Üsküdar"); // -> hata vermez, dizi veya objede(referans tip) hata vermez.
// cities = ["Bursa","Kars"]; // -> hata verecektir, sebebi ise bunun bellekte işaret ettiği yere yeni bir dizi ekliyorum diyor hata verir.

