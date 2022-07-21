/* Objetos
Criar um objeto é simples, basta definirmos uma variável 
e iniciar a definição do seu valor com chaves {}. 
Mas e se precisarmos criar um novo objeto, com as mesmas
caraceterísticas do anterior?*/

//  const carro = {
//   marca: 'Marca',
//   preco: 0,
// }; 

// const honda = carro; 
// honda.marca = 'Honda'
// honda.preco = 4000; 

// const fiat = carro; 
// fiat.marca = 'Fiat'; 
// fiat.preco = 3000; 

// Erro

/* Constructor Functions 
Por isso existem as Construtctor Functions, ou seja,
funções construtoras que são responsáveis por construir 
novos objetos sempre que chamamos a mesma. */ 

function Carro1() { 
  this.marca = 'Marca';
 this.preco = 0; 
};

// C Maiúsculo 
// Padrão identificar que é uma Constructor Functions 

const honda = new Carro(); 
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000; 

/* new Keyword 
A palavra chave new é responsável por criar um novo objeto
baseado na função que passarmos a frente dela. */ 

// const subaru = new Carro(); 

// 1 Cria um novo objeto 
// subaru = {}; 

// 2 Define o protótipo 
// subaru.prototype = Carro.prototype; 

// 3 Aponta a variável this para o objeto
// this = subaru; 

// 4 Executa a funçao, substituindo this pelo objeto 
// subaru.marca = 'Marca'; 
// subaru.preco = 0; 

// 5 Retorna o novo objeto
// return subaru = { 
//   marca = 'Marca', 
//   preco = 0
// };

/* Parâmetros e Argumentos 
Oidenis oassar argumentos que serão utilizados no momento
da criação do objeto. */ 

function Carro2(marcaAtribuida, precoAtribuido) { 
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido; 
};

const chevrolet = new Carro('Chevrolet',4500);

/* this Keyword 
O this faz referência ao próprio objeto construído 
com a Constructor Function. */ 

function Carro3(marca, precoInicial) {
  const taxa = 1.2; 
  const precoFinal = precoInicial * taxa; 
  this.marca = marca; 
  this.preco = precoFinal;
};

const audi = new Carro3('Audi', 5000); //5000 * 1.2 = 6000

// Variáveis dentro do Constructor estão "protegidas".