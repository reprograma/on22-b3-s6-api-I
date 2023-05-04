const livros = require("./biblioteca.json")

console.log("Biblioteca da Meia Noite")
console.log("Livros disponíveis: ")
livros.forEach((livro) => {
    console.log("----")
    console.log(`Título: ${livro.nome}`)
    console.log("Autor: " + livro.autor)
    console.log(livro)
})