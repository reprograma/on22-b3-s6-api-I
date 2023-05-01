const cafeteria = require("./cafeteria.json");

console.log("------------------------------------------------------");
console.log("✨ Bem-vinda(o) a nossa cafeteria: Café de Bonheur ✨");
console.log("------------------------------------------------------");
console.log("                          ");
console.log("     Nosso menu☕ : ");
console.log("                          ");
cafeteria.forEach((cafe) => {
  console.log("-----------------------------");
  console.log(`Item: ${cafe.nome}`);
  console.log(`Descrição: ${cafe.descricao}`);
  console.log(`Preço: ${cafe.preco}`);
  console.log(`Vegano: ${cafe.vegano}`);
  console.log(`Vegetariano: ${cafe.vegetariano}`);
});