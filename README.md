<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Semana 6 - Introdução à API: HTTP e NodeJS

</br>

Turma Online 22 - B3 | Back-end | Semana 6 | 2023 | [Professora Milena Gomes](https://www.linkedin.com/in/milena-gr/)

### Apresentação

![Screenshot from 2023-04-28 18-13-47](https://user-images.githubusercontent.com/27566113/235255404-c121b6bb-642e-4e17-9d16-077dda7d4263.png)


> Meu Linkedin está [aqui](https://www.linkedin.com/in/milena-gr/). Fiquem à vontade para mandar invite e me mandar msg :blush: 


### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Resumo
O que veremos na aula de hoje?
* HTTP
* NodeJS


## **Conteúdo**

### HTTP 
1. [Protocolo HTTP](#1-protocolo-http)
2. [Request/Response](#2-requestresponse)
    * [URL](#url)
    * [Methods](#methods)
    * [Headers](#headers)
    * [Status Code](#status-code)
    * [Body](#body)
3. [Recapitulando](#3-recapitulando)
4. [Explorando o HTTP pelo navegador](#4-explorando-o-http-pelo-navegador)


### NodeJS
1. [Apresentando o NodeJS](#1-apresentando-o-nodejs)
2. [Entendendo o que é o NPM](#2-entendendo-o-que-é-o-npm)
3. [Instalando o Node na máquina](#3-instalando-o-node-na-máquina)


## **HTTP**

### **1. Protocolo HTTP**

O HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação usado para obtenção de recursos e conteúdo entre cliente e servidor na internet. Esses recursos que podem ser obtidos podem ser uma imagem, uma paǵina da web, um audio, um texto, o qualquer outro tipo de conteúdo que você possa imaginar. 

O HTTP é a base de toda a internet, praticamente toda a nossa navegação é baseada em comunicações por meio desse protocolo. 

Em uma conexão HTTP nós temos alguns componentes:

- Cliente (client): é o serviço/applicação/agente que dispara a requisição
- Servidor (server): é o serviço destino dessa requisição, é quem a recebe e tem a função de processá-la  
- Requisição (request): solicitação de recurso/conteúdo
- Resposta (response):  resposta da solicitação de recurso/conteúdo

![104128631-ca559580-538e-11eb-8c01-ea90185db2eb](https://user-images.githubusercontent.com/27566113/235280863-84da73df-55c8-48b7-820e-9a179dff588d.png)


Por ser um protocolo, O HTTP estabelece algumas regras e padrões que falaremos a seguir:

</br></br>

### **2. Request/Response**

Analisando as duas primeiras letras da sigla, o H T de Hypertext, nós temos uma ideia como as coisas acontecem na pratica, "por debaixo do panos" como costumamos dizer. A comunicação HTTP se dá por meio de requisições e respostas que são trasmitidas via texto estruturado em um formato padronizado:

![HTTP_RequestMessageExample](https://user-images.githubusercontent.com/27566113/235250577-4b90abeb-942f-4205-a16f-52745049a3b5.png)



Nesse texto temos um exemplo de requisição. Na primeira linha temos método HTTP, path/rota do recurso que estamos solicitando e a versão do protocolo que estamos usando, nas linhas seguintes temos os headers, um por linha, e após a sequência de headers, pulando uma linha, temos o body da requisição.

![HTTP_ResponseMessageExample](https://user-images.githubusercontent.com/27566113/235250612-c3f9a1cb-d8d7-4830-b18d-4fb859de18cd.png)


Agora temos uma resposta. Na primeira linha da resposta nós temos a versão do protocolo e o status code da requisição, novamente nas linhas seguintes temos os headers, um por linha, e após a sequência de headers, pulando uma linha, temos o body da resposta, que é o conteúdo que foi solicitado.


Tudo isso parece bem complexo e até mesmo arcaíco, mas é como as coisas funcionam mais a baixo nível, porém, a boa notícia é que nós programadoras não precisamos fazer esse trabalho de forma manual. Todas as linguagens de programação fornecem bibliotecas que "montam" a requisição e as respostas no padrão correto, sem que nos preocupemos com isso. Nossa preocupação será em somente entender quais informações a requisição precisa e trabalhar com a biblioteca para cria-la e lidar com a resposta. 

</br>

#### **URL**

A URL é o endereço de um recurso na internet, usamos ela o tempo todo enquanto navegamos na internet, e ela é composta das seguintes partes:

![mdn-url-all](https://user-images.githubusercontent.com/27566113/235250525-6465abd8-6403-4836-a317-e7c40525c700.png)

Então lá atrás quando falamos do path/rota, estamos falando desse trecho da url.

</br>

#### **METHODS**

Uma requisição pode estar solicitando, criando, atualizando ou deletando um recurso em um servidor, e usamos os http methods para indicar isso.
Os methods existentes na definição do protocolo são:

* CONNECT
* DELETE
* GET
* HEAD
* OPTIONS
* PATCH
* POST
* PUT
* TRACE

Porém os mais utilizados e os que focaremos nessa aula são o GET, POST, PATCH, PUT, DELETE

**GET:** usado quando queremos APENAS OBTER algum recuso, é o método usado acessamos uma pagina na web

**POST:** usado quando queremos CRIAR um novo recurso, por exemplo, quando nos cadastramos em alguma loja, ao apertamos no botão que envia o fomulário de cadastro, por de baixo do panos o navegador faz um POST para um servidor criando o nosso cadastro. 

**PATCH:** usado quando queremos atualizar de forma parcial um recurso existente. Quando entramos num formulário especifico para atualizar somente o um dado do nosso cadastro na loja, o navegado usa o método patch para isso, enviando somente o que foi alterado.

**PUT:** usado quando queremos atualizar todos os dados de um recurso existente. Quando entramos no formulário completo com todos os dados do nosso cadastro aberto pra edição e atualizamos alguns dados, o navegado usa o método PUT enviando todos os dados novamente.

**DELETE:** usamos quando queremos deletar um recurso, por exemplo quando deletamos um foto do feed do Instagram.

</br>

#### **HEADERS**
Os headers são metadados da nossa requisição, eles permitem que cliente e servidor troquem informações complementares que não dizem respeito ao nosso recurso em si e sim à requisição/resposta. 
Um header é composto por seu nome case-insensitive (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha). 


Aqui temos alguns exemplos dos que mais usamos:

```Content-type: application/pdf``` : informa o formato do conteudo presente na requisição, no caso, um arquivo PDF

```Authorization: bearer ewurhuweirhiueh```: informa o token pata autenticação do client

</br>

#### **STATUS CODE**

O status code é uma informação que compõe o response da request e indica, de forma padronizada, o resultado da solicitação.

Essa informação é composta por uma centena acompanhado de um texto, normalmente escrito em caixa alta:

```
200 OK
```

A lista de status codes é dividida em 5 classes

```1xx - Informational responses```

```2xx - Successful responses```

```3xx - Redirection messages```

```4xx - Client error responses```

```5xx - Server error responses```

O mais comuns são:

**200 OK**: indica que a requisição foi processada com sucesso

**400 BAD REQUEST**: indica que há alguma erro na requisição enviada pelo cliente que impediu o processamento da mesma

**404 NOT FOUND**: indica que o recurso ou a rota solicitada não existe

**500 INTERNAL SERVER ERROR**: indica que houve uma falha no servidor ao processar a requisição

</br>

#### **BODY**
Bom, o Body é a parte mais importante da requisição, é nela que vai conter o nosso tão falado recurso, conteudo e etc.
O body suporta qualquer formato de conteúdo: pode ser um texto simples, texto estruturado, imagem, pdf, audio, html, código javascript. Uma infinidade de coisas.

Porém, um dos formatos mais comuns que usamos enquanto desenvolvoras backend é o JSON.

**O JSON (JavaScript Object Notation - Notação de Objetos JavaScript)** é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. 

Um objeto JSON é conjunto de propriedades que são definidas cada um par ```"chave": "valor",```, sendo cada par separados um do outro por virgula, todos dentro de um bloco delimitado por ```{ }```


```
{
  "nome": "Espresso",
  "ingredientes": "cafe",
  "preco": "12"
}
```

O JSON tambem pode ser uma lista de objetos, onde cada objeto é separados um do outro por virgula, todos dentro de um bloco delimitado por ```[ ]```


```
[
  {
    "nome": "Espresso",
    "ingredientes": "cafe",
    "preco": 10.0
  },
  {
    "nome": "Capuccino",
    "ingredientes": "espresso e leite vaporizado",
    "preco": 18.0
  }
]
```

### **3. Recapitulando**

Vamos olhar novamente para as nossas imagens de exemplo, agora que já conhecemos detalhes do HTTP.

![104128631-ca559580-538e-11eb-8c01-ea90185db2eb](https://user-images.githubusercontent.com/27566113/235280863-84da73df-55c8-48b7-820e-9a179dff588d.png)


![HTTP_RequestMessageExample](https://user-images.githubusercontent.com/27566113/235250577-4b90abeb-942f-4205-a16f-52745049a3b5.png)


![HTTP_ResponseMessageExample](https://user-images.githubusercontent.com/27566113/235250612-c3f9a1cb-d8d7-4830-b18d-4fb859de18cd.png)

</br>

> Você pode encontrar a documentação completa do HTTP [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)



### **4. Explorando o HTTP pelo navegador**

Existe uma ferramenta escondida nos navegadores, que permite que vejamos toda essa mágica do HTTP acontecendo durante a navegação na WEB. Essa ferramenta faz parte da rotina de nós desenvolvedoras e ela oferece várias funcionalidades que nos ajudam principalmente quando estavamos desenvolvendo a conexão do frontend com o backend.

O nome dessa ferramenta é Devtools e para acessá-la basta apenas apertar o F12 na pagina a ser inspecionada. 




## **NodeJS**

### **1. Apresentando o NodeJS**
Como sabemos o Javascript é uma linguagem que foi criada para a internet, para facilitar a criação de sites dinâmicos e interativo, rodando apenas navegador.  

Isso mudou com o desenvolvimento do [Node.js](https://nodejs.org/pt-br/docs), que é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicações web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços.


### **2. Entendendo o que é o NPM**
Em todo desenvolvimento de software nós usamos bibliotecas, que são conjunto de funções, que nos auxiliam na execução de tarefas do código, como por exemplo, converter uma imagem em PDF ou até mesmo fazer uma requisição HTTP. Essa bibliotecas são um conjunto de arquivo disponibilizados na internet que devem estar dentro do diretório do projeto para serem usadas. E para que não tenhamos que baixar e mover pro projeto de forma manual, e nem se preocupar em refazer esse processo quando surge uma nova versão da biblioteca, o NodeJS vem com o NPM, Node Package Manager, que, como o próprio nome diz, é um gerenciado de pacotes do Node, que permite que vc configure as suas dependências de forma simplificada.

> No desenvolvimento com NodeJS essas bibliotecas são chamadas de modules


### **3. Instalando o Node na máquina**
Para desenvolver e rodar aplicações em NodeJS precisamos baixar o serviço na nossa máquina. É o que faremos agora.

Para instalar o NodeJS acesse [esse link](https://nodejs.org/pt-br/download)

</br>

> Você pode encontrar a documentação completa do NodeJS [aqui](https://nodejs.org/pt-br/docs)


***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala)
* [Exercicio para casa](/exercicios/para-casa)


### Links Úteis
- [Saiba o que é JSON e como utilizar](https://www.alura.com.br/artigos/o-que-e-json)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [O que é HTTP?](https://tecnoblog.net/responde/o-que-e-http/)
- [O que é o NPM?](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
- [Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
- [O que é NodeJS](https://tecnoblog.net/responde/o-que-e-node-js-guia-para-iniciantes/)
- [Documentação HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
- [Documentação NodeJS](https://nodejs.org/pt-br/docs)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

