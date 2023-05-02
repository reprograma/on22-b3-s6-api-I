console.log("Cafeteria da Morgana")
console.log("---------------------")

/*- Cada item do cardápio tem que ter um _nome_, _descrição_, _preço_ e _uma indicação se o item é vegano ou vegetariano_. 
- Todos os itens devem ser exibidos no console quando rodarmos a aplicação.
- Fiquem à vontade para escolherem o nome que quiser para a nossa cafeteria cliente*/
const menu = require("./cafeteria.json")
/*console.log(menu)
console.log(menu[0])
console.log(menu[1])
const menu1 = menu[0]
console.log(menu1.nome)*/
//indicação fazer com operadores logicos true/ false
menu.forEach((menu)=>{
    console.log(menu)
})
menu.forEach((menu)=>{
    console.log(`nome: ${menu.nome}`)
    console.log(`Descrição: ${menu.descrição}`)
    console.log(`Preço: ${menu.preço}`)
    console.log(`Indicação: ${menu.indicação}`)
})
console.log("---------------")
console.log("volte sempre!!")
console.log("_______________")