    //
    const cardapio = require("./cafeteriaDelicia.json")

    console.log ("Cafeteria Delícia")
    console.log("cardapio :    ")

    cardapio.forEach((cardapio) => {
 
    console.log("-------")

    console.log("nome: " + cardapio.nome)
    console.log ("descricao:  "+ cardapio.descricao)
    console.log("preco:  "+ cardapio.preco)
    console.log("vegano:   "+ cardapio.vegano)
    console.log("vegetariano:  "+ cardapio.vegetariano)
  })