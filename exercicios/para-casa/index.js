
const readline = require('readline');


const cardapio = [
  {
    nome: "Sanduíche de tofu",
    descricao: "Delicioso sanduíche de tofu com legumes e molho especial",
    preco: 15.00,
    vegano: true
  },
  {
    nome: "Wrap de frango",
    descricao: "Wrap recheado de frango desfiado, alface e tomate",
    preco: 18.00,
    vegano: false
  },
  {
    nome: "Hambúrguer vegetariano",
    descricao: "Hambúrguer vegetariano com queijo, cebola e molho especial",
    preco: 20.00,
    vegano: false
  },
  {
    nome: "Salada de quinoa",
    descricao: "Salada saudável com quinoa, tomate, pepino e molho de limão",
    preco: 12.00,
    vegano: true
  }
];


function imprimirCardapio() {
  console.log("======= Cardápio =======");
  for (let i = 0; i < cardapio.length; i++) {
    console.log(`[${i+1}] ${cardapio[i].nome} - ${cardapio[i].descricao} - R$${cardapio[i].preco.toFixed(2)} - ${cardapio[i].vegano ? "Vegano" : "Vegetariano"}`);
  }
  console.log("========================");
}


imprimirCardapio();


