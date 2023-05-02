const cardapio = require("./cardapio.json")

console.log(`*-*-*-*-*-*- Bem vindxs ao Comida Boa -*-*-*-*-*-*\n`)
console.log(`Esse é o nosso cardápio:`)
cardapio.forEach(item => {
    console.log(`\n*** ${item.nome} ***\n 
    Descrição: ${item.descricao}\n 
    Valor: ${item.preco}\n
    ${item.tipo}`)
});
