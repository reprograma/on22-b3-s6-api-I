// Preferi criar uma certa modularidade, implementado a classe Cafeteria em um arquivo separado.
// Também gostaria de apontar que há certa complexidade nos métodos pois o array menu é composto de subarrays.
// Sei que a complexidade é desnecessária no caso, mas quis aproveitar para treinar o uso de métodos de arrays.

class Cafeteria{

    constructor(name) {
        this.name = name
        this.menu = require("./menu.json")
    }

    // Este método listarMenu() define um 'menuCompleto' que recebe como valor o resultado
    // da iteração do .reduce() sobre o os subarrays 'this.menu'.
    //
    listarMenu() {
        let menuCompleto = this.menu.reduce((acc, curItem) => {return acc.concat(curItem)}, [])

        console.log("Aqui está nosso cardápio completo:\n")
      
        menuCompleto.forEach(item => {
            
            let veganTemplate
            if(item.isVegan == true) {
                veganTemplate = " Vegano ✓"
            } else {
                veganTemplate = " Não é Vegano!"
            }
            console.log(`${item.name} - Por: R$ ${item.price.toFixed(2)}\n${item.description} - ${veganTemplate}\n`)
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

    listarTortas() {
        let cakes = this.menu.flat().filter(item => item.foodType === "cake")
        let veganTemplate
      
        console.log("Aqui está nosso cardápio de tortas:\n")
      
        cakes.forEach(cake => {
            
            if (cake.isVegan == true) {
                veganTemplate = "Vegana ✓"
            } else {
                veganTemplate = "Não é Vegana!"
            }
            console.log(`${cake.name} - R$ ${cake.price.toFixed(2)}\n${cake.description} - ${veganTemplate}\n`)
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

    listarSalgados() {
        let savories = this.menu.flat().filter(item => item.foodType === "savory")
        let veganTemplate
      
        console.log("Aqui está nosso cardápio de sanduíches:\n")
      
        savories.forEach(savory => {
            
            if (savory.isVegan == true) {
                veganTemplate = "Vegano ✓"
            } else {
                veganTemplate = "Não é Vegano!"
            }
            console.log(`${savory.name} - R$ ${savory.price.toFixed(2)}\n${savory.description} - ${veganTemplate}\n`)
        })
    }
}

module.exports = Cafeteria