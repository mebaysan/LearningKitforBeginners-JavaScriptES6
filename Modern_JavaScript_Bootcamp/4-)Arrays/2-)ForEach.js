const notlar = ['Not 1', 'Not 2', 'Not 3']

// dizi.forEach(yapilacak_fonk)


let eleman_yaz = (eleman) => {
    console.log(eleman)
}

// notlar.forEach(eleman_yaz(eleman));


notlar.forEach((item, index) => { // opsiyonel olarak index verilebilir. döndüğü item'ın index numarasını verir
    console.log(`${index}. eleman -> ${item}`)
})


notlar.forEach(function (item) { // 2. yöntem 
    eleman_yaz(item)
})