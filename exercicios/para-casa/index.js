console.log("______________________________________")
console.log("☕BEM VINDO A CAFETERIA COFFE HOT☕")
console.log("______________________________________")
const Coffes = require("./cafeteria.json")
console.log("ESTE É O NOSSO CARDÁPIO DE CAFÉS: ")
Coffes.forEach((Coffe) => console.log(Coffe));

// Somente estava explorando outras formas de exibir o cardápio
function imprimircafés(Coffes) {
console.log(Coffes)
}
Coffes.forEach(imprimircafés)
 
// tentei criar duas funções, porém não deu muito certo, no console não exibiu corretamente
function vegano() {
for (let i=0; i<Coffes.length; i++) {
if (vegano==="true") {
    console.log("É VEGANO");
 }else {
    console.log("NÃO É VEGANO")
  }
 }
}

Coffes.forEach(vegano())

function vegetariano() {
    for (let i=0; i<Coffes.length; i++) {
    if (vegetariano==="true") {
        console.log("É VEGETARIANO");
     }else {
        console.log("NÃO É VEGETARIANO")
      }
     }
    }
    
    Coffes.forEach(vegetariano())
    
    