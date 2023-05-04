
const { stdin, stdout } = require('process')
const rl = require('readline')
this.prompt = rl.createInterface({
    input: stdin,
    output: stdout
})

const cafeteria = require("./cafeteriaBratti.json")

//console.log("Bem vinda à Cafeteria Bratti's!!!")

/**cafeteria.forEach((cafeteria)=> {
    console.log(cafeteria)
}) */

//cafeteria melhorada:


        console.log("**************************************")
        console.log("Seja bem vindo à Cafeteria Bratti's");
        console.log("**************************************")
        console.log("--------------------------------------") 
        
    
    
console.log("Nosso Cardápio")

cafeteria.forEach((cafeteria) =>{
     
            console.log("--------------------------------------")
            console.log(`Código do Produto: ${cafeteria.id}`)
            console.log(`Produto: ${cafeteria.nome}`)
            console.log(`Descrição: ${cafeteria.descricao}`)
            console.log(`Preço: ${cafeteria.preco}`)
            console.log(`Indicação Alimentar: ${cafeteria.indicacao}`)
            console.log("-------------------------------------")
})
        

        /**       
      

        /**console.log("1 - Chocolate Quente"); 
        console.log("2 - Pão na Chapa"); 
        console.log("3 - Café Expresso"); 
        console.log("4 - Torta de Maçã");
        console.log("5 - Suco Natural");
        console.log("6 - Tapioca Recheada");
        console.log("7 - Surubinha"); */
        
    



        
/**this.prompt.question("Digite a opção desejada: \n", (resposta)=>{
    const exibeCardapio = parseInt(resposta);

    switch (exibeCardapio) {
        case 1:
            console.log(cafeteria.indexOf(0))
            break;
        case 2:
            console.log(cafeteria.indexOf(1))
             break;
        case 3:
            console.log(cafeteria.indexOf(2))
            break;
        case 4:
            console.log(cafeteria.indexOf(3))
            break;
        case 5:
            console.log(cafeteria.indexOf(5))
            break;
        case 6:
            console.log(cafeteria.indexOf(5))
            break;
        case 7:
            console.log(cafeteria.indexOf(6))
            break;
            
        default:
            console.log("Opção não encontrada!")
            this.prompt.close()
            break;
    }
}) */






       
        
        



        


