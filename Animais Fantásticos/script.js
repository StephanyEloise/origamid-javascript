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

const h2Animais = document.querySelector('.animais-descricao h2'); // Opção 1
const animais = animais.querySelector('h2'); // Opção 2 

console.log(h2Animais); // Opção 1
console.log(animais); // Opção 2

// Selecione o último p do site 

const paragrafos = document.querySelectorAll('p'); 
console.log(paragrafos[--paragrafos.length]); // = paragrafos.length - 1 


