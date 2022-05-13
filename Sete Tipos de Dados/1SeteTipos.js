/* 7 Tipos de Dados 
Todos são primitivos exceto os objetos. */

var nome = 'Midna'; // String
var idade = 27; // Number 
var possuiFaculdade = false; // Boolean
var time; // Undefined 
var comida = null; // Null 
var simbolo = Symbol() // Symbol 
var novoObjeto = {} // Object 


var simbolo = Symbol;
console.log(typeof simbolo); // Verificar
// Retorna null como objeto. Bug.

var nome = 'Stephany'; 
var sobrenome = 'Eloise';
var nomeCompleto = nome + ' ' + sobrenome; 
console.log(nomeCompleto);

var frase1 = 'Esse é o "melhor" jogo!';
var frase2 = "Esse é o \"melhor\" jogo.";
console.log('String Direta')

// Template String `` 
var pontos = 1000; 
var frase3 = 'Midna fez ' + pontos + ' pontos.';
var frase4 = `Midna fez ${pontos * 2} pontos!`; 
console.log(frase4)

/* Exercício 
Dica rápida, frases(string) devem ser colocadas entre aspas e númeross não levam aspas.*/ 

// Declare uma variável contendo uma string 
var animal = 'Raposa'; 

// Declare uma variável contendo um número dentro de uma string 
var numero = '7'; 

// Declare uma variável com a sua idade 
var idade = 27; 

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas 
var nome = 'Midna';
var sobrenome = 'Twilight'; 
var nomeCompleto = `${nome} ${sobrenome}` // Template String
console.log(nomeCompleto)

// Coloque a seguinte frase em uma variável: It`s time
var itsTime = 'It\'s time'; // Ou pode usar `` 

// Verifique o tipo da variável que contém o seu nome 
console.log(typeof nome);

// Números ; Precisão para até 15 digitos
var idade = 27; 
var pontos = 1000; 
var pi = 3.14; // ponto para decimal 
var exp = 2e10; // 20000000000

// Operadores Artméticos 
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50 
var multiplicacao = 100 * 2; // 200 
var expoente = 2 ** 4; // 16 
var modulo = 14 % 5; // 4 

// Com Strings 
var soma = '100' + 50; // 10050 Mantém como string
var subtracao = '100' - 50; // 50 
var multiplicacao = '100' * '2' // 200 
var divisao = 'Çomprei 10' / 2; // NaN (Not a Number)

// É possível verificar se uma variável é NaN ou não com a função isNanN() 

var testeNaN = 'Isso é 100' / 2; 
console.log(isNaN(testeNaN)); 

/* A ordem importa!
Começa por multriplicação e divisáo, depois por soma e subtração. */ 

var total1 = 20 + 5 * 2; // 30 ; 5 * 2 e depois 10 + 20
var total2 = (20 + 5) * 2; // 50 ; () Prioriza a soma

// Operadores Aritiméticos Unários 
var incremento = 5; 
console.log(incremento++); // 5
console.log(incremento); // 6 

var incremento2 = 5; 
console.log(++incremento2); // 6 
console.log(incremento2); // 6 
//Mesma coisa para decremento --

// O + e - tenta transformar o valor seguinte em número
var fraseTeste = 'Isso é um teste';
// +frase; NaN
// -frase; NaN 
console.log(+fraseTeste); // NaN

var idade = '27';
// +idade; 27 (número)
// Transforma uma string em número
// -idade; -27 (número)
// O - antes de um número torna ele negativo
console.log(+idade +5); // 32

var possuiFaculdade = false;
console.log(+possuiFaculdade); // 0 ; Se fosse true retornaria 1 

// Exercício

// Qual o resultado da seguinte expressáo? 
var total3 = 10 + 5 * 2 / 2 + 20;
console.log(total3);

// Crie duas expressóes que retornem NaN
var retornarNaN1 = 'Retornar NaN' / 7; 
var retornarNaN2 = 'Deve retornar NaN' - 2; 
console.log(retornarNaN1, retornarNaN2);

// Somar a string '200'com o número 50 e retornar 50 
var soma = + '200' + 50; 
console.log(soma);

// Incremente o número 5 e retorne seu valor incrementado
var cinco = 5;
console.log(++cinco);

//Como dividir o peso por 2?
var numero = + '80' / 2; 
var unidade = 'kg';
var peso = numero + unidade; 
console.log(peso);


