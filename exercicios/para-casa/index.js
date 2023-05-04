const cardapio = require("./cafeteriaCatCoffe.json")
/**const produtosVegetarianosFiltrados = cardapio.filter(item => {
     if(item.vegetariano === true){
     return item }
})
const produtosVeganosFiltrados = cardapio.filter(item => {
    if(item.vegano === true){
    return item }
})*/
console.log("---- Bem Vindo a CatCoffe Cafeteria Gourmet ----")
console.log("----------------------------------------------")
console.log('---- Produtos Vegetarianos ----');
cardapio.forEach((item)=>{
    if(item.vegetariano === true){
      console.table(item)}})

console.log(`---- Produtos Veganos ----`);
cardapio.forEach((item)=>{
    if(item.vegano === true){
      console.table(item)}})
console.log('---- Todos os Produtos ----');
cardapio.forEach(item => console.table(item))
console.log('-----------------------------')
console.log("----Bom apetite----")
