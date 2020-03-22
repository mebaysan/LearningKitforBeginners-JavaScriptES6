for (i = 1; i <= 10; i++) {
    console.log(i);
}


var cities = ["Ankara", "İstanbul", "İzmir"] // diziyi gezdik
for (i = 0; i <= cities.length; i++) {
    console.log(cities[i]);
}

var a = 0;
while (a <= 10) {
    console.log("a'nın şuanki değeri = " + a);
    a++;
}

var b = 0;
do {
    console.log("b'nin şuanki değeri = " + b)
    b++
} while (b < 10) {

}


cities.forEach(element => { // cities dizesinin her bir elemanına element dedik
    console.log(element);
    
});