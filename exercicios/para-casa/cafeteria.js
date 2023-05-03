// Preferi criar uma modularidade, implementado a classe Cafeteria em um arquivo separado.
// Há certa complexidade nos métodos pois o array menu é composto de objetos com subarrays.
// Quis aproveitar o exercício para treinar o uso de métodos de arrays.

class Cafeteria{

    constructor(name) {
        this.name = name
        this.menu = require("./menu.json")
    }

    // Este método listMenu() declara um 'menuCompleto' cujo valor é o resultado da iteração do .reduce().
    // Cada iteração percorre os objetos do 'menu' e, com um 'for...in', cria um subarray composto pelas
    // chaves de cada objeto e insere ele no 'menuCompleto'.
    // Feito isso, o forEach() itera sobre o 'menuCompleto', verifica se o item é vegano, adequa o valor
    // da 'veganTemplate' e loga as informações no console.
    listMenu() {
        let menuCompleto = this.menu.reduce((acc, obj) => {
            for(let chave in obj) {
              let subarray = obj[chave]
              acc.push(...subarray)
            }
            return acc
          }, [])

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

    // O listItems é um método genérico que criei para auxiliar os métodos de cada subcardápio. É chamado por cada um deles.
    // Recebe como parâmetro um item. Tal como no listMenu(), o forEach() itera sobre o item, verifica se o item é vegano,
    // adequa o valor da 'veganTemplate' e loga as informações no console.
    listItems(item) {
        item.forEach(item => {
            let veganTemplate
            if (item.isVegan == true) {
                veganTemplate = "Vegano ✓"
            } else {
                veganTemplate = "Não é Vegano!"
            }
            console.log(`${item.name} - R$ ${item.price.toFixed(2)}\n${item.description} - ${veganTemplate}\n`)
        });
    }

    // Cada um dos quatro métodos abaixo chama o listItems() com seu respectivo array como argumento.
    // Os arrays de cada método são criados com um find() que está configurado para procurar nos objetos 
    // do 'this.menu' o primeiro array cujo nome satisfaça a condição dada, e retorná-lo.
    listCoffees() {
        const coffees = this.menu.find(objeto => Object.keys(objeto)[0] === 'coffees')['coffees']
        
        console.log("Aqui está nosso cardápio de cafés:\n")
        
        this.listItems(coffees)
    }
      
    listCakes() {
        const cakes = this.menu.find(item => Object.keys(item)[0] === 'cakes')['cakes']
        
        console.log("Aqui está nosso cardápio de tortas:\n")
        
        this.listItems(cakes)
    }

    listSandwiches() {
        const sandwiches = this.menu.find(item => Object.keys(item)[0] === 'sandwiches')['sandwiches']
        
        console.log("Aqui está nosso cardápio de cafés:\n")
        
        this.listItems(sandwiches)
    }
      
    listSavories() {
        const savories = this.menu.find(item => Object.keys(item)[0] === 'savories')['savories']
        
        console.log("Aqui está nosso cardápio de tortas:\n")
        
        this.listItems(savories)
    }
}

module.exports = Cafeteria