const books = require("./library.json")

function printBookDetails(book) {

    const tags = book.tags.join(', ')

    console.log(`Here are the details for "${book.title}":

    Author: ${book.author}
    Editor: ${book.editor}
    Price: ${book.price}
    Tags: ${tags}
    `
    )
}

books.forEach(book => {
    printBookDetails(book)
})