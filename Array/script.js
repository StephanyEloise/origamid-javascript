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

