const produtos = require("./cafeteriaReprograma.json")

console.log("Cafeteria Reprograma")
console.log("Produtos do menu da cafeteria: ")
produtos.forEach((produto) => {
    console.log("----")
    console.log(`Nome do produto: ${produto.nome}`)
    console.log(`Descrição do produto: ${produto.descrição}`)
    console.log(`Preço do produto: ${produto.preço}`)
    console.log(`Produto vegano ou vegetariano: ${produto.veganoOuVegetariano}`)
    console.log(produto)
})