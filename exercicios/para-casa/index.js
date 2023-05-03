const cafeteria = require("./cafeteria.json")


console.log("Seja bem-vindo(a) á:")
console.log("---------------------------")
console.log("☕ Cafeteria Perseu ☕")
console.log("---------------------------")
console.log("Opções disponíveis:")

cafeteria.forEach((cardapio) => {
    const veganoOuVegetarino = cardapio.produtoVeganoOuVegetariano 
    console.log("-----------------")
    console.log(`Produto: ${cardapio.nome}`)
    console.log(`${cardapio.descricao}`)
    console.log(`Preço: ${cardapio.preco} reais`)
    
    if (veganoOuVegetarino == true)  {
        return console.log("Vegano ou Vegetariano")
    } else {
        return console.log("Não vegano. Não vegetariano")
    }
})

