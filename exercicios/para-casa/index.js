const item = require("./cafeteria_castilho.json")

console.log("--Cafeteria_Castilho--")
console.log("--cardapio--")

item.forEach((id) => {

    console.log(`${id.nome}`)
    console.log(`Descricao:${id.descricao}`)
    console.log(`Preco:${id.preco}`)
    console.log(`tipo:${id.tipo}`)
    console.log("--------------------")
})
