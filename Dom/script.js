/* Document Object Model (DOM)

É uma interface que representa documentos HTML e XML através de objetos. 
Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos. */ 

console.log(window);
// Window é o objeto global do browser 
// Possui diferentes métodos e propriedades 

window.innerHeight; // Retorna a altura do browser 

// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM. 

window.alert('Midna'); 

/* Window e Document 

São objetos principais do DOM, boa parte da manipulação é feita atrave's dos seus métodos e propriedades. */ 

window.alert('Isso é um alerta!');
alert('Isso é um alerta!'); // Funciona 

document.querySelector('h1'); // Seleciona o primeiro h1 
document.body; // Retorna o body 

// Window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades 

/* Node

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. 
Element é um tipo de objeto Node. */ 

const titulo = document.querySelector('h1');

titulo.innerText; // retona o texto; 
titulo.classList; // retorna as classes; 
titulo.id; // retornza o id; 
titulo.offsetHeight; // retorna a altura do elemento; 

// titulo.addEventListener('click', callback); 
// ativa a função callback ao click no titulo 

const h1Selecionado = document.querySelector('h1'); 
const h1Classes = h1Selecionado.classList; 

function callBackh1() {
  console.log('Clicou em ', h1Selecionado.innerText )
}

h1Selecionado.addEventListener('click', callBackh1);

// Exercício 

// Retorna o url da página atual utilizando o objeto window 

const urlPagina = window.location.href; 
console.log(urlPagina);

// Seleciona o primeiro elemento da página que possua a classe ativo 

const elementoAtivo = document.querySelector('.ativo'); 
console.log(elementoAtivo);

// Retone a linguagem do navegador 

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 

const windowWidht = window.innerWidth; 
console.log(windowWidht);

/* ID 
getElementById seleciona e terona elementos do DOM */ 

// Seleciona pelo ID 
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste'); 

/* Classe e Tag 
getEkementsByCkassName e getElementsByTagName 
selecionam e retornam uma lista de elementos do DOM. 
A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada. */

// Seleciona pela classe, retorna uma HTMLCollection 
const gridSection = document.getElementsByClassName('grid-section');

// Seleciona todas as UL's, retona uma HTMLCollection 
const ul = document.getElementsByTagName('ul'); 

// Retorna o primeiro elemento 
console.log(gridSection[0]); 

/* Seletor Geral Único 
querySelector retorna o primeiro elemento que combinar com o seu seletor CSS. */ 

const animais = document.querySelector('.animais'); 
const contato = document.querySelector('#contato'); 
// const ultimoItem = document.querySelector('.animais-lista li:lastItem');
const linkCSS = document.querySelector('[href^="https://"]'); // Seletor CSS
const primeiroUl = document.querySelector('ul'); 

// Busca dentro do Ul apenas 
// const navItem = primeiroUl.querySelector('li'); 

/* Seletor Geral Lista 
qerySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList */

const gridSection2 = document.querySelectorAll('.grid-section'); 
const listas = document.querySelectorAll('ull'); 
const titulos = document.querySelectorAll('.titulo'); 
const fotosAnimais = document.querySelectorAll('.animais-lista img'); 

// Retorna o segundo elemento 
console.log(gridSection2[1]); 

/* HTMLCollection vs NodeList 
A diferença está nos métodos e propriedades de ambas. 
Além disso a NodeList retornada com querySelectorAll é estática. */

const titulo2 = document.querySelector('.titulo'); 
const gridSectionHTML = document.getElementsByClassName('grid-section'); // sem ponto
const gridSectionNode = document.querySelectorAll('.grid-section');

// titulo2.classList.add('grid-section'); 

// console.log(gridSectionHTML); // 4 itens 
// console.log(gridSectionNode); // 3 itens 

/* Array-Like 
HTMLCollection e NodeList são array-like, parecem uma array mas não são. 
O método de Array forEach() por exemplo, existe apenas em NodeList. */ 

const gridSection3 = document.querySelectorAll('.grid-section'); 

/* gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul'); 
  console.log(index) // index do item na array
  console.log(array) // a arra completa 
}); */ 

/* É possível transformar array-like em uma Array real, 
usando o método Array.from(gridSection) */ 

const arrayGrid = Array.from(gridSectionHTML);









