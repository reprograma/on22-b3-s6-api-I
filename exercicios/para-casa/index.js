
const cafeterias = require("./cafeteriaBratti.json")

//cafeteria melhorada:

        console.log("**************************************")
        console.log("Seja bem vindo à Cafeteria Bratti's")
        console.log("**************************************")
        console.log("--------------------------------------") 
        console.log("Nosso Cardápio")

cafeterias.forEach((cafeteria) =>{
     
            console.log("--------------------------------------")
            console.log(`Código do Produto: ${cafeteria.id}`)
            console.log(`Produto: ${cafeteria.nome}`)
            console.log(`Descrição: ${cafeteria.descricao}`)
            console.log(`Preço: ${cafeteria.preco}`)
            console.log(`Indicação Alimentar: ${cafeteria.indicacao}`)
            console.log("-------------------------------------")
})
        