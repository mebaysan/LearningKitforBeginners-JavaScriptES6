const langs = ['PHP', 'Python', 'JavaScript', 'Java'];
//console.log(langs[0],langs[1],langs[2],langs[3])
console.log(...langs); // yukardaki işlemin aynısıdır
const langs2 = ['C#', 'Dart', ...langs]; // geri kalan değerleri spread operatör ile aldık
console.log(langs2);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, ...numbers2] = numbers; // ilk 2 değer a ve b'ye. kalanlar bir array olarak numbers2 değişkeninine
console.log(numbers2);



const plusNumbers = (a, b, c) => console.log(a + b + c);
const sayilar = [100,200,300];
plusNumbers(...sayilar); // bu şekilde diziyide verebiliriz