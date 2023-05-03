const cafeteria = require("./FreakCafeteria.json")

console.log("Freak Cafeteria")
console.log("Cardápio: ")
cafeteria.forEach((merenda) => {
    console.log("------")
    console.log(`Opções: ${merenda.nome}`)
    console.log("-------")
    console.log(`Descrição: ${merenda.descricao}`)
    console.log("-------")
    console.log(`Preço: ${merenda.preco}`)
    console.log("-------")
    console.log(`Indicação alimnetar: ${merenda.indicacaoalimentar}`)
    
});