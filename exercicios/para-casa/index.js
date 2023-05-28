const itens = require("./espressocode-itens.json")

function cardápio(item) {
    console.log(`<${item.nome}>`)
    console.log(`Descrição: ${item.descricao}`)
    console.log(`Indicação: ${item.indicacoesEspeciais}`)
    console.log (`"R$": ${item.precototal}`)
    console.log(`</>\n`)
}

console.log("</Espresso Code>")
console.log("\n - Cardápio -\n")

itens.forEach(item => cardápio(item))