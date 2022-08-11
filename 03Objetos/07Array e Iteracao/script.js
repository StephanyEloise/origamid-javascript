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

