new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
}).then((number) => { // yukarda resolve içine gelen parametreyi işledik
    console.log(number);
    return number * number; // yukardan gelen parametreyi işledik ve return ettik
}).then((number) => { // yukardan return edilen parametreyi yakaladık
    console.log(number);
    return number * 3;
}).then((number) => { // böylece promise yapısı ile zincir kurabiliriz.
    console.log(number);
    return number;
}).then((number) => {
    let zero = 0;
    number *= zero;
    console.log(`${number}`);
});
/*--------------------------------------------------------------------------------------------------  */


