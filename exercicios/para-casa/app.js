const cardapio = require("./cardapio.json")

console.log("Cafeteria - Café com Prosa" )
console.log("cardápio: ")

for (const item of cardapio){
  const msg = `
    --------------
    nome: ${item.name}
    descriçõo: ${item.description}
    preço: ${item.price}
    tipo: ${item.type}
  `
  console.log(msg)
  
}