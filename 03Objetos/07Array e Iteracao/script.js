/* [].forEach()
[].forEach(callback(itemAtual, index, array)) 
a função callback é executada para cada item da array.
Ela possui três argumentos, 
item atual (valor do item da array),
index (index do valor na array) 
e array (array original). */ 

const carros = ['Ford', 'Fiat', 'Honda']; 
carros.forEach(function(item, index, array) {
  item.toLocaleUpperCase;
});

// com Arrow Function 
carros.forEach((item, index, array) => {
  item.toLocaleUpperCase();
}); 

carros.forEach((item, index, array) => {
  array[index] = 'Teste'
}); 

// O método sempre retorna undefined 

// Arrow Function 

const li = document.querySelectorAll('li'); 

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
}); 

li.forEach((item, index) => {item.classList.add('ativa' + index)}); 

/* Modificar a Array Orginal 
O terceiro argumento do callback é uma referência direta
e se modificado á também modificar a array original. */ 

carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item; 
}); 

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// É melhor utukizarmos o map para isso

/* [].map()
[].map(callback(itemAtual, index, array)) funciona da mesma
forma que o forEach(), porém, ao invés de retornar 
undefined, retorna uma nova array com valores atualizados
de acordo com o return de cada iteração. */ 

const newCarro = carros.map((item) => {
  return 'Carro ' + item;
}); 

// Retornar uma array com valores modificados 

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n => n * 2); 

/* Valor Retornado 
Se não retornarmos nenhum valor durante a iteração 
utilizando map, o valor retornado como de qualquer função
que não possui o return, será undefined. */ 

const newCarros = carros.map((item) => {
  const novoValor = 'Carro ' + item; 
}); 

newCarros; // [undefined, undefined, undefined]; 

/* [].map() vs [].forEach()
Se o objetivo for modificar os valores da array atual, 
sempre utilize o map, pois assim uma nova array com os
valores modificados é retornada e você pode imediatamente
iterar novamente sobre estes valores. */ 

const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numeros2X3 = numeros2.map(n => n * 3);

numeros2X3; // [6, 12, 18, 24, 30, 36, 42];

/* [].map() com Objetos 
Map pode ser muito útil para interagirmos com uma array de
objetos, onde desejamos isolar um valor único de cada 
objeto. */ 

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  }, 
  {
    nome: 'HTML 2',
    min: 10
  }, 
  {
    nome: 'CSS 1',
    min: 20
  }, 
  {
    nome: 'JS 1',
    min: 25
  }, 
]

const tempoAulas = aulas.map(aula => aula.min);

function nomeAulas(aula) {
  return aulas.nome;
};

const arrayNomeAulas = aulas.map(nomeAulas);

// const nomesAulas = aula => aula.nome; 

/* [].reduce()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) 
executa a função de callback para cada item da Array. 
Um valor especial existe nessa função de callback, ele é 
chamado de acumulador, mas é na verdade apenas o retorna 
da iteração anterior. */ 

const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65 

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165

/* Reduce Passo a Passo 1 
No primeiro parâmetro do callback é o valor do segundo 
argumento no reduce(callback, inicial) durante a primeira
iteração. Nas iterações seguintes este valor passa a ser 
o retornado pela anterior. */

const aulas3 = [10, 25, 30]; 

// 1 
aulas3.reduce((0, 10) => {
  return 0 + 10;
}, 0); 

// 2 
aulas3.reduce((10, 25) => {
  return 10 + 25; 
}, 0); 

