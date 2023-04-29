console.log("Testando")
const livros = require("./biblioteca.json")
console.log(livros)
console.log(livros[0])
const livros1 = livros[1]
console.log(livros1.nome)

function listarLivros() { 
    livros.forEach(livro => { 
        console.log(`Titulo: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
    
    })
}
const livros = require("./biblioteca.json")

console.log("Biblioteca da Meia Noite")
console.log("Livros disponíveis: ")
livros.forEach((livro) => {
    console.log("----")
    console.log(`Título: ${livro.nome}`)
    console.log("Autor: " + livro.autor)
    console.log(livro)
})
