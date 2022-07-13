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

/* forEach 
Constantemente vamos selecionar uma lista de itens do dom. 
A melhor forma para interagirmos com os mesmos é utilizando o método forEach.  */ 

const imgs1 = document.querySelectorAll('img'); 

imgs1.forEach(function(imagem){
  console.log(imagem);
});

/* Parâmetros do forEach 
O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item.
Essa função pode receber três parâmetros: 
valorAtual, index e array; */ 

imgs1.forEach(function(valorAtual, index, array){
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número de index 
  console.log(array); // a Array completa
});

/* forEach e Array 
forEach é um método de Array, alguns objetos array-like possuem este método. 
Caso não possua, o ideal é transformá-los em uma array */ 

const titulos2 = document.getElementsByClassName('titulo'); 
const titulosArray = Array.from(titulos); 

titulosArray.forEach(function(element){
  //console.log(element);
});

/* Arrow Function 
Sintaxe curta em relação a function expression. 
Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos */ 

const imgs2 = document.querySelectorAll('img'); 

imgs2.forEach((element) => {
  //console.log(element); 
});

// Argumentos e Parênteses 

const imgs3 = document.querySelectorAll('img'); 

// argumento único não precisa de parênteses 

imgs3.forEach(item => {
  //console.log(item);
});

// multiplos argumentos precisam de parênteses, mesmo vazio 

