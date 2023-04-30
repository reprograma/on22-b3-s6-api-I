<<<<<<< HEAD
console.log("Rodando")
const livros = require("./biblioteca.json")
console.log(livros)
console.log(livros[0])
const livros1 = livros[0]
console.log(livros1.nome)

const listadelivros = livros
listadelivros.forEach(listadelivros => console.log(listadelivros))
=======
const livros = require("./biblioteca.json")

console.log("Biblioteca da Meia Noite")
console.log("Livros disponíveis: ")
livros.forEach((livro) => {
    console.log("----")
    console.log(`Título: ${livro.nome}`)
    console.log("Autor: " + livro.autor)
    console.log(livro)
})
>>>>>>> 233e4c395df0925748f213fe7062cf10751779f8
