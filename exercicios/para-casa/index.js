const cardapio = require("./cafeteria.json");

const cardapioCafeteria = cardapio

console.log("Code Cafe",'☕') 

console.log("Nosso Cardápido", '📜')

cardapioCafeteria.forEach((cardapio)=>{
    console.log('------')
    console.log(`Opções: ${cardapio.nome}`)

    console.log(`Descrição: ${cardapio.descricao}`);

    console.log(`Preço: ${cardapio.preco}`);
}
)
const itensVeg = cardapio.filter(item => item.Vegano === true || item.Vegetariano === true || item.Vegano === false);

itensVeg.forEach(item => {
  console.log('------')
    console.log(`Opção: ${item.nome}`);

  if (item.Vegano) {
    console.log("Este item é vegano");
  }

  if (item.Vegetariano && !item.Vegano) {
    console.log("Este item é vegetariano");
  }
  if (item.Vegano === false){
  console.log("Contém ingredientes de origem animal")
  }
});














