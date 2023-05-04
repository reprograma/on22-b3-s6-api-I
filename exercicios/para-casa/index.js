const itensDoCardapio = [
    {
        "nome": "bolinha de queijo",
        "descrição": "uma massa frita com queijo derretido dentro",
        "preço": "R$ 02,00 a unidade",
        "vegano": false,
        "vegetariano": false 
    },
    {
        "nome": "pastel",
        "descrição": "massa e recheio vegano",
        "preço": "R$ 08,00 a unidade",
        "vegano": true,
        "vegetariano": false
    },
    {
        "nome": "folhado de brócolis",
        "descrição": "massa folhada com recheio de brócolis",
        "preço": "R$ 12,00 a unidade",
        "vegano": false,
        "vegetariano": true
    },
    {
        "nome": "café com leite",
        "descrição": "café com leite quente",
        "preço": "R$ 03,00",
        "vegano": false,
        "vegetariano": true
    }
]

itensDoCardapio.forEach(item => {

    
    console.log(`é vegetariano? R: ${item.vegetariano == true ? `sim` : `não`}`)
    console.log(`é vegano? R: ${item.vegano == true ? `sim` : `não`}`)

    console.log(`-------`)
})
