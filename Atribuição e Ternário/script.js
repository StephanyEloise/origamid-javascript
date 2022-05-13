/* Operadores de Atribuição 
Podem funcionar como formas abreviadas */ 

var x = 9; 
var y = 18; 

x += y; //  x = x + y (27)
x -= y; // x = x - y (-9)
x *= y; // x = x * y (162)
x /= y; // x = x / y (9)
x %= y; // x = x % y (9)
x **= y; // x = x ** y (150094635296999140)

/* Operador Ternário 
Abreviação de condicionais com if e else */ 

var idade = 19; 
var podeBeber = (idade >= 18) ? 'Pode beber.' : 'Não pode beber.'; 
console.log(podeBeber); // Pode beber.  

/* Condição ? true : false 
Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição. */ 

var naoPossuiDiabetes = false; 
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false; 

console.log(podeBeber); 

/* If Abreviado 
Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linhda de código */ 

var possuiFaculdade = true; 
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou 

if(possuiFaculdade)
  console.log('Possui faculdade'); 
else 
  console.log('Não possui faculdade'); 


// Exercício 

// Some 500 ao valor de scroll abaixo, 
// atribuindo o novo valor a scroll 

var scroll = 1000; 
scroll += 500; 
console.log(scroll);

// Atribua true para a variável darCredito, 
// caso o cliente possua carro e casa.
// E false caso o contrário. 

var possuiCarro = true; 
var possuiCasa = true; 
var darCredito; 

darCredito = (possuiCarro && possuiCasa) ? 'Crédito aprovado!' : 'Crédito negado.'; 

console.log(darCredito);

/* Váriavel Global (Erro)
Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). 
Isso é um erro. */ 

function mostrarCarro() {
  carro = 'Fusca'; 
  console.log(carro); 
}; 

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// 'use strict' impede isso. 

/* Escopo de Função (Pai)
Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções. */ 

var carro = 'Fusca'; 

function mostrarCarro() {
  var frase = `Meu caarro é um ${carro}.`;  
  console.log(frase);
};

mostrarCarro(); // Meu carro é um Fusca. 
console.log(carro);  // Fusca

/* Escopo de Bloco 
Variáveis criadas com ar, vazam o bloco. 
Por isso com a introdução do ES6 a melhor forma de declararmos uma variáveis é utilizando const e let, 
pois estas respeitam o escopo do bloco. */ 

if(true) {
  var carro = 'Fusca';
  console.log(carro);
};

console.log(carro); // Carro 

/* {} Cria um bloco 
Chaves criam um escopo de bloco, 
!!! não confundir com a criação de objetos = {} !!! */ 

/* For Loop 
Ao utilizar var dentro de um for loop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop. */ 

var i = 50; 

for(var i = 0; i < 10; i++) { // Var vaza o bloco
  console.log(`Número ${i}`);
};
console.log(i); // 10 - Sobrescrever utilizando var
// para que isso não aconteça, o correto é utilizar let 

var item = 50; 

for(let item = 0; i < 10; i++) {
  console.log(`Número ${i}`);
};
console.log(item); // 50 

/* Const 
Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código. */ 

const mes = 'Dezembro'; 
mes = 'Janeiro'; // erro, tentou modificar o valor 
// const semana; // erro, declarou sem valor 

const data = {
  dia: 13, 
  mes: 'Maio',
  ano: 2022,
};

data.dia = 24; // Funciona 
data = 'Janeiro'; // Erro 

const semana = 'Sexta'; 

console.log(semana);

/* Let 
Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável. */ 

let ano; 
ano = 2022; 
ano++; 
console.log(ano); // 2023 

// let ano = 2020; // erro, redeclarou a variável 

// Geralmente vamos utilizar o const 

// Exercício 

// Por qual motivo o código abaixo retorna com erros? 

{
  var cor = 'preto'; 
  const marca = 'Fiat'; 
  let portas = 4; 
  console.log(cor, marca, portas); 
};

/* Resposta:
1. var é a palavra chave, não é uma variável 
2. {} Foi criado um escopo de bloco, onde const e let não vazam 
3. Para funcionar, o console.log deveria ficar dentro do escopo de bloco, e corrigindo o var por cor. */ 

// Como corrigir o erro abaixo? 

const dois = 2; 
function somarDois(x) {
  return x + dois;
};
function dividirDois(x) {
  return x / dois;
}; 

console.log(somarDois(4));
console.log(dividirDois(6)); 

/* Resposta:
1. Subir o const para fora da função, para que seja utilizada nas duas funções
2. Trocar o + por /  */ 


// O que fazer para total retornar 500? 

const numero = 50; 

for(let numero = 0; numero < 10; numero++) {
  console.log(numero); 
};
const total = 10 * numero;
console.log(total);

/* Resposta:
1. Duas var não funciona pois a ultima prescreve a anterior. 
2. Primeira var se transforma em const e a segunda em let. */

