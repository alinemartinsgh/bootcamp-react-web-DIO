// HERANÇA

const myText = 'Hello prototype!';
console.log(myText.__proto__.split === String.prototype.split) // retorna true
console.log(myText.constructor === String) //retorna true

'use strict'

/* function Animal() {
  this.qtdePatas = 4;
}

function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
  this.latir = function () {
    console.log('Au! au!');
  }
}

const cachorro = new Animal();
const pug = new Cachorro(false);
const pintcher = new Cachorro(true);

console.log(cachorro.qtdePatas);
console.log(cachorro instanceof Animal); // true
console.log(cachorro instanceof Function); // false
console.log(pug); // Cachorro { qtdePatas: 4, morde: false} */

function Animal() { }

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () { };

function Cachorro(morde) {
  this.qtdePatas = 4;
  this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () {
  console.log('Au! au!');
}

const pug = new Cachorro(false);
const pinstcher = new Cachorro(true);

console.log(pug.prototype)

function Pessoa(name) {
  this.name = name;

  return {
    name: 'Teste'
  }
}

const p = new Pessoa('Aline')

console.log(p.name);

/** MODIFICADORES DE ACESSO */

function Person(initialName) {
  let name = initialName; // privado

  this.getName = function () {
    return name;
  }

  this.setName = function (newName) {
    name = newName;
  }

  this.walk = function(){
    console.log('walking...')
  }
}

const p1 = new Person('Aline')

console.log(p1)

console.log(p1.getName()); // Aline
console.log(p1.name) // undefined
p1.setName('Dora')
console.log(p1.getName()); // Dora