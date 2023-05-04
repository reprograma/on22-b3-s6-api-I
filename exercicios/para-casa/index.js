const cardapio = require('./cardapio.json');

class Cafeteria {
    constructor(nome, listaProdutos) {
        this.nome = nome,
        this.produtos = listaProdutos
    }

    mostrarCardapio(){
        this.produtos.forEach((produto) => {
            console.log(`${produto.nome}\n\nPreço: R$${produto.preco.toFixed(2)}.`);
            console.log(`"${produto.descricao}"`);
            if(produto.Vegano) {
                console.log("Selo de Aprovação Vegana! :3");
            };
            console.log("_______________________________")
        })
    }
}

const caffe = new Cafeteria("Café, teria?", cardapio);

caffe.mostrarCardapio();