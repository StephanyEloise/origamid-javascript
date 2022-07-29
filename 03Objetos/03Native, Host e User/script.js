/* Native 
Objetos nativos são aqueles definidos na especificação da
linguagem e são implementados independente do host. */ 

// Construtores de objetos nativos 
Object 
String
Array 
Function 

/* Host 
Objetos do host são aqueles implementados pelo próprio ambiente. 
Por exemplo, no browser possuímos objetos do DOM, como DomList,
HTMLCollection e outros. Em Node.js os objetos do Host 
são difeentes, já que não estamos em um ambiente do browser. */ 

// Objetos do browser 
NodeList
HTMLCollection
Element 

/* User 
Objetos do user, são objetos definidos pelo seu aplicativo. Ou
seja, qualquer objeto que você criar ou que importar de alguma 
biblioteca externa. */ 

const Pessoa = {
  nome: 'Midna'
};

/* Bibliotecas 
Bibliotecas como jQuery foram criadas para resolver o problema de 
inconsistência entre browsers e adicionar funcionalidades que
não existiam nativamente. A padronização dos browsers e a 
implementação de soluções nativas, torna as mesmas obsoletas. */ 

$('a').addClass('ativo');
$('a').hide(); 
$('a').show();

/* Verificar se Existe 
O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando
não for undefiend quer dizer que existe. */

if(typeof Array.from !== "undefined"); 
if(typeof NodeList !== "undefined"); 

// Exercócios 

// Liste 5 objetos nativos 

String 
Number 
Object 
Array
Function

// Liste 5 objetos do browser 

HTMLCollection
NodeList
Window
History 
Document

// Liste 2 Métodos, Propriedades ou Objetos 
// presentes no Chrome que não existem no Firefox 

if(typeof document.webitVisibilityState !== "undefined") {
  console.log('Existe');
} else {
  console.log('Não existe');
};

