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