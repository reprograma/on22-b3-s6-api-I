const cafeteria = {
  nome: "Coffee break by Luana",

};

const cardapio = [
  {
    nome: "Café com leite",
    descricao: "Café com leite quente e cremoso",
    preco: 5.50,
    vegano: false,
    vegetariano: true
  },

  {
    nome: "Chocolate quente",
    descricao: "Chocolate em pó com leite de amendoas",
    preco: 7.30,
    vegano: true,
    vegetariano: true
  },
  {
    nome: "Pão de queijo",
    descricao: "Pão de queijo pequeno 10 unidades",
    preco: 3.00,
    vegano: false,
    vegetariano: true
  },
  {
    nome: "Sanduíche natural",
    descricao: "Sanduíche de pão integral com recheio de peito de peru e salada",
    preco: 7.50,
    vegano: false,
    vegetariano: false
  },
  {
    nome: "Suco de caja",
    descricao: "Suco natural de caja",
    preco: 4.50,
    vegano: true,
    vegetariano: true
  },
  {
    nome: "Bolo de brigadeiro",
    descricao: "Bolo de chocolate com cobertura de brigadeiro",
    preco: 6.50,
    vegano: false,
    vegetariano: true 
  },
  {
      nome: "Pão com queijo",
      descricao: "Pão de aipim com queijo minas na chapa",
      preco: 6.50,
      vegano: false,
      vegetariano: true

     }
];

console.log(`=== Cardápio da ${cafeteria.nome} ===`);

cardapio.forEach((item) => {


  console.log(`Item: ${item.nome}\nDescrição: ${item.descricao}\nPreço: R$ ${item.preco}\nVegano: ${item.vegano}\nVegetariano: ${item.vegetariano}\n`);
});