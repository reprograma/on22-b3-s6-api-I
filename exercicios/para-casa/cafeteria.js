const cardapio = require("./cardapio.json")
const chalk = require('chalk')

console.log(chalk.bgMagenta('╭───────────────────────────────╮'));
console.log(chalk.bgMagenta('│                               │'));
console.log(chalk.bgMagenta('│      Café Premier Amour <3    │'));
console.log(chalk.bgMagenta('│                               │'));
console.log(chalk.bgMagenta('╰───────────────────────────────╯'));
console.log(chalk.bgRedBright("Cardápio:"))
cardapio.forEach((itens) => {
    console.log(chalk.red.bold("===================="))
    console.log(chalk.magenta.bold(`Nome: ${itens.nome}`))
    console.log(chalk.blueBright.bold(`Descrição: ${itens.descrição}`))
    console.log(chalk.green.bold(`Preço: ${itens.preço}`))
    console.log(chalk.cyan.bold(`Item é vegano? ${itens.vegano == true ? 'Sim' : 'Não'}`))
})

