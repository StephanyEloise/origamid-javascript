/* Objetos 
Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
Propriedades e métodos consistem em nome (chave) e valor. */ 

var pessoa = {
    nome: 'Midna',
    idade: 27, 
    profissao: 'Enganar Trouxa',
    possuiFaculdade: false, 
}; 

console.log(pessoa.nome); // 'Midna'
console.log(pessoa.possuiFaculdade); // 'false' 

/* Métodos 
É uma propriedade que possui uma função no local do seu valor. */ 

var quadrado = {
  lados: 4, // Objeto criado
  area: function(lado) {
    return lado * lado; 
  }, 
  perimetro: function(lado) {
    return this.lados * lado; // This é o próprio objeto quadrado = 4 
  },
};

console.log(quadrado.lados); // 4 
console.log(quadrado.area(5)); // 25 
console.log(quadrado.perimetro(5)); // 20 

// Abreviação de area: function() {} para area() {}, no ES6+ 

var quadrado = {
  lados: 4, 
  area(lado) {
    return lado * lado; 
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco(){
    return 5;
  }
}; 

console.log(quadrado.cinco());

/* Organizar o Código 
Objetos servem para organizar o código em pequenas partes reutilizáveis. */ 

Math.PI; // 3.14 
Math.random(); // número aleatório, método

var pi = Math.PI; 
console.log(pi); // 3.14 

// Math é um objeto nativo de JavaScript
// console é um objeto e log() um método 

console.log(Math.random()); 

console.table(quadrado); // Console tem outras propriedades 

/* Criar um Objeto 
Um objeto é criado utilizando as chaves {} */ 
var carro = {} ; 
var animal = {};

console.log(typeof carro); // 'object'

/* Dot Notation Get - Pegar 
Acesse propriedades de um objeto utilizando o ponto . */ 

var menu1 = {
  width: 800, 
  height: 50, 
  backgroundColor: '#84E',
}; 

var bg = menu.backgroundColor; // '#84E' 
console.log(menu.backgroundColor);

/* Dot Notation Set - Atribuindo valor = 
Substitua o valor de uma propriedade utilizando o . e o = após o nome da mesma. 
Setar um valor */

menu.backgroundColor = '#000';
menu.color = 'black'; 

menu.esconder = function() {
  console.log('Escondi')
};

console.log(menu.backgroundColor);

/* Palavra-chave this 
this irá fazer uma referência ao próprio objeto. 
this irá retornar o próprio objeto. */ 

var height = 120; // variável 
var menu2 = {
  width: 800, 
  height: 50,  // objeto 
  metadeHeight() {
    return this.height / 2; 
  }
};

menu.metadeHeight(); // 25 
// sem o this, seria 60 

/* Protótipo e Herança 
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo. 

hasOwnProperty é um método de Object */ 

var menu3 = {
  width: 800,
}; 

// Verifica se existe dentro do objeto 
menu.hasOwnProperty('width'); // true 
menu.hasOwnProperty('height'); // falsde 


// Exercócio 

// Crie um objeto com seus dados pessoais, deve possuir pelo menos duas propriedades; nome e sobrenome 

var dadosPessoais = {
  nome: 'Stephany', 
  sobrenome: 'Eloise', 
  idade: 27,
}; 

// Crie um método no objeto anterior, que mostre o seu nome completo 

dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000 

var carro = {
  preco: 1000, 
  portas: 4, 
  marca: 'Audi',
};

carro.preco = 3000; 

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem 

var cachorro = {
  raca: labrador, 
  cor: preto, 
  idade: 10, 
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latido';
    } else { 
      return 'Nada';
    }
  }
};

cachorro.latir('homem') // Latido 
cachorro.latir('mulher') // Nada 



