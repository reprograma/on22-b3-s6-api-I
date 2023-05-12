<<<<<<< HEAD
console.log("rodei")
const livros = require("./biblioteca.json")
console.log(livros)
console.log(livros[0])
const livros1 = livros[0]
console.log(livros1.nome)
console.log('---------------------')
livros.forEach((livro)=> {
    console.log(livro)
    
=======
const livros = require("./biblioteca.json")

console.log("Biblioteca da Meia Noite")
console.log("Livros disponíveis: ")
livros.forEach((livro) => {
    console.log("----")
    console.log(`Título: ${livro.nome}`)
    console.log("Autor: " + livro.autor)
    console.log(livro)
>>>>>>> a09d486f0bdda0f998c87add4f675021f0e28bfa
})