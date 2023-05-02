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
                veganTemplate = "Vegano ✓"
            } else {
                veganTemplate = "Não é Vegano!"
            }
            console.log(`${cafe.name} - R$ ${cafe.price.toFixed(2)}\n${cafe.description} - ${veganTemplate}\n`)
        })
    }

    listarSanduiches() {
        let sandwiches = this.menu.flat().filter(item => item.foodType === "sandwich")
        let veganTemplate
      
        console.log("Aqui está nosso cardápio de sanduíches:\n")
      
        sandwiches.forEach(sandwich => {
            if (sandwich.isVegan == true) {
                veganTemplate = "Vegano ✓"
            } else {
                veganTemplate = "Não é Vegano!"
            }
            console.log(`${sandwich.name} - R$ ${sandwich.price.toFixed(2)}\n${sandwich.description} - ${veganTemplate}\n`)
        })
    }   
}

const cafeteria = new Cafeteria("Erika's Coffee Co.")

cafeteria.listarCafes()