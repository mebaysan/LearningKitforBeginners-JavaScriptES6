let hesap = {
    isim: 'Enes',
    gelir: 0,
    gider: 0
}


let giderEkle = function (hesap, miktar = 15) {
    hesap.gider += miktar
}


let gelirEkle = function (hesap, miktar) {
    hesap.gelir += miktar
}


giderEkle(hesap)
gelirEkle(hesap, 35)
console.log(hesap)