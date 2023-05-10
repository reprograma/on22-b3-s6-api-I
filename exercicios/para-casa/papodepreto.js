const http = require('http');

const menuItems = [
  {
    name: 'Café simples',
    description: 'Café coado fresquinho',
    price: 3.5,
    vegan: true,
    vegetarian: true,
  },
  {
    name: 'Café com leite',
    description: 'Café coado com leite fresco',
    price: 4.5,
    vegan: false,
    vegetarian: true,
  },
  {
    name: 'Pão de queijo',
    description: 'Pão de queijo quentinho e crocante',
    price: 3.0,
    vegan: false,
    vegetarian: true,
  },
  {
    name: 'Sanduíche vegano',
    description: 'Pão integral com tofu, tomate, alface e maionese vegana',
    price: 7.0,
    vegan: true,
    vegetarian: true,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === '/menu' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Cardápio:\n\n');
    menuItems.forEach((item) => {
      res.write(`${item.name}: ${item.description} - R$ ${item.price}\n`);
      res.write(`${item.vegan ? 'Vegano' : ''} ${item.vegetarian ? 'Vegetariano' : ''}\n\n`);
    });
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Página não encontrada!');
    res.end();
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});