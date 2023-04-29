const cafeteria = require ("./cafeteria.json")
console.log(cafeteria)

function exibirMenu() {
    for (let i = 0; i < cafeteria.length; i++) {
      console.log(`Nome: ${cafeteria[i].nome}`);
      console.log(`Descrição: ${cafeteria[i].descricao}`);
      console.log(`Preço: R$ ${cafeteria[i].preco.toFixed(2)}`);
      console.log(`Vegano: ${cafeteria[i].vegano ? 'Sim' : 'Não'}`);
      console.log("------------------------");
    }
  }
  
  exibirMenu();