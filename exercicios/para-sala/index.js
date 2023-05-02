const listaLivros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel Garcia Marquez", ano: 1967 },
    { titulo: "Guerra e Paz", autor: "Lev Tolstói", ano: 1869 }
  ];
  
  console.log("Lista de Livros:");
  
  listaLivros.forEach((livro) => {
    console.log(`- ${livro.titulo}, de ${livro.autor}, publicado em ${livro.ano}`);
  });