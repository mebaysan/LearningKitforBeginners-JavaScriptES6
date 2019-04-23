// JAVASCRIPT KODLARINI ÇALIŞTIRABİLMEMİZ İÇİN MUTLAKA BİR HTML SAYFASINA BAĞLAMALIYIZ
document.writeln("Hello World!"); // document.writeln -> yazı yazdırır
document.writeln(12/4, 12+4, 12*4, 12%4, 12-4); // standard matematiksel işlemler
alert(3>4); // doğruysa -> true, yanlışsa -> false
/*
>   -> büyüktür
<   -> küçüktür
>=  -> büyük eşit
<=  -> küçük eşit
==  -> eşitse                           --> 3 ==  "3" -> true
=== -> eşitse(verinin tipine bakar)     --> 3 === "3" -> false
!=  -> eşit değilse
*/

var degisken = "Baysan"; // JS değişken tanımlamalarında tek tip vardır -> var
value = prompt("degisken nedir ? "); // prompt -> input almamıza yarar ve girilen değeri o değişkene(value) atar.
alert(value);

var sayi1 = prompt("Sayi 1 nedir ?"); var sayi2 = prompt("Sayi 2 nedir ?");
alert(sayi1 + sayi2); // burada bize girilen iki sayının toplamını vermez. bunun sebebi ise girilen değerleri string olarak almış oluruz.
var toplam = Number(sayi1) + Number(sayi2); // girilen sayilarin toplamını almamız için Number fonksiyonu sayesinde bunları integer (int) tipine dönüştürmemiz lazım.
alert(toplam); // oluşturduğumuz toplam değişkenini alert fonksiyonu sayesinde ekrana bastırdık.
