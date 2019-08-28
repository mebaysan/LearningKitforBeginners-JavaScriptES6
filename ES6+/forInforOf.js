// For In

const Person = {
    name: "Enes",
    lastName: "Baysan",
    salary: 3000
}

for (let i in Person) { // Değişkenin indexi üzerinde gezinir
    console.log(`${i}:`); // propları almamıza yarar
    console.log(Person[i]); // propların değerlerini alabiliriz
}


// For Of
const numbers = [1, 2, 3, 4, 5, 6, 7];
for (const value of numbers) { // direk olarak değişkenin değerleri üzerinde gezinir. Objelerde KULLANILAMAZ
    console.log(value);
}
