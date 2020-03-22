const arr = [100, 200, 300, 400];
const number1;
const number2;

// Destructing'den önce
number1 = arr[0]; // number1 100'e eşitlendi
number2 = arr[1]; // number2 200'e eşitlendi

// Destructing ile birlikte
[number1, number2] = arr; // number1 ve number2 sırasıyla arr dizisinin 0. ve 1. indexlerine eşitlendi.

// -------------------------Object Destructing----------------- \\

const kişiler = {
    ilkKişi: "Enes",
    ikinciKişi: "Yusuf",
    üçüncüKişi: "Yavuz"
};
const { ilkKişi: kişi1, ikinciKişi: kişi2, üçüncüKişi: kişi3 }; // obje içindeki 'ilkKişi'yi kişi1 değişkenine atadık.

// -------------------------Function Destructing----------------- \\

const getLangs = () => ["Python", "C#", "JavaScript"];

const [lang1, lang2, lang3] = getLangs(); // lang1 = Python, lang2 = C#

