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

/* Exemplo Real 
Quando mudamos a propriedade seletor, o objeto Dom irá 
passar a selecionar o novo seletor em seus métodos. */ 

const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.selector); 
  },
  ativo() {
    this.element().classList.add('ativo');
  },
};

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul'; 
Dom.ativo(); // aiciona ativo ao ul

/* Constructor Function Real 
Um objeto criado com uma Constructor, não irá influenciar 
em outro objeto criado com a mesma Constructor. */ 

function Dom() {
  this.seletor ='li'; 
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
};

const lista = new Dom();
lista.seletor = 'ul';
lista.ativo(); 

const lastLi = new Dom();
lastLi.seletor ='li:last-child';
lastLi.ativo();

// Exercício 

// Transforme o objeto abaixo em uma Constructor Function 

const pessoa = { 
  nome: 'Nome Pessoa', 
  idade: 0,
  andar(){
    console.log(this.nome + 'andou');
  }
};

function Pessoa(nome,idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + 'Andou');
  }
};

// Crie 3 pessoas, João - 20 anos, 
// Maria - 25 anos, Bruno - 15 anos 

const joao = new Pessoa('João', 20); 
const maria = new Pessoa('Maria', 25); 
const bruno = new Pessoa('Bruno', 15); 

// Crie uma COnstructor Function (Dom) para manipulação 
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos: 
// elements, retorna NodeList com os elementos selecionados 
// addClass(classe), adiciona a classe a todos os elementos 
// removeClass(classe), remova a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor); 
  this.elements = elementList; 
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.removeClass(classe);
    });
  };
};

const listaItens = new Dom('li');
const ul = new Dom('ul'); 

// listaItens.addClass('ativar'); 
// ul.addClass('ativar-ul') ; 
