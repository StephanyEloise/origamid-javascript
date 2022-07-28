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
  nome: 'Midna';
}; 