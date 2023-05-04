const input = process.stdin;

const cardBebida = require('./bebidas.json');
const cardDoce = require('./doces.json');
const cardSalgado = require('./salgados.json');

class Produto {
    constructor(nome, descricao, preco, categoria) {
        this.nome = nome,
        this.descricao = descricao,
        this.preco = parseFloat(preco),
        this.categoria = categoria
    }

}

const listaSalgados = [], listaDoces = [], listaBebidas = []

for (let i = 0; i < cardBebida.length; i++) {
    listaBebidas.push(new Produto(cardBebida[i].nome, cardBebida[i].descricao, cardBebida[i].preco, cardBebida[i].categoria));
    listaBebidas[i].id = ("000" + (i+1).toString()).slice(-3);
}

for (let i = 0; i < cardDoce.length; i++) {
    listaDoces.push(new Produto(cardDoce[i].nome, cardDoce[i].descricao, cardDoce[i].preco, cardDoce[i].categoria));
    listaDoces[i].id = ("000" + (i+1).toString()).slice(-3);
}

for (let i = 0; i < cardSalgado.length; i++) {
    listaSalgados.push(new Produto(cardSalgado[i].nome, cardSalgado[i].descricao, cardSalgado[i].preco, cardSalgado[i].categoria));
    listaSalgados[i].id = ("000" + (i+1).toString()).slice(-3);
}

class Cafeteria {
    constructor(nome, listaBebida, listaDoce, listaSalgado) {
        this.nome = nome,
        this.bebidas = listaBebida,
        this.doces = listaDoce,
        this.salgados = listaSalgado,
        this.pedido = []
    }

