let notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.length)

console.log(notes[0])


let atilan = notes.pop() // son elemanı listeden atar, bize eleman döner

notes.push('Note 4') // listenin sonuna eleman ekle


console.log(notes)
console.log(`listeden atılan eleman = ${atilan}`)

let cikan_ilk_elem = notes.shift() // ilk elemanı listeden atar

console.log('çıkan ilk eleman = ' + cikan_ilk_elem)

console.log(notes)

notes.unshift('İlk sıraya gelen eleman') // ilk sıraya eleman ekler

console.log(notes)


console.log(notes.splice(0, 2)) // 0. index ile 2. index arasındaki elemanları alır
console.log(notes.splice()) // hiç bir elemanı almaz
console.log(notes.splice(1)) // 1. elemandan sonrakileri alır
notes.splice(1, 0, 'Yeni Eklenen')
console.log(notes)
notes[0] = 'Eklenen'

console.log(notes)