/* Boolean: false ou true 
Verificar se uma expressão é verdade com if, caso contrário o else será ativado */

var possuiGraduacao = false; 
if(possuiGraduacao) {
  console.log('Possui gradução.');
} else {
  console.log('Não possui graduação.');
}
// retorna Não pssui graduação, se for true retorna Possui graduação e não ativa o else 

/* Condicionais Else If 
Se o if não for verdadeiro, ele testa o else if. */ 

var amaTheSims = true; 
var amaLeagueOfLegends = false; 

if(amaLeagueOfLegends) {
  console.log('Ama jogar League Of Legends!');
} else if(amaTheSims) {
  console.log('Ama jogar The Sims, mas não ama jogar LoL.');
} else {
  console.log('Não gosta de joguinhos pois é coisa de criança. Hur Dur');
}

/* Truthy e Falsy 
Existem valores que retornam true e outros que retornam false ando verificados em uma expressão booleana. */

// Falsy 
if(false)
if(0) // ou - 0 
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou `` 

//Todo o resto é Truthy = true

// Truthy
if(true)
if(1)
if(' ') // Espaço 
if(-5)
if({});

/* Operador Lógico de Negação ! ou !! 
O operador ! nega uma operação booleana. Ou seja, !true é igual a false. 
!! É a verificação do truthy ou falsy */

if(!true) // false 
if(!1) // false 
if(!'') // true 
if(!undefined) // true 
if(!!' ') // true ; espaço 
if(!!'') // false 

/* Operadores de Comparação 
Vão sempre retornar um valor booleano */ 

10 > 5; // true 
5 > 10; // false 
20 < 10; // false 
10 <= 10; // true 
10 >= 11 // false 

// >= => 

10 == '10'; // true 
10 == 10; // true 
10 === '10'; // false 
10 === 10; // true 

// O == faz uma comparação não tão escrita
// O === faz uma comparação escrita

10 != 15; // true 
10 != '10'; // false 
10 !== '10'; // true 

/* Operados Lógicos && 
Vai comparar duas expressões ou mais. 
Se ambos os valores forem true, ele irá retornar o último valor verificado. 
Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos. */ 

true && true; // true ; Rwtorna o último que foi verdadeiro quando não há false 
true && false; // false  
false && true; // false 
'Gato' && 'Cão'; // 'Cão' ; Retorna o primeiro valor false
(5 - 5) && (5 + 5); // 0 ; Cálculo, por isso retorna número
'Gato' && false; // false 
(5 >= 5) && (3 < 6); // true ; Comparação, por isso retona boolean

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
};
// 5 - 5 = 0; ou seja, false

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
};
// Verdadeiro 10 

/* Operadores Lógicos || 
Compara se uma expressão ou outra é verdadeira.
Retorna o primeiro valor true que encontrar. */ 

true || true; // true 
true || false; // true 
false || true; // true 
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10 ; 5 - 5 = 0 false 
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true 

/* Switch 
Com o switch voce pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, voce pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira. */ 

var corFavorita = 'Lilás';

switch (corFavorita) { 
  case 'Lilás':
    console.log('Olhe para uma lavanda.');
    break;
  case 'Amarelo':
    console.log('Olhe pra o sol.');
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break; 
 default:
      console.log('Feche os olhos.');
};

// Exercício 

// Verifique se a sua idade é maior do que a de algum parente.
// Dependendo do resultado coloque no console 'É maior', É igual', ou 'É menor'.  
var minhaIdade = 27;
var idadeParente = 58; 

if(minhaIdade > idadeParente) {
  console.log('É maior.');
} else if(minhaIdade === idadeParente) {
  console.log('É igual.'); 
} else {
  console.log('É menor.');
};


// Qual é o valor retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 ; Todos verdadeiros
// (5 - 's') seria falso NaN. (5 - ' ') Apenas com espaço é verdadeiro e retorna o 5 

// Verifique se as seguintes variáveis são Truthy ou Falsy 
var nome = 'Midna'; // Truthy 
var idade = 27; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões).
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes.')
} else {
  console.log('China tem mais habitantes.')
};

// O que irá aparecer no console? 
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); 
};
// Resposta: Falso

// O que irá aparecer no console? 
if(('Gato' === 'Cão') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
};
// Resposta: Cão

