const cafeteria = require("./cafeteria.json")

console.log("Cardápio da Cafeteria: ")
console.log(" ")
cafeteria.forEach((produto) => {
    console.log("- " + produto.nome)
    console.log("  " + produto.descricao)
    console.log("  " + produto.preco + " reais")
    console.log("  " + produto.especificacao)
    console.log(" ")

})