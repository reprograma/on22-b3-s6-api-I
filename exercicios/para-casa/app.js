// Declarações de chamada da Cafeteria.
// Inicialização do readline e da interface.
const Cafeteria = require('./cafeteria.js')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Instancia uma Cafeteria
const cafeteria = new Cafeteria("Erika's Coffee Co.")

// Loga nosso menu interativo no terminal :3
console.log(`
☕☕ Seja bem-vinde à nossa cafeteria! ☕☕

🔔  Possuímos um cardápio interativo com várias opções!
⌨️   Digite uma delas e dê enter para escolhê-la:

1️⃣  Ver todos os itens do cardápio
2️⃣  Listar os cafés ☕️
3️⃣  Listar as tortas 🍰
4️⃣  Listar os sanduíches 🥪
5️⃣  Listar os salgados 🥐

Quando tiver escolhido seu pedido apenas digite "ok" \n...Logo um de nossos atendentes surgirá magicamente em sua mesa! 👀
`)


// Implementa um switch/case que abrange cada opção de listagem do cardápio.
// Permite também a saída da interface via uma das opções 'ok' || 'Ok' || 'OK'.
rl.on('line', (input) => {
    switch (input) {
        case '1':
            cafeteria.listMenu()
            break
        case '2':
            cafeteria.listCoffees()
            break
        case '3':
            cafeteria.listCakes()
            break
        case '4':
            cafeteria.listSandwiches()
            break
        case '5':
            cafeteria.listSavories()
            break
        case 'ok':
            console.log("🔜 Logo você vai poder fazer seu pedido! ❤️❤️")
            rl.close()
            break
        case 'Ok':
            console.log("🔜 Logo você vai poder fazer seu pedido! ❤️❤️")
            rl.close()
            break
        case 'OK':
            console.log("🔜 Logo você vai poder fazer seu pedido! ❤️❤️")
            rl.close()
            break
                
        default:
            console.log("Nosso cardápio não possui essa opção... :(")
            console.log("Siga nossos bots e digite uma opção válida! ;)")
        }
    }
)