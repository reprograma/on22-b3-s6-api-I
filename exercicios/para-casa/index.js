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
