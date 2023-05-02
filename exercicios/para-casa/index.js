const quitutes = require("./cardapio.json")
console.log("______________________________")
console.log("TABULEIRO DA BAHIANA ALINE")
console.log("______________________________")
console.log("Cardápio: ")
quitutes.forEach((quitute) => {
    console.log("***********************************")
    console.log(`Nome: ${quitute.nome}`)
    console.log(`Descrição: ${quitute.descricao}`)
    console.log(`Preço: R$ ${quitute.preco.toFixed(2)}`)
    console.log(`Produto vegano/vegetariano? ${quitute.eh_vegano_ou_vegetariano ? 'Sim' : 'Não'}`)
    //console.log(quitute)

})



