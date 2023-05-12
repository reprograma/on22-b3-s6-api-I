const cardapio = require("./cafeteria.json")
console.log("Mocha Cafeteria")
console.log("***************")
console.log(cardapio)
console.log("*Todas as bebidas do nosso cardápio podem ser feitas com leite vegetal. Acrescimo de 1.50")
cardapio.forEach((itens)=>{
    console.log(itens)
})

