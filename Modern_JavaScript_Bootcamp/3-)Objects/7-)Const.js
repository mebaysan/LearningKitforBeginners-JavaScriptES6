let dogruMu = true

dogruMu = false

console.log(dogruMu)

const isim = 'Baysan' // const objeler değişemez

const adam = {
    age: 20,
    isim: 'Enes'
}

try {
    isim = 'Değişen'
    console.log(isim)
} catch (error) {
    console.log("const objeler değişemez")
}


adam.isim = 'Baysan' // fakat const objelerin property'leri değişebilir
console.log(adam.isim)