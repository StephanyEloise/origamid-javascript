/*OBJECT
Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.*/ 

const carro1 = {
  marca: 'Ford',
  ano: 2018,
};

const pessoa = new Object({
  nome: 'André',
  idade: 28,
});


/*MÉTODOS DE OBJECT
Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.*/ 

const carro2 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro2);
honda.init('Honda').acelerar();

/*OBJECT.ASSIGN()
Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.*/

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto1 = {
  rodas: 2,
  capacete: true,
}

const carro3 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto1, funcaoAutomovel);
Object.assign(carro3, funcaoAutomovel);

/*OBJECT.DEFINEPROPERTIES()
Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.*/ 

const moto2 = {}
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto2.rodas = 4;
delete moto2.capacete;
moto2;
// {rodas: 2}

// Existe também o Object.defineProperty, para uma propriedade única.

/* GET E SET
É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada. */

const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade;
// Velocidade 200

/*OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.*/ 

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade