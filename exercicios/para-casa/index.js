const cafeteria = require("./cafeteria.json")

console.log("----------------------------------------")
console.log('Bem vinda a cafeteria "Doce Sonho" :)')
console.log('Nosso cardaío disponivel: ')
for(let cardapio of cafeteria){
    console.log(`Nome: ${cardapio.nome}`)
    console.log(`Descrição: ${cardapio.descricao}`)
    console.log(`Preço: ${cardapio.preco}`)
    console.log(`Vegetariano: ${cardapio.vegetariano ? 'sim' : 'não'}`)
    console.log(`Vegano: ${cardapio.vegano ? 'sim' : 'não'}`)
    console.log("----------------------------------------")
    console.log(cardapio)
}

// profa, eu adorei a atividade!! de primeiro ela n tava rodando no npm start ms magicamente o codigo rodou ???? misterios de desenvolvedora back end kkkkkk 