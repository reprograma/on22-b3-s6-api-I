console.log("Rodando")
const livros = require("./biblioteca.json")
console.log(livros)
console.log(livros[0])
const livros1 = livros[0]
console.log(livros1.nome)

const listadelivros = livros
listadelivros.forEach(listadelivros => console.log(listadelivros))
