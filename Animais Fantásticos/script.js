// Exercício

// Retorne no console todas as imagens do site 

const img = document.querySelectorAll('img'); 
console.log(img);

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

const paragrafos = document.querySelectorAll('p'); 
console.log(paragrafos[--paragrafos.length]); // = paragrafos.length - 1 


const imgs = document.querySelectorAll('img'); 

let i = 0; 
imgs.forEach(function(img, index, array){
// console.log(img, index, array);
// console.log(i++);
});

imgs.forEach((item, index) => {
  //console.log(i++);
});

// imgs.forEach(() => console.log(i++)); - Versão curta.