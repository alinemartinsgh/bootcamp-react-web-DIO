class Animal {
  constructor() {
    this.qtdePatas = 0;
  }

  movimentar() { }
}

class Cachorro extends Animal {
  constructor(morde) {
    super();
    this.qtdePatas = 4;
    this.morde = morde;
  }

  latir() {
    console.log('Au! au!')
  }
}

const pug = new Cachorro(false)

console.log(pug);

class Person {
  #name = ''; // privado

  constructor(initialName) {
    this.#name = initialName;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  static walk(){
    console.log('walking...')
  }
}

const p = new Person('Aline')

console.log(p);
console.log(p.name);
p.name = 'Dora'
console.log(p.name);
console.log(Person.walk())