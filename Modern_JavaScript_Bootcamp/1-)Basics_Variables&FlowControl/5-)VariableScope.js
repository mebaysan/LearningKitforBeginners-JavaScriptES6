// Lexical Scope (Static Scope)

let varOne = 'varOne'; // global scope - bütün kod bloklarında kullanılabilir

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo'; // local scope - tanımlandığı kod bloğu içerisinde kullanılabilir
    console.log(varTwo);
}

// console.log(varTwo); // hata verir, çünkü varTwo bir local scope