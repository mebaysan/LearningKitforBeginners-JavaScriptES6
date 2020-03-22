var degisken = prompt("Değişken girin");
if (degisken == "a") { // bildiğimiz if bloğu
    alert("Değişken değeri " + degisken + "'dır.");
}else if(degisken=="b" || degisken=="c"){ // || -> veya && -> ve demektir
    alert("Değişken değeri " + degisken + "'dir.");
}else{
    alert("Değişken değeri " + degisken + " değildir.");
}

var sayi1 = prompt("Sayi1 girin"); var sayi2 = prompt("Sayi2 girin");
if (sayi1 == 1 && sayi2 == 2) {
    alert("Sayi1 = " + sayi1 + " ve Sayi2 = " + sayi2 + "'dir. Cevap doğru");
}else{
    alert("Cevap yanlış!");
}