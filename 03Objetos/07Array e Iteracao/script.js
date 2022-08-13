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
//aulas3.reduce((0, 10) => {
//  return 0 + 10;
//}, 0); // retorna 10 

// 2 
//aulas3.reduce((10, 25) => {
//  return 10 + 25; 
//}, 0); // retorna 35 

// 3 
//aulas3.reduce((35, 30) => {
//  return 35+ 30; 
//}, 0); // retorna 65 

/*Reduce Passo a Passo 2
Se não definirmos o valor inicial do acumulador, ele irá 
pular a primeira iteração e começar a partir da segunda. 
Neste caso o valor do acumulador será o valor do item da 
primeira iteração. */ 

// 1 
// aulas.reduce((10, 25) => {
//   return 10 + 25; 
// }); // retorna 35

// 2 
// aulas.reduce((35, 30) => {
//   return 35 + 30; 
// }); // retorna 65 

/* Maior valor com [].reduce() */ 

const numeros3 = [10, 25, 60, 5, 35, 10]; 

const maiorvALOR= numeros3.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
}); 

maiorvALOR; // 60 

/* Podemos retornar outros valores */ 

const aulas4 = [
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
]; 

// var acumulador = {}
// acumulador[0] = 'Qualquer Nome'; // acumulador.aula
const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome; 
  return acumulador;
}, {}); 

/* [].reduceRight()
A diferença é que este começa a iterar da direita para a 
esquerda, enquanto o reduce itera da esquerda para a 
direita. */ 

const frutas = ['Banana', 'Pêra', 'Uva']; 

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta); 
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta); 

frutasRight; // Uva Pêra Banana 
frutasLeft; // Banana Pêra Uva 

/* [].some()
Se pelo menos um return da iteração for truthy, 
ele retorna true. */ 

const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true 

function maiorQue100(numero) {
  return numero > 100; 
}; 

const numeros4 = [0, 43, 22, 88, 101, 2]; 
const temMaior = numeros.some(maiorQue100); // true 

/* []. every(), se todos os returnsdas iteraçoes forem 
truthy, o método irá retornar true. Se pelo menos um for 
falsy, ele irá retornar false. */ 

const frutas2 = ['Banana', 'Pêra', 'Uva', '']; 
// False pois pelo menos uma fruta 
// está vazia '', o que é um valor falsy
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false
}); 

const numeros5 = [6, 43, 22, 88, 101, 29]; 
const maiorQue3 = numeros5.every(x => x > 3); // true 

/* [].find() e [].findIndex()
[].find(), retorna o valor atual da primeira iteração
que retornar um valor truthy. Já o [].findIndex(), ao
invés de retornar o valor, retorna o index deste 
valor na array. */ 

const frutas3 = ['Banana', 'Pêra', 'Uva', 'Maçã']; 
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
}); // 2 

const numeros6 = [6, 43, 22, 88, 101, 29]; 
const buscaMaior45 = numeros5.find(x => x > 45); // 88

/* [].filter()
Retorna uma array com a lista de valores que 
durante a sua iteração retornaram um valor truthy. */

const frutas4 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']; 
const arrayLimpa = frutas.filter((fruta) => {
  return fruta;
}); // ['Banana', 'Uva', 'Maçã']; 

const numeros7 = [6, 43, 22, 88, 101, 29]; 
const filterMaior45 = numeros5.filter(x => x > 45); // [88, 101]; 

// Filter em Objetos

const aulas5 = [
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
]; 

const aulasMaiores = aulas5.filter((aula) => {
  return aula.min > 15; 
}); // CSS 1, JS 1 
// >= 15;  HTML 1, CSS 1, JS 1

// Exercícios 

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso'); 
const arrayCursos = Array.from(cursos); 

const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao, 
    aulas, 
    horas
  }
}); 

console.log(objetoCurso);
console.log(arrayCursos);


// Retorne uma lista com os
// números maiores que 100

const numeros8 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter(n => n > 100); 

console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo'; 
}); 

console.log(possuiBaixo); 

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  return acumulador + precoLimpo; 
}, 0); 

console.log(valorTotal);