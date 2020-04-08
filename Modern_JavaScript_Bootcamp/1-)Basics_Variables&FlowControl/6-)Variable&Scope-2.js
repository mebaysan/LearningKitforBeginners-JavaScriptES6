let name = 'Baysan'; // global


if (true) {
    let name = 'Enes'; // local - bu blok içerisinde name -> Enes oldu
    if (true) {
        name = 'Muhammed'; // local -> bu blok içerisinde name -> Muhammed oldu
        console.log(name); // Muhammed yazar
    }
}

if (true) {
    console.log(name); // global değişkeni kullanıyoruz burada, Baysan yazar
}