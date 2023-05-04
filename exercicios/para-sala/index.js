console.log("rodeeeeei")

// aqui eu fiz a importação da biblioteca.json
const livros = require("./biblioteca.json")

console.log(livros)
console.log(livros[0])


livros.forEach((livro) => {
    console.log(livro)
})


livros.forEach((livro) => {
    console.log("Título: " + livro.nome)
})