    async pedirBebida(){
        console.log("")
        this.bebidas.forEach((bebida) => {
            console.log(`${bebida.nome}   --R$${(bebida.preco).toFixed(2)}\n${bebida.descricao}\nCódigo do item: ${bebida.categoria}${bebida.id}\n`);
        })
        console.log("Digite o ID da Bebida desejada (somente números) ou 0 para cancelar:");

        let opcaoBebida = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })

        if (!opcaoBebida) {
            console.log("\nOperação cancelada! O que deseja fazer?");
            return this.menuTransicao();
        }

        console.log(`\nDigite a quantidade de ${this.bebidas[opcaoBebida-1].nome} desejada ou 0 para cancelar:`);
        let bebidaQuant = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })
        
        if (bebidaQuant) {
            this.pedido.unshift(this.bebidas[opcaoBebida-1]);
            this.pedido[0].quant = bebidaQuant;
            console.log("\nAdicionado com sucesso! O que deseja agora?");
            
        } else {
            console.log("Operação cancelada! O que deseja agora?");
        }
             
        this.menuTransicao();      

    }

    async pedirDoce(){
        console.log("")
        this.doces.forEach((doce) => {
            console.log(`${doce.nome}   --R$${(doce.preco).toFixed(2)}\n${doce.descricao}\nCódigo do item: ${doce.categoria}${doce.id}\n`);
        })
        console.log("Digite o ID do Doce desejado (somente números) ou 0 para cancelar:");

        let opcaoDoce = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })

        if (!opcaoDoce) {
            console.log("\nOperação cancelada! O que deseja fazer?");
            return this.menuTransicao();
        }

        console.log(`\nDigite a quantidade de ${this.doces[opcaoDoce-1].nome} desejada ou 0 para cancelar:`);
        let doceQuant = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })
        
        if (doceQuant) {
            this.pedido.unshift(this.doces[opcaoDoce-1]);
            this.pedido[0].quant = doceQuant;
            console.log("\nAdicionado com sucesso! O que deseja agora?");
            
        } else {
            console.log("Operação cancelada! O que deseja agora?");
        }
             
        this.menuTransicao();      

    }

    async pedirSalgado(){
        console.log("")
        this.salgados.forEach((salgado) => {
            console.log(`${salgado.nome}   --R$${(salgado.preco).toFixed(2)}\n${salgado.descricao}\nCódigo do item: ${salgado.categoria}${salgado.id}\n`);
        })
        console.log("Digite o ID do Salgado desejado (somente números) ou 0 para cancelar:");

        let opcaoSalgado = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })

        if (!opcaoSalgado) {
            console.log("\nOperação cancelada! O que deseja fazer?");
            return this.menuTransicao();
        }

        console.log(`\nDigite a quantidade de ${this.salgados[opcaoSalgado-1].nome} desejada ou 0 para cancelar:`);
        let salgadoQuant = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })
        
        if (salgadoQuant) {
            this.pedido.unshift(this.salgados[opcaoSalgado-1]);
            this.pedido[0].quant = salgadoQuant;
            console.log("\nAdicionado com sucesso! O que deseja agora?");
            
        } else {
            console.log("Operação cancelada! O que deseja agora?");
        }
             
        this.menuTransicao();      

    }

    async menuTransicao() {
        
        console.log("\n1- Adicionar Bebida.");
        console.log("2- Adicionar Doce.\n3- Adicionar Salgado.\n4- Finalizar Pedido.\n5- Remover item do pedido.\n0- Cancelar pedido\n");
        let opcaoTransicao = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })
    
        switch (opcaoTransicao) {
            case 0:
                console.log("\nVocê tem certeza?[s/n]\nTodos os itens do pedidos serão descartados.");
                const confirmaSaida = await new Promise((resolve) => {
                    input.once("data", (resp) => {
                        resolve((resp).toString().trim());
                    })
                })
                if (confirmaSaida === "s" || confirmaSaida === "S" || confirmaSaida === "sim") {
                    input.pause();
                    return console.log(`\nPedido cancelado!\nNós da ${this.nome} te desejamos uma ótima semana!`);
                }
                this.menuTransicao();
                break;
            case 1:
                this.pedirBebida();
                break;
            case 2:
                this.pedirDoce();
                break;
            case 3:
                this.pedirSalgado();
                break;
            case 4:
                this.finalizaPedido();
                break;
            case 5:
                this.removeItem();
                break;
            default:
                console.log("Opção inválida! Digite uma das opções abaixo:");
                this.menuTransicao();
                break;
        }
    }

    async finalizaPedido(){
        
        if(this.pedido.length == 0) {
            console.log("\nNão há pedidos para realizar pagamento!\nO que deseja fazer agora?\n");
            return this.menuTransicao();
        }

        console.log("*Seu pedido:\n");

        for(let i = this.pedido.length - 1; i >= 0; i--){
            console.log(`${this.pedido[i].nome} (Preço unid: R$${this.pedido[i].preco.toFixed(2)})`);
            console.log(`x${this.pedido[i].quant}  -Valor: R$${(this.pedido[i].preco * this.pedido[i].quant).toFixed(2)}\n`);
        }
        let valorTotal = null;
        
        for (let valor of this.pedido) {
            valorTotal += (valor.preco * valor.quant) 
        }
        console.log("_____________________________")
        console.log(`Total: R$${valorTotal.toFixed(2)}`);
        console.log("\nSelecione a forma de pagamento:\n1- Débito.\n2- Crédito à vista.\n3- Vale Refeição.\n0-Retornar ao menu anterior.\n");

        const opcaoPagamento = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })
        
        switch (opcaoPagamento) {
            case 0:
                console.clear()
                console.log("Retornando ao menu anterior..");
                this.menuTransicao();
                break;
            case 1:
                console.clear()
                console.log("\nOpção selecionada: Débito.");
                this.pagamento();
                break;
            case 2:
                console.clear()
                console.log("\nOpção selecionada: Créd. à Vista.");
                this.pagamento();
                break;
            case 3:
                console.clear()
                console.log("\nOpção selecionada: Vale-Refeição.");
                this.pagamento();
                break;
            default:
                console.clear()
                console.log("Opção Inválida!\n");
                this.finalizaPedido();
                break;
        }
    }

    async pagamento(){
        input.pause();
        console.log("Carregando..")
        await new Promise((resolve) => setTimeout(resolve, 1300));
        console.log("\nSempre confira o valor no visor da máquina antes de inserir a senha!\nInsira ou aproxime o cartão na máquina para prosseguir.\n");
        let valorTotal = null;
        
        for (let valor of this.pedido) {
            valorTotal += (valor.preco * valor.quant) 
        }
        console.log(`Total: R$${valorTotal.toFixed(2)}`);
        console.log("Aguardando confirmação do pagamento.");
        await new Promise((resolve) => setTimeout(resolve, 4000));
        console.log("Processando..");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        let aprovador = Math.floor(Math.random() * 100);
        
        if (aprovador > 50) {
            console.log("Compra aprovada!");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log("Imprimindo comprovante..");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log("Acompanhe a senha impressa no Painel do balcão.");
            console.log(`\nNós da ${this.nome} agradecemos a sua Preferência!`);
        } else {
            console.log("Falha no pagamento. Retire o cartão e tente novamente.");
            await new Promise((resolve) => setTimeout(resolve, 4000));
            console.log("Processando..");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Compra aprovada!");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log("Imprimindo comprovante..");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log("Acompanhe a senha impressa no Painel do balcão.");
            console.log(`\nNós da ${this.nome} agradecemos a sua Preferência!`);
        }
    }

    async menuInicial(){
        input.resume();
        console.log(`Bem vinda(o) à ${this.nome}!\n`);
        console.log("Comece seu pedido com uma das escolhas abaixo:\n");
        console.log("1- Escolher Bebidas.");
        console.log("2- Escolher Doces.");
        console.log("3- Escolher Salgados.");
        console.log("\nOpção digitada: ");

        const opcaoMenu = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(parseInt(resp));
            })
        })

        switch (opcaoMenu) {
            case 1:
                this.pedirBebida();
                break;
            case 2:
                this.pedirDoce();
                break;
            case 3:
                this.pedirSalgado();
                break;
            default:
                console.log("\nOpção inválida.\n");
                this.menuInicial();
                break;
        }

    }

    async removeItem(){
        console.clear();
        console.log("*Seu pedido:\n");

        for(let i = this.pedido.length - 1; i >= 0; i--){
            console.log(`${this.pedido[i].nome} (Preço unid: R$${this.pedido[i].preco.toFixed(2)})`);
            console.log(`x${this.pedido[i].quant}  -Valor: R$${(this.pedido[i].preco * this.pedido[i].quant).toFixed(2)}`);
            console.log(this.pedido[i].categoria + this.pedido[i].id + "\n");
        }

        console.log("Digite o ID do item a ser removido (ex: S077, D042");

        const idProcurado = await new Promise((resolve) => {
            input.once("data", (resp) => {
                resolve(resp.toString().trim())});
        })
        const itemProcurado = this.pedido.find(item => (item.categoria + item.id) == idProcurado);
        if (!itemProcurado) {
            console.log("Item não encontrado!");
            return this.menuTransicao();
        }
        this.pedido.forEach((item, posicao)=>{
            if((item.categoria + item.id) == idProcurado){
                this.pedido.splice(posicao,1)
                console.log("Item removido com sucesso!");
                return this.menuTransicao();
            }
        })
    }
}

const cafee = new Cafeteria ("Cafelinos🐱", listaBebidas, listaDoces, listaSalgados);

cafee.menuInicial();