/* Prototype 
É um objeto adicionado a uma função, 
quando a mesma é criada. */

function Pessoa(nome, idade) {
  this.nome = nome; 
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
  this.andar = function() { // Verifica Primeiro, preferência
    return 'Andou pelo objeto'
  }
};

const midna = new Pessoa('Midna', 27);

console.log(Pessoa.prototype); // retorna o objeto 
console.log(midna.prototype); // undefined 

/* funcao.prototype
É possível adicionar novas propriedades e métodos 
ao objeto prototype. */ 

var obj = {
  nome: 'Stephany',
  idade: 27,
};

Pessoa.prototype.andar = function() {
  return this.nome + ' andou'; 
}; 

Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
};
console.log(Pessoa.prototype); // retorna o objeto

/* Acesso ao Protótipo 
O objeto criado utilizando construtor, possui acesso aos
métodos e propriedades do protótipo dete construtor. 
Lembrando, prototype é uma propriedade e funções apenas. */

const eloise = new Pessoa('Eloise', 27); 

eloise.nome; 
eloise.idade
eloise.andar();
eloise.nadar();

/* proto 
O novo objeto acessa aos métodos e propriedades do protótipo
através da propriedade _proto_. É papel da engine fazer essa
busca, não devemos falar com _proto_ diretamente. */ 

// Acessam o mesmo método 
// mas __proto__ não terá 
// acesso ao this.nome 
eloise.__proto__.andar();

/* Herença de Protótipo 
O objeto possui acesso aos métodos e propriedades do protótipo 
do construtor responsável por criar esse objeto. O objeto abaixo
possui acesso a métodos que nuncam definimos, mas são herdados do 
protótipo de Object. */ 

Object.prototype; 
eloise.toString(); 
eloise.isPrototypeOf(); 
eloise.valueOf();

/* Construtores Nativos 
Objetos, Funções, Números, Strings e outros tipos de dados são
criados utilizando construtores. Esses construtores possue um 
protótipo com propriedades e métodos, que poderão ser 
acessadas pelo tipo de dado. */

const pais = 'Brasil'; 
const cidade = new String('Curitiba');

pais.charAt(0); // B 
cidade.charAt(0); // C 

String.prototype; 

/* É possível acessar a função do protótipo 
É comum, principalmente em código mais antigos, o uso direto de
funções do protótipo do construtor Array. */ 

const lista = document.querySelectorAll('li');

// Transforma em uma array 
const listaArray = Array.prototype.slice.call(lista);

// Existe o método Array.from()

/* Método do Objeto vs Protótipo 
Nos objetos nativos existem métodos linkados diretamente ao 
Objeto e outros lindados ao protótipo. */ 

Array.from(lista); 

// Retorna uma lista com os métodos / propriedades 

Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado,constructor.name retorna o nome do construtor. 

// Apenas os Métodos do Protótipo são Herdados 
[1,2,3].slice(); // existe 
[1,2,3].from(); // não existe 

/* Entenda o Que está Sendo Retornado 
Os métodos e propriedades acessando com o . são referentes ao
tipo de dados que retornado antes desse . */ 

const Carro = { 
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
};

Carro // Object 
Carro.marca // String 
Carro.preco // Number 
Carro.acelerar // Function 
Carro.acelerar() // Boolean - true, false
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

// Verifique o nome do construtor com o .constructor.name

// Exercícios 

// Crie uma função construtora de Pessoas 
// Deve conter nome, sobrenome e idade 
// Crie um método no protótipo que retorne 
// o nome completo da pessoa 

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome; 
  this.sobrenome = sobrenome; 
  this.idade = idade;
};

Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
};

const stephanyEloise = new Pessoas('Stephany', 'Eloise', 27); 

// Liste os métodos acessados por 
// dados criados com Nodelist 
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo 

const li = document.querySelectorAll('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String 
li.values; // Number 
li.hidden; // Boolean 
li.offsetLeft; // Number 
li.click(); // undefined 

// Qual o construtor do dado abaixo: 
li.hidden.constructor.name;  // String 
