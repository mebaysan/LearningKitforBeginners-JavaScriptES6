// bir değeri sadece bir defa taşır

const mySet = new Set();
mySet.add(100);
mySet.add(100); // hata vermeyecek; fakat tekrar aynı değeri eklemeyecek
mySet.add("Enes");
console.log(mySet);

mySet.has(250); // 250 değeri var mı
mySet.delete(100); // 100 değerini siler 
mySet.size; // eleman sayısını verir

mySet.forEach((element) => {
    console.log(element);
});