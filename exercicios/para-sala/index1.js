console.log("Oii")
const livros = require("./biblioteca.json")
//console.log(livros[0])//mostrando o livro por index


//mostrando cada livro da biblioteca

livros.forEach((livro)=>{
    console.log(livro)
    console.log("-----")
})