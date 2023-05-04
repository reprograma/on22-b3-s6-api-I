console.log("bem vinde")

const livros = require("./livraria.json")

livros.forEach(item=> {
    console.log(`Título: ${item.titulo}`)
    console.log(`Autor: ${item.autor}`)})