// Map'ler  ------> Key - Value
const myMap = new Map();



const key1 = "Enes";
const key2 = [1, 2, 3];
const key3 = { a: "A", b: "B" };
const key4 = () => 2;


// Set
myMap.set(key1, "String Deger");
myMap.set(key2, 'Liste Deger');
myMap.set(key3, "Obje Deger");
myMap.set(key4, "Function Deger");



// Get
console.log(myMap.get(key2));


// Props
console.log(myMap.size);




const cities = new Map();
cities.set('Ankara', 12); // soldaki key sağdaki value
cities.set('İstanbul', 6);
cities.set('Üsküdar', 2);

cities.forEach((value, key) => console.log(`${key} = ${value}`));

// Map Keys
for (let key of cities.keys()) {
    console.log(key);
}


// Map Values
for (let value of cities.values()) {
    console.log(value);
}



// Map'den array oluşturma
const array = Array.from(cities);
console.log(array);