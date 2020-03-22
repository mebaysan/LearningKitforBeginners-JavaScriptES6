class Matematik {
    cube = (x) => { return x * x * x }; // bu fonksiyonu kullanmak için mutlaka bir instance oluşturmamız lazım
    static plus = (x, y, z) => { return x + y + z }; // ancak bu fonksiyonu kullanmak için bir instance oluşturmamıza gerek yoktur.
}
const mat = new Matematik();
const sayi = mat.cube(3);
console.log(sayi);

const sayi2 = Matematik.plus(3, 4, 5); // bu şekilde STATİK metodları bir instance oluşturmadan direk class üzerinden kullanabiliriz.
// STATİK metodlara instance(obje) üzerinden erişemeyiz. SADECE class üzerinden erişebiliriz.
console.log(sayi2);



                        // INHERITANCE

class Topla extends Matematik { // extends sayesinde bu class'ı inherit ettik. bunun metodlarına erişebiliriz. 
    cikar = (x, y) => { return x - y };
}


const sayi3 = Topla.plus(10, 10, 10); // inherit ettiğimiz class'ın statik metodlarına class üzerinden ulaşabiliriz.
console.log(sayi3);



const topla = new Topla(); // instance üretitk
const sayi4 = topla.cikar(12, 4); // ürettiğimiz instance ile de kullanabiliriz.
console.log(sayi4);