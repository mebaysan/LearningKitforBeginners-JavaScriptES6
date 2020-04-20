let book = {
    title:'1984', // property
    author:'George Orwell',
    pageCount:326
}


console.log(`${book.title} has ${book.pageCount} page`)

book.pageCount++ // +=1

console.log(`${book.title} changed`)

console.log(`${book.title} has ${book.pageCount} page`)
