// Variáveis são responsáveis por guardar dados na memória. Inicia com a palavra var, let ou const. Evitam repetições

var nome = 'Stephany Eloise';
var idade = 27; 
var amaGatos = true;

console.log(nome, idade, amaGatos);

// Case Sensitive, nome é diferente de Nome. Camel case, é comum nomearmos assim: abrirModal

var preco = 25; 
var totalComprado = 5; 
var totalPreco = totalComprado * preco; 

console.log(preco)

var sobrenome = 'A. Costa', 
cidade = 'Curitiba';

console.log(sobrenome, cidade); 

var semDefinir; 
console.log(semDefinir);

//As variáveis podem iniciar com $, _, ou letras. Podem conter números mas não iniciar com eles. Não utilizar palavras reservadas: JavaScript Reserved Words w3schools.com/js/js_reserved.asp

/* Inválido
var ♡nome; 
var function; 
var 1possuiFaculdade; */

// Válido
var $selecionar;
var _nome; 
var possuiFaculdadeNoExterior;

// É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modficar valores das declaradas com const

var animalFavorito = 'Cachorro';
console.log(animalFavorito);
animalFavorito = 'Gato';
console.log(animalFavorito);

// let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco

let animalFavorito = 'Coelho'; 

// Não pode ser alterado quando usar const

const animalFavorito = 'Vaca';

/* Exercício 
Dica: Frases(string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas. */

//Declarar uma variável cm o seu nome
var nome = 'Stephany Eloise';

// Declarar uma variável com a sua idade
var idade = 27;

// Declarar uma variável com a sua comida favorita e não atribuir valor 
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = 'Sorvete';

// Declarar 5 variáveis diferentes sem valores 
var cidade, altura, peso, aniversario, signo; 

console.log( nome, idade, comidaFavorita, cidade, altura, peso, aniversario, signo);


