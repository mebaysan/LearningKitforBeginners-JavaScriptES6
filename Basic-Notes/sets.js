// Setler(Kümeler)

const mySet = new Set();

mySet.add(100);
mySet.add("Baysan");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({ a: 1, b: 2 });

/*
            Set Fonksiyonları

mySet.size() -> eleman sayısını verir.
mySet.delete("Baysan") -> içine verdiğimiz değeri siler eğer yoksa hata vermez
mySet.has(true) -> içine verdiğimiz değer sette var mı diye bakar.

*/