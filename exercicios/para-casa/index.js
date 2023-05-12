<<<<<<< HEAD
const cardapio = require("./cafeteria.json")
console.log("Mocha Cafeteria")
console.log("***************")
console.log(cardapio)
console.log("*Todas as bebidas do nosso cardápio podem ser feitas com leite vegetal. Acrescimo de 1.50")
cardapio.forEach((itens)=>{
    console.log(itens)
})

=======
const itens = require("./cafeteria-itens.json")
const indicacoesEspeciais = require("./indicacoes-especiais.json")


function exibeItem(item) {
    console.log(`<${item.nome}>`)
    console.log(`Descrição: ${item.descricao}`)
    exibeIndicacoesEspeciais(item.indicacoesEspeciais)
    console.log(`Preço: R$${item["preco total"]}`)
    console.log(`</>\n`)

}

function exibeIndicacoesEspeciais(indicacoesDoProduto) {
    let descricaoIndicacoesEspeciais = indicacoesDoProduto.map((indicacaoDoProduto) => {
        return indicacoesEspeciais
            .find(indicacaoEspecial => indicacaoEspecial.nome === indicacao)
            .descricao
    })
    
    console.log(descricaoIndicacoesEspeciais.join(','))
}

console.log("</Coffee and Code>")
console.log("\n - Cardápio -\n")

itens.forEach(item => exibeItem(item))

// itens.forEach((item) => {
//     exibeItem(item)
// })
>>>>>>> a09d486f0bdda0f998c87add4f675021f0e28bfa
