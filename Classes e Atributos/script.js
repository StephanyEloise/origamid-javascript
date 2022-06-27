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

const animais = document.querySelector('.animais'); 

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


