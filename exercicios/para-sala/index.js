console.log("Rodeeeeei, uhuul!!!!")

const livros = require("./biblioteca.json")
console.log(livros)
console.log(livros[0])

const livro1 = livros[0]
console.log(livro1.nome)

livros.forEach((livro) => {
    console.log(livro)
})