const produtos = require('./cafeteria.json');
// console.log(produtos);
console.log("Cafeteria Coffe e Cia")
console.log("Menu")
produtos.forEach((produto) => {
    console.log("----")
    console.log(`nome: ${produto.nome}`)
    console.log(`descricao: ${produto.descricao}`)
    console.log(`preco: ${produto.preco}`);
    console.log(`categoria: ${produto.categoria}`);
    // console.log(produto)
})


// const produtosVeganos = produtos.filter((produto) => {
//     return produto.categoria === "Vegano"
// })
// console.log(produtosVeganos);

// const produtosComLeite = produtos.filter((produto) => {
//     return produto.descricao.includes("leite de soja")
//     // return produto.descricao.includes("leite de soja")
// });
// console.log(produtosComLeite);
