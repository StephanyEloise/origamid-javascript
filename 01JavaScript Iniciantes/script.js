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


// _________________________ 


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


// _________________________ 


/* Funções 
Bloco de código que poder ser executado e reutilizado.Valores podem ser passados por uma função e a mesma retorna outro valor. 

Chamada de function declaration. 
Qualquer nome com parenteses() do lado é uma função.*/ 

function areaQuadrado(lado) {
  return lado * lado; 
}
areaQuadrado(4) // 16 
areaQuadrado(5) // 25 
areaQuadrado(2) // 4 

function pi() {
  return 3.14; 
}; 

var total = 5 * pi(); //15.7 
// Se não ativar a função com o parenteses() ele retorna a função toda, e ñ o que ela deveria fazer. 

/* Parâmetro e Argumentos 
Ao criar uma função, você pde definir parâmetros. 
Ao executar uma função, você pode passar argumentos. 

Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também. */ 

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}; 
//peso e altura são os parâmetros da função acima.

imc(73, 1.66);
// 73 e 1.66 são os argumentos do parâmetro criado na função acima. 

console.log(imc(73, 1.66));

function corFavorita(cor) {
  if(cor === 'Azul') {
    return 'Você gosta do céu!';
  } else if(cor === 'Verde') {
    return 'Você gosta de floresta.'
  } else {
    return 'Você não gosta de nada...';
  }
};

corFavorita(); //Não foi passado nada, então retona 'Você não gosta de nada...'
corFavorita('Azul'); // Retorna 'Você gosta do céu! 

/* Arugmentos podem ser funções 
Chamadas de Callback, geralmente são funções que ocorrem após algum evento. */

addEventListener('click', function() {
  console.log('Clicou');
}); 

// A função possuí dois argumentos 
// Primeiro é a string 'click'
// Segundo é uma função anônima 

/* Funções anônimas são aquelas em que o nome da função não é definida, escritas como function () {} ou () => {} */ 

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log(imc2(63, 1.66)); // undefined 

/* Valores Retornados 
Uma função pode retornar qualquer tipo de dado e até outras funções. 
Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia!! */ 

function terceiraIdade(idade) {
  if(typeof idade !== 'number') { // verifica se é diferente de número.
    return 'Informe sua idade!';
  } else if(idade >= 60) {
    return true; 
  } else {
    return false;
  }
};
console.log(terceiraIdade('oi')); // Retorna 'Informe sua idade!' pois não é um número.
console.log(terceiraIdade(60));


function faltaVisitar(paisesVisitados) {
  var totalPaises = 193; 
  return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}
console.log(faltaVisitar(20)); // Retorna 'Falta visitar 173 países.' 

// Se tentar chamar pelo console.log o totalPaises, ele não irá funcionar pois está apenas dentro do escopo da função. 

var totalPaises2 = 193; 

function faltaVisitar2(paisesVisitados2) {
  return `Falta visitar ${totalPaises2 - paisesVisitados2} países.`;
}
console.log(faltaVisitar2(30));
console.log(totalPaises2); // Pode acessar pois está fora do escopo. 

/* Escopo Léxico 
Funções conseguem acessar variáveis que foram criadas no contexto pai */

var profissao = 'Designer'; 

function dados() {
  var nome = 'Stephany Eloise';
  var idade = 27;  // Cinza pois não está sendo utilizada.
  function outrosDados() {
    var endereco = 'Curitiba';
    var idade = 28; 
    return `${nome}, ${idade}, ${endereco}, ${profissao}`; 
  }
  return outrosDados(); 
}; 

console.log(dados()); // Retorna 'Stephany Eloise, 28, Curitiba, Designer'
// outrosDados(); // Está dentro do escopo da função. Retorna um erro 

// Exercício 

// Crie uma função para verificar se um valor é Truthy 

function verificarTruthy(valor) {
  return !!valor; // !! Verifica se o valor é truthy ou falsy
};
console.log(verificarTruthy(27)); // True

// Crie uma função matemática que retorne o perímetro de um quadrado. Lembrando: Perímetro é a soma dos quatro lados do quadrado 

function perimetroQuadrado(lado) { // lado = perímetro 
  return lado * 4; // = + lado + lado + lado + lado  
};
console.log(perimetroQuadrado(3)); // 12 

// Crie uma função que retorne o seu nome completeo. Ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) { 
  return `${nome} ${sobrenome}`; // = nome + ' ' + sobrenome 
};
console.log(nomeCompleto('Midna', 'Twilight')); // Midna Twilight

// Crie uma função que verifique se um número é par 

function isEven(numero) {
  var modulo = numero % 2; 
  if(modulo === 0) { // Se o módulo for diferente de zero
    return true;  // retorna true, é par
  } else {
    return false; 
  };
}; 
console.log(isEven(12)); // true 
console.log(isEven(27)); // false

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado; 
}; 
console.log(tipoDeDado(27)); // Number 
console.log(tipoDeDado('Midna')); // String 
console.log(tipoDeDado(null)); // Retorna Objeto 
console.log(tipoDeDado(undefined)); // Undefined 
console.log(tipoDeDado (function() {console.log('teste')})); // Function 


// addEventListener é uma função nativa do JavaScript
//O primeirp parâmetro é o evento que ocorre e o segundo o Callback 
//Utilize essa função para mostrar no console seu nome completo quando o evento 'scroll' ocorrer. 

