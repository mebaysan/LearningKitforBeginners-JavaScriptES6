var person = {
    firstName : "Enes", // oop mantığı ile person nesnesinin proplarını tanımladık diyebiliriz.
    lastName : "Baysan",
    age : 18,
    email : "menesbaysan@gmail.com",
    references : ["Enes","Muhammed","Baysan"], // nesne içinde diziler ve nesneler tutabiliriz.
    selamVer : function(){ // bir nesne içerisinde fonksiyon(function) da tutabiliriz
        document.writeln("Selamver fonksiyonu çalıştı!");
    }
} //object notation -> nesne notastonu

person.firstName = "Yusuf";
person.email = "değişenmailadresi@gmail.com";
person.selamVer();
