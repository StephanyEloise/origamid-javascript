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

