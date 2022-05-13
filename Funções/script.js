/* Funções 
Bloco de código que poder ser executado e reutilizado.Valores podem ser passados por uma função e a mesma retorna outro valor. 

Chamada de function declaration. 
Qualquer nome com parenteses() do lado é uma função.*/ 

function areaQuadrado(lado) {
  return lado * lado; 
}
areaQuadrado(4) // 16 
areaQuadrado(5) // 25 
areaQuadrado(2) // 4 

function pi() {
  return 3.14; 
}; 

var total = 5 * pi(); //15.7 
// Se não ativar a função com o parenteses() ele retorna a função toda, e ñ o que ela deveria fazer. 

/* Parâmetro e Argumentos 
Ao criar uma função, você pde definir parâmetros. 
Ao executar uma função, você pode passar argumentos. 

Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também. */ 

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}; 
//peso e altura são os parâmetros da função acima.

imc(73, 1.66);
// 73 e 1.66 são os argumentos do parâmetro criado na função acima. 

console.log(imc(73, 1.66));

function corFavorita(cor) {
  if(cor === 'Azul') {
    return 'Você gosta do céu!';
  } else if(cor === 'Verde') {
    return 'Você gosta de floresta.'
  } else {
    return 'Você não gosta de nada...';
  }
};

corFavorita(); //Não foi passado nada, então retona 'Você não gosta de nada...'
corFavorita('Azul'); // Retorna 'Você gosta do céu! 

/* Arugmentos podem ser funções 
Chamadas de Callback, geralmente são funções que ocorrem após algum evento. */

addEventListener('click', function() {
  console.log('Clicou');
}); 

// A função possuí dois argumentos 
// Primeiro é a string 'click'
// Segundo é uma função anônima 

/* Funções anônimas são aquelas em que o nome da função não é definida, escritas como function () {} ou () => {} */ 

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log(imc2(63, 1.66)); // undefined 

/* Valores Retornados 
Uma função pode retornar qualquer tipo de dado e até outras funções. 
Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia!! */ 

function terceiraIdade(idade) {
  if(typeof idade !== 'number') { // verifica se é diferente de número.
    return 'Informe sua idade!';
  } else if(idade >= 60) {
    return true; 
  } else {
    return false;
  }
};
console.log(terceiraIdade('oi')); // Retorna 'Informe sua idade!' pois não é um número.
console.log(terceiraIdade(60));


function faltaVisitar(paisesVisitados) {
  var totalPaises = 193; 
  return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}
console.log(faltaVisitar(20)); // Retorna 'Falta visitar 173 países.' 

// Se tentar chamar pelo console.log o totalPaises, ele não irá funcionar pois está apenas dentro do escopo da função. 

var totalPaises2 = 193; 

function faltaVisitar2(paisesVisitados2) {
  return `Falta visitar ${totalPaises2 - paisesVisitados2} países.`;
}
console.log(faltaVisitar2(30));
console.log(totalPaises2); // Pode acessar pois está fora do escopo. 

/* Escopo Léxico 
Funções conseguem acessar variáveis que foram criadas no contexto pai */

var profissao = 'Designer'; 

function dados() {
  var nome = 'Stephany Eloise';
  var idade = 27;  // Cinza pois não está sendo utilizada.
  function outrosDados() {
    var endereco = 'Curitiba';
    var idade = 28; 
    return `${nome}, ${idade}, ${endereco}, ${profissao}`; 
  }
  return outrosDados(); 
}; 

console.log(dados()); // Retorna 'Stephany Eloise, 28, Curitiba, Designer'
// outrosDados(); // Está dentro do escopo da função. Retorna um erro 

// Exercício 

// Crie uma função para verificar se um valor é Truthy 

function verificarTruthy(valor) {
  return !!valor; // !! Verifica se o valor é truthy ou falsy
};
console.log(verificarTruthy(27)); // True

// Crie uma função matemática que retorne o perímetro de um quadrado. Lembrando: Perímetro é a soma dos quatro lados do quadrado 

function perimetroQuadrado(lado) { // lado = perímetro 
  return lado * 4; // = + lado + lado + lado + lado  
};
console.log(perimetroQuadrado(3)); // 12 

// Crie uma função que retorne o seu nome completeo. Ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) { 
  return `${nome} ${sobrenome}`; // = nome + ' ' + sobrenome 
};
console.log(nomeCompleto('Midna', 'Twilight')); // Midna Twilight

// Crie uma função que verifique se um número é par 

function isEven(numero) {
  var modulo = numero % 2; 
  if(modulo === 0) { // Se o módulo for diferente de zero
    return true;  // retorna true, é par
  } else {
    return false; 
  };
}; 
console.log(isEven(12)); // true 
console.log(isEven(27)); // false

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado; 
}; 
console.log(tipoDeDado(27)); // Number 
console.log(tipoDeDado('Midna')); // String 
console.log(tipoDeDado(null)); // Retorna Objeto 
console.log(tipoDeDado(undefined)); // Undefined 
console.log(tipoDeDado (function() {console.log('teste')})); // Function 


// addEventListener é uma função nativa do JavaScript
//O primeirp parâmetro é o evento que ocorre e o segundo o Callback 
//Utilize essa função para mostrar no console seu nome completo quando o evento 'scroll' ocorrer. 

addEventListener('scroll', function() { 
  console.log('Stephany Eloise');
});

// Alteração feita no index.html : li*100 

// Corrija o erro abaixo 

var totalPaises = 193; // Mover o var para fora da função, para que seja usada nas duas funções!

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`; 
};

function jaVisitei(paisesVisitados){
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países.`
};

console.log(precisoVisitar(20));
console.log(jaVisitei(20));