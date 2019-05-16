let myMap = new Map();

const key1 = "Baysan";
const key2 = { a: 10, b: 20 };
const key3 = () => 2;

// Map nesnesini Set ediyoruz.
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Değer");
myMap.set(key3, "Function Değer");

// Map nesnesini Get edelim.
console.log(myMap.get(key1));
