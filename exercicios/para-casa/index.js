const itensDoCardapio = require("./cafeteria.json")


console.log("💜 Cafeteria da Reprograma 💜")
console.log("           ----           ")
console.log("Vai um cafezinho pra não surtar?")
console.log("           ----           ")
console.log("Se delicie com o nosso cardápio:")

itensDoCardapio.forEach((item) => {
    console.log(item)
})

itensDoCardapio.forEach(item => {
        console.log(`${item.vegetariano == true ? "É vegetariano." : "Não é vegetariano."}`)
        console.log(`${item.vegano == true ? "Bota pra dentro, é vegano." : "Não é vegano."}`)
        console.log("><><")
})