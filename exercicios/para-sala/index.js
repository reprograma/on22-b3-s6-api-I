console.log("rodei")
const livros = require("./biblioteca.json")
console.log(livros)
console.log(livros[0])
const livros1 = livros[0]
console.log(livros1.nome)
console.log('---------------------')
livros.forEach((livro)=> {
    console.log(livro)
    
})