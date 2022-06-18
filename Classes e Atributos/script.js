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

img.hasAttribute(); // true / false se tem algum atributo 

// É muito comum métodos de get e set; 

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else { 
  menu.classList.add('nao-possui-azul');
};

5 = 5 + 1; 

menu.className += ' vermelho'; 

/* attributes 
Retorna uma array-like com os atributos do elemento. */ 

const animais = document.querySelector('.animais'); 

animais.attributes; // retorna todos os atributos 
animais.attributes[0]; // retorna o primeiro atributo