/* Arrays 
Armazenam uma coleção de elmentos. Estes podem ser 
strings, arrays, boolean, number, function, objects
e mais. */ 

const instrumentos = ['Violino', 'Bateria', 'Piano']; 
const precos = [49, 99, 69, 89]; 

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }]; 

dados[2]('Ford');
dados[1][2].cor; // azul 

/* Construção de Arrays 
Toda array herda os méodos e propriedades do protótipo 
do construtor Array. */ 

const carros = new Array('Corola', 'Mustang', 'Honda'); 

carros[1] // Mustang 
carros[2] = 'Ferrari';
carros[10] = 'Parati'; 
carros.length; // 11 

// Os valores das array's não são estáticos 

/* Array.from()
É um método utilizado para transformar array-like
objects, em uma array. */ 

let li = document.querySelectorAll('li'); // Nodelist 
li = array.from(li); // Array 

const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4, 
}

const carrosArray = Array.from(carros); 

/* Array.of(), Array() e new Array()
Verifica se o valor passado é uma array e retorna um 
valor booleano. A palavra chave new não é necessária 
para utilizar o construtor Array. */ 

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1, 2, 3, 4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1, 2, 3, 4]

/* Métodos Modificadores [].sort()
Os próximos métodos que vemos falar sobre, são os 
métodos modificadores (mutator methods). Além de 
retornarem um valor, eles modificam a array original.
[ ].sort( ) organiza a pelo unicode. */ 

instrumentos.sort();
instrumentos; // ['Bateria', 'Piano', 'Violino'];

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8];

/* [].unshift e []push()
[].unshift adiciona elementos ao início da array e
retorna o length da mesma. []push() adiciona elementos
ao final da array e retorna o length da mesma. */ 

const carros2 = ['Ford', 'Fiat', 'VW']; 

carros2.unshift('Honda', 'Kia'); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']; 

carros2.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']; 

/* [].shift() e []pop()
[].shift() remove o primeiro elemento da array e 
retorna o mesmo. [].pop() remove o último elemento da
array e retorna o mesmo. */ 

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda']; 
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];

/* [].reverse()
Inverte os itens da array e retorna a nova array. */

const carrosInverte = carros3.reverse(); 
carros3; // ['Honda', 'VW', 'Fiat', 'Ford'];

/* [].splice()
[].splice(index, remover, item1, item2, ...)
adiciona valores na array a partir do index. 
Remove a quantidade de itens que for passada 
no segundo parâmetro (retorna esses itens). */

carros3.splice(1, 0, 'Kia', 'Mustang'); // []
carros3; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']; 

carros3.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros3; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']; 

/* [].copyWithin()
[].copyWithin(alvo, inicio, final) a partir do alvo, 
ele irá copiar a array começamdp do início até o final
e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como 
inicio o 0 e final o valor total da array. */ 

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2'];

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1); // ['Item1', 'Item2', 'Item3', 'Item1']; 

/* Métodos de Acesso [].concat()
Os métodos abaixo não modificam a array original, 
apenas retornam uma array modificada. [].concat()
irá concatenar a array com o valor passado. */ 

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transporte3 = transporte1.concat(transporte2); // ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van'); // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];