imgs3.forEach((item, index) => {
  //console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio 

let i1 = 0; 
imgs3.forEach(() => {
  //console.log(i++);
});

// É melhor utilizar os parênteses. 

/* Return 
É possível omitir as chaves {} para uma função que retorna uma linha. */

const imgs4 = document.querySelectorAll('img');

// imgs3.forEach(item =>
  //console.log(item) - Não é permitido fechar a linha com ; 
//  ); 

imgs4.forEach(item => console.log(item));

  // Exercício 

  // Mostre no console cada parágrafo do site 

  const paragrafos = document.querySelectorAll('p');
  console.log(paragrafos);

  paragrafos.forEach((item) => {
    console.log(item);
  });

  // Mostre o texto dos parágrafos no console 

  paragrafos.forEach((item) => {
    console.log(item.innerText);
  });

  // Como corrigir os erros abaixo: 
  const imgs5 = document.querySelectorAll('img');

  imgs5.forEach((item, index) => { // (item,index)
    console.log(item, index);
  });

  let x = 0; 
  imgs5.forEach(() => {
    console.log(x++);
  }); 

  imgs5.forEach(() => x++); 

//________________________________


// Exercício

// Retorne no console todas as imagens do site 

const img01 = document.querySelectorAll('img'); 
console.log(img01);

// Retorne no console apenas as imagens que começaram com a palavra 

const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]'); 
console.log(imgAnimais);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"'); // ^= Que começa com
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao 

const h2Animais = document.querySelector('.animais-descricao h2'); 

console.log(h2Animais); 

// Selecione o último p do site 

const paragrafos1 = document.querySelectorAll('p'); 
console.log(paragrafos1[--paragrafos1.length]); // = paragrafos.length - 1 


const imgs02 = document.querySelectorAll('img'); 

let i = 0; 
imgs02.forEach(function(img, index, array){
// console.log(img, index, array);
// console.log(i++);
});

imgs.forEach((item, index) => {
  //console.log(i++);
});

// imgs.forEach(() => console.log(i++)); - Versão curta.

// Exercício 

  // Mostre no console cada parágrafo do site 

  const paragrafos2 = document.querySelectorAll('p');
  console.log(paragrafos2);

  paragrafos2.forEach((item) => {
    console.log(item);
  });

  // Mostre o texto dos parágrafos no console 

  paragrafos1.forEach((item) => {
    console.log(item.innerText);
  });

  // Como corrigir os erros abaixo: 
  const imgs6 = document.querySelectorAll('img');

  imgs6.forEach((item, index) => { // (item,index)
    console.log(item, index);
  });

  let x1 = 0; 
  imgs6.forEach(() => { // ()
    console.log(x++);
  }); 

  imgs6.forEach(() => x++); 

  //__________________________

  /* classList 
Retorna uma lista com as classes do elemento. 
Permite adicionar, remover e verificar se contém. */ 

const menu = document.querySelector('.menu'); 

menu.className; // string 
menu.classList; // lista de classes 
menu.classList.add('ativo'); 
menu.classList.add('ativo', 'mobile'); // duas classes 
menu.classList.remove('ativo'); 
menu.classList.toggle('ativo'); // adiciona/remove a classe 
menu.classList.contains('ativo'); // true ou false 
menu.classList.replace('ativo','inativo');

/* getAttribute e setAttribute 
Métodos que retornam ou definem de acordo com o atributo selecionado */ 

const img = document.querySelector('img'); 

img.getAttribute('src'); // valor do src 
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt 
img.hasAttribute('id'); // true / false 
img.removeAttribute('alt'); // remove o alt 

// img.hasAttribute(); // true / false se tem algum atributo 

// É muito comum métodos de get e set; 

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else { 
  menu.classList.add('nao-possui-azul');
};

// 5 = 5 + 1; 

// menu.className += ' vermelho'; 

/* attributes 
Retorna uma array-like com os atributos do elemento. */ 

const animais1 = document.querySelector('.animais'); 

animais.attributes; // retorna todos os atributos 
animais.attributes[0]; // retorna o primeiro atributo

console.log(animais.attributes); 

/* Read Only vs Writable 
Existem propriedades que não permitem a mudança de seus valores, 
essas são considerados Read Only, ou seja, apenas leitura. */ 

animais.className; // string com o nome das classes 
animais.className = "azul"; // substitui completamente a string
animais.className += 'vermelho'; // adiciona vermelho à string

animais.className = 'class="ativo"'; // não funciona, read-only 

// Podemos modificar o valor de uma propriedade utilizando objeto.propriedade = ''

const carro = {
  portas: 4, // carro.portas - propriedade 
  andar: function(km) {
    console.log('Andou ${km}') // carro.andar(32) - Andou 32
  }
}; 

// Exercício 

// Adicione a classe ativo a todos os itens do menu 

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro 
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo all 
const imgs = document.querySelectorAll('img'); 

imgs.forEach((img) => {
  const possuiAtributo =img.hasAttribute('alt');
  // console.log(img, possuiAtributo);
});

// Modifique o href do link estorno no menu 
const link = document.querySelector('a[href^=http"]');
link.setAttribute('href', 'https://www.google.com/'); 

// console.log(link);

/* Height e Width 
Estas são propriedades e métodos dos objetos Element e HTMLElement,
a maioria delas são Read Only */ 

const section = document.querySelector('.animais'); 

section.clientHeight; // height + padding 
section.offsetHeight; // height + padding + border 
section.scrollHeight; // height total, mesmo dentro se scroll 

// Mesma coisa para Width, clientWidth 

// offsetTop e offsetLeft 

// Distância entre o topo do elemento e o topo da página 
section.offsetTop; 

// Distância entre o canto esquerdo do elemento e o canto squerdo da página 
section.offsetLeft; 

/* getBoundingClientRect() 
Método que retona um objeto com valores de width, height, distância de elementos e mais. */ 

const rect = section.getBoundingClientRect(); 
rect.height; // height do elemento 
rect.width; // width do elemento 
rect.top; // distância entre o topo do elemento e o scroll 

if(h2rect.top < 0) {
  console.log('Passou do elemento');
};

// Window 

window.innerWidth; // width da janela 
window.outerWidth; // soma dev tools também 
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço 

window.pageYOffset; // distância total do scroll horizontal 
window.pageXOffset; // distância total do scroll vertical 

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px'); 
}; 

/* matchMedia(); 
Utilize um media-querie como no CS para verificar a largura do browser */ 

const small = window.matchMedia('(max-width: 600px)'); 

if(small.matches) {
  console.log('Tela menor que 600px');
} else { 
  console.log('Tela maior que 600px');
}; 

/* Dicas
Selecione o elemento no inspetor (dom)
Abrao console e digite $0 para selecionar o mesmo 
Os elementos selecionados anteriormente são $1, $2 ... */ 

// Exercício 

// Verifique a distância da primeira imagem em relação ao topo da página 

const img1 = document.querySelector('img');
const imgTop = img.offsetTop; 

console.log(imgTop);

// Retorne a soma da largura de todas as imagens 

window.onload = function () { // Propriedade que atribue função que só é ativada quando o onload ocorre 
  somaImagens(); 
};

const img2 = document.querySelectorAll('img'); 