addEventListener('scroll', function() { 
  console.log('Stephany Eloise');
});

// Alteração feita no index.html : li*100 

// Corrija o erro abaixo 

var totalPaises = 193; // Mover o var para fora da função, para que seja usada nas duas funções!

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`; 
};

function jaVisitei(paisesVisitados){
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países.`
};

console.log(precisoVisitar(20));
console.log(jaVisitei(20));


// _________________________ 


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


// _________________________ 


/* Tudo é Objeto!! 
Strings, números, boolean, objetos e mais. possuem propriedades e métodos. Por isso são objetos. */ 

var nome1 = 'Eclipsa'; 

nome.length; // 7 
nome.charAt(1); // 'c' = 0 E 1 c 2 l 3 i 4 p 5 s 6 a  - Começa em base zero. 
nome.replace('psa', 'pse'); // Eclipse 
nome; // 'Eclipsa'

// Uma String herda propriedades e métodos de construtor String()

var nome2 = 'Stephany Eloise'
var nomeMinusculo = nome.toLowerCase(); // stephany eloise 

/* Números 
Por um breve momento o número é envolvido em um Objeto (coereção), tendo acesso assim as suas propriedades e métodos */ 

var altura = 1.8; 

altura.toString(); // '1.8' Transforma em String 
altura.toFixed(); // '2' Ele arredonda o valor 

// Funções também possuem método e propriedade 

function areaQuadrado(lado) { 
  return lado * lado; 
}; 

areaQuadrado.toString(); 
// "function areaQuadrado(lado) {
// return lado * lado;  
//}

areaQuadrado.length; // 1 

/* Elementos do DOM 
Praticamente todos os efeitos com JS são feitos utilizando pripriedades e métodos de objetos DOM. */ 

// <a class="btn">Clique</a>

var btn = document.querySelector('.btn')
; 

btn.classList.add('azul'); // adiciona a classe azul 
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
});

// Exercício 

// Nomeie 3 propriedades ou métodos de strings 

var guxtavo = 'Decente'; 
guxtavo.charAt(2); 
guxtavo.length
guxtavo.slice

// Nomeie 5 propriedades ou métodos de elemntos DOM 

var btn = document.querySelector('.btn'); 
// addEventListener 
// appendChild 
btn.innerHTML
btn.outerHTML
btn.id

console.log(btn)

// Busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C / V 

// https://www.treinaweb.com.br/blog/clipboard-js-copiar-e-colar-com-javascript


// _________________________ 


/* Array 
É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável. */ 

var videoGames = ['Switch', 'PS4', 'XBox']; 

videoGames[0] // Switch
videoGames[2] // XBox 

// Acesse um elemento do array utilizando [n] n = número, primeiro número é 0, 1, 2 ... 

// Métodos e Propriedades de uma Array 

videoGames.pop(); // Remove o último item e retorna ele 
videoGames.push('3DS'); // Adiciona ao final do array 
videoGames.length; // 3 - Retorna a quantidade de arrays 

// Existem diversos métodos como map, reduce, forEach e mais que vamos mais à frente 

/* For Loop 
Fazem algo repetidamente até que uma condição seja atingida. */ 

for (var numero = 0; numero <10; numero++) {
  console.log(numero);
};

// Retorna de 0 a 9 no console 
// O for loop possui 3 partes, início, condição e incremento 
// Incremento numero++ é o incremento que permite não ficar em um loop eterno 

// While Loop 

var i = 0; 
while (i < 10) { 
  console.log(i);
  i++; // incremento dentro 
};

while (i < 100) { 
  console.log(i);
  i = i + 5; 
};

// Arrays e Loops 

var videoGames = ['Switch', 'PS4', 'XBox', '3DS']; 
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}; 

// videoGames.length retorna o valor total de arrays 
// O for loop é o mais comum 

/* Break
Utilizado para parar o loop */ 

var videoGames = ['Switch', 'PS4', 'XBox', '3DS']; 
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;  // Quebra ao aparecer PS4 
  };
}; 

/* forEach 
É um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like) */ 

var videoGames = ['Switch', 'PS4', 'XBox', '3DS']; 
videoGames.forEach(function(item) {
  console.log(item);
}); 

// O argumento do item será atribuido dinamicamente 
// Podemos passar os seguintes parãmetros item, index e array 

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']; 

frutas.forEach(function(fruta, index){
  frutas.pop(); // Remove o último item
  console.log(fruta, index, frutas);
}); 

// Não se confunda com a sintaxe!!

var numero = 0; 
var maximo = 50; 
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}; 

// Não aconselho excrever da forma acima, mas funciona normalmente 

 
// Exercício 

// Crie uma array com os anos que o Brasil ganhou a copa 

var copaBrasil = [ 1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem 'O Brasil ganhou a copa de ${ano}

for (var i = 0; i < copaBrasil.length; i++) {
  console.log(`O Brasil ganhou a copa de ${copaBrasil[i]}`); 
}; 

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera 

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']; 

for (var fruta = 0; fruta < frutas.length; fruta ++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'); 
    break; 
  };

// Coloque a última fruta do array acima em uma variável, sem remover a mesma do array 

var ultimaFruta = frutas[frutas.length - 1];


// _________________________ 


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

