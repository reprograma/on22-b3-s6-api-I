const menu = require("./menu.json")

class Cafeteria{

    constructor(name) {
        this.name = name
        this.menu = menu
    }

    listarMenu() {
        let menuCompleto = []
        
        for (let categoria in menu) {
            menuCompleto.push(...menu[categoria])
        }
      
        console.log("Aqui está nosso cardápio completo:\n")
      
        menuCompleto.forEach(item => {
            let veganTemplate
            if(item.isVegan == true) {
                veganTemplate = "- Vegano ✓"
            } else {
                veganTemplate = "- Não é Vegano!"
            }
            console.log(`${item.name} - Por: R$ ${item.price.toFixed(2)} ${veganTemplate}\n${item.description}\n`)
        })
    }

    listarCafes() {
        let cafes = this.menu.flat().filter(item => item.foodType === "coffee")
        let veganTemplate

        console.log("Aqui está nosso cardápio de cafés:\n")

        cafes.forEach(cafe => {
            if (cafe.isVegan == true) {
                veganTemplate = "- Vegano ✓"
            } else {
                veganTemplate = "- Não é Vegano!"
            }
            console.log(`${cafe.name} - R$ ${cafe.price.toFixed(2)} ${veganTemplate}\n${cafe.description}\n`)
        })
    }
}

const cafeteria = new Cafeteria("Erika's Coffee Co.")

cafeteria.listarCafes()