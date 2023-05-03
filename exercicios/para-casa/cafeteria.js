const produtos = require("./cafeteriaProjeto.json")

console.log("Cafeteria Java e Coffee")
console.log("Produtos do nosso menu: ")
produtos.forEach((produto) => {
    console.log("----")
    console.log(`Nome do produto: ${produto.nome}`)
    console.log(`Descrição do produto: ${produto.descrição}`)
    console.log(`Preço do produto: ${produto.preço}`)
    console.log(`Produto vegano ou vegetariano: ${produto.veganoOuVegetariano}`)
    console.log(produto)
})