function somaImagens() {
  let soma = 0; 
  img2.forEach((imagem) => {
    soma = soma + img2.offsetWidth; // soma += img2.offsetWidth;
  });
  console.log(soma);
} ;

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade');
  } else { 
    console.log(link, 'Não possui boa acessibilidade');
  };
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu 

const browserSmall = window.matchMedia('(max-width: 720 px)').matches; 

if(browserSmall) { 
  const menu = document.querySelector('.menu'); 
  menu.classList.add('menu-mobile'); 
};

/*addEventListener 
Adiciona uma função ao elemento, esta chamada de callback, 
que será ativada assim que certo evento ocorrer neste elemento */ 

const img3 = document.querySelector('img'); 

// element.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
}); 

// O terceiro parâmetro é opicional. 

/* Callback 
É boa prática separar a função de callback do addEventListener, 
ou seja, declarar uma função ao invés de passar diretamente uma função anônima */ 

const img5 = document.querySelector('img5');
function callback() { 
  console.log('Clicou'); 
};

img5.addEventListener('click', callback); 
img5.addEventListener('click', callback()); // undefined 
img5.addEventListener('click', function() {
  console.log('Clicou');
});
img5.addEventListener('click', () => {
  console.log('Clicou');
});

/* Event 
O primeiro parâmetro do callback é referente ao evento que ocorreu. */ 

function callback(event) {
  console.log(event);
}; 

img5.addEventListener('click', callback); 

// Geralmente utilizam *e* como nome do parâmetro 

/* event.preventDefault() 
Previne o comportamento padrão do evento no browser. 
No caso de um link externo, por exemplo, irá prevenir que o link seja ativado. */ 

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault(); 
  console.log(event.currentTarget.href);
};

linkExterno.addEventListener('click', clickNoLink);

/* this 
A palavra chave this é uma palavra especial de JavaScript, 
que pode fazer referência a diferentes objetos dependendo do contexto. 
No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. */ 

const img6 = document.querySelector('img'); 

function callback(event) {
  console.log(this); // retorna a imagem 
  console.log(this.getAttribute('src'));
}; 

img6.addEventListener('click', callback); 

// Geralmente igual ao event.currentTarget 

/* Diferentes Eventos 
Existem diversos eventos como click, scroll, resize,
keydown,keyup, mouseenter e mais. 
Eventos podem ser adicionados a diferentes elementos, 
como o window e document também. */ 

function callback(event) {
  console.log(event, type, event); 
}; 

h1.addEventListener('click', callback); 
h1.addEventListener('mouseenter', callback); 
window.addEventListener('scroll', callback); 
window.addEventListener('resize', callback); 
window.addEventListener('keydown', callback); 

/* Keyboard 
Pode adicionar atalhos para facilitar a navegação no seu site, 
através de eventos do keyboard. */ 

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho'); 
};

window.addEventListener('keydown', callback);


// Exercício 

// Quando o usuário clicar nos links internos do site, 
// adicione a classe ativo ao item clicando e remova dos 
// demais itens caso eles possuam a mesma. 
// Previna o comportamento padrão desses links. 

const linksInternos = document.querySelector('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo'); // event.currentaTarget.classlist.add('ativo'); 
}; 

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados.

const todosElementos = document.querySelectorAll('body *'); // CSS body + espaço 

// function handleElemento(event) {
//   console.log(event.currentTarget); 
// };

// todosElementos.forEach((elemento) => {
//  elemento.addEventListener('click', handleElemento)
// });

// Utilizando o código anterior, ao invés de mostrar no console, 
// remova o elemento que está sendo clicado. *método remove()* 

 function handleElemento(event) {
   event.currentTarget.remove();
  };

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  if(event.key === 't') { 
    document.documentElement.classList.toggle('textomaior') // add 
  };
};

window.addEventListener('keydown', handleClickT);

/* outerHTML, innerHTML e innerText 
Propriedades que retornam uma string contendo o html ou texto. 
É possível atribuir um novo calor para as mesmas 
element.innerText = 'Novo Texto'. */ 

const menu1 = document.querySelector('.menu'); 

menu.outerHTML; // todo htmldo elemento
menu.innerHTML; // html interno 
menu.innerText; // texto, sem tags 

menu.innerText = '<p>Texto</p>'; // a tag vai como texto 
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada 