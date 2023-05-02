const menu = require("./menu.json")

class Cafeteria{

    constructor(name) {
        this.name = name
        this.menu = menu
    }

    listarMenu() {

        let menuCompleto = []

        for (let objeto of menu) {
            for (let chave in objeto) {
                if (Array.isArray(objeto[chave])) {
                    for (let elemento of objeto[chave]) {
                        menuCompleto.push(elemento)
                    }
                }
            }
        }
        console.log("Aqui está nosso cardápio completo:\n")

        menuCompleto.forEach(item => {
            console.log(` ${item.name} - ${item.description} - Por: R$ ${item.price.toFixed(2)}`)
        })
    }

    listarCafes() {
        let cafes = this.menu[0].cafes

        console.log("Aqui está nosso cardápio de cafés:\n")

        cafes.forEach(cafe => {
            console.log(`${cafe.name} - R$ ${cafe.price.toFixed(2)}\n${cafe.description}\n`)
        })
    }
}

const cafeteria = new Cafeteria("Erika's Coffee Co.")

cafeteria.listarCafes()