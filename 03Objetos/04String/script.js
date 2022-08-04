/* String 
É a construtora de strings, toda string possui as propriedades
e métodos do prototype de String. */ 

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2022); 

/* str.length
Propriedade com o total de caracteres da string. */ 

const frase = 'A melhor comida';

comida.length; // 5 
frase.length; // 15 

comida[0] // P 
frase[0] // A 
frase[frase.length - 1] // a 

const outraFrase = 'A melhor linguagem é ';
const linguagem = 'Javascript';
const fraseFinal = outraFrase.concat(linguagem, '!!', ' =,D');

/* str.includes(search, position)
Procura pela string exata dentro de outra string. 
A procura é case sensitive. */ 

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false 

const transacao1 = 'Depósito de cliente'; 
const transacao2 = 'Depósito de fornecedor'; 
const transacao3 = 'Taxa de camisas';

/* str.slice(star, end)
Corta a string de acordo com os valores de start e end. */ 

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep 
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(transacao3.slice(0, -1)); // Taxa de camisa 
console.log(transacao3.slice(-5)); // misas

/* str.substring(start, end)
Corta a string de acordo com os valores de start e end. 
Não funcionar com valores negativos como slice. */ 

linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript 

/* str.indexOf(search) e str.lastIndexOf(search)
Retorna o index da string, assim que achar o promeiro resultado
ele já retorna. No caso do lastIndexOf ele retorna o último.*/

const instrumento = 'Violino';

console.log(instrumento.indexOf('i')); // 1 
console.log(instrumento.lastIndexOf('i')); // 4 
console.log(instrumento.indexOf('ol')); // 2

/* str.padStart(n, str) e str.padEnd(n, str)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string
com 8 caracteres, se passarmos n = 10, ela passará a ter 10 
caracteres. O preenchimento é feito com espaços, caso não seja 
declarado o segundo argumento. */ 

const listaPrecos = [ 'R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99 
listaPrecos[0].padEnd(10,'.'); // R$ 99.....

/* str.repeat(n)
Repete a string (n) vezes. */ 

const repete = 'Ta';

repete.repeat(5); // TaTaTaTaTa

/* str.replace(regexp|substr, newstr|function)
Troca parte da string por outra. Podemos utilizar uma regular
expression ou um valor direto. Se usarmos um valor direto ele irá 
trocar apenas o primeiro valor que encontrar. */ 

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'; 
listaItens = listaItens.replace(/[ ]+/g, ', '); 
// /[ ]+/g pegar todos os espaços 

let preco = 'R$ 1200,43'; 
preco = preco.replace(',', '.'); // 'R$ 1200.43'

/* str.split(padrao)
Divide a string de acordo com o padrão passado
e retorna uma array. */ 

const itensLista = 'Ursos Coelhos Cachorros Gatos Vacas Esquilos';
const arrayItens = itensLista.split(' '); 

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section'); 

//join é um método de Array

/* str.toLowerCase() e str.toUpperCase()
Retorna a string em letras maiúsculasou min;usculas. 
Bom para verificarmos input de usuários. */ 

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLocaleLowerCase() === 'feminino'); // true 
(sexo2.toLocaleLowerCase() === 'feminino'); // true 
(sexo3.toLocaleLowerCase() === 'feminino'); // true 

/* str.trim(), str.trimStart(), str.trimEnd()
Remove espaço em banco de início ou final de uma string. */

const valor = ' R$ 23.00 ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00 '
valor.trimEnd(); // ' R$ 23.00' 

// Exercícios 

// Utilizando o foreach na aeeay abaixo,
// some os valores de Taxa e os valores de Recebimento 

const transicoes1 = [ 
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0; 
let recebimentoTotal = 0; 

transicoes1.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if(item.descricao.slice(0, 4) === 'Taxa') {
  taxaTotal = taxaTotal + numeroLimpo; 
  } else if(item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += numeroLimpo; 
  }
});

// Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'; 
const arrayTransportes = transportes.split(';');

// Substitua todos os span's por a's 

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produto</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a'); 

// Retorne o último caracter da frase 

const fraseExercicio = 'Melhor do ano!';
frase.slice(-1); 

// Retorne o total de taxas 

const transicoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial']; 

let taxasTotal = 0; 
transacao2.forEach((item) => {
  item = item.toLocaleLowerCase().trim();
  item = item.slice(0, 4); 

// item = item.toLocaleLowerCase().trim().slice(0, 4);

  if(item === 'taxa')
    taxasTotal++
});
