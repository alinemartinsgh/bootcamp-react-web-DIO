// Exemplo de FACTORY

function FakeUser() {
  return {
    name: 'Aline',
    lastName: 'Martins'
  }
}

const user = FakeUser();

function Person(customProperties) {
  return {
    name: 'Aline',
    lastName: 'Martins',
    ...customProperties
  }
}

const person1 = Person({ name: 'Custom Name', age: 31 })
console.log(person1)

// Exemplo de SINGLETON

function Fruta() {
  if (!Fruta.instance) {
    return Fruta.instance = this;
  }
  return Fruta.instance;
}

const apple = Fruta.call({ name: 'apple' })
const pineapple = Fruta.call({ name: 'pineapple' })

console.log(apple); // retorna apple
console.log(pineapple); // retorna apple

// Exemplo de DECORATOR sem sintaxe de decorator

let loggedIn = true;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn(); // executa se loggedIn for true
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)))

// Exemplo de OBSERVER

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data))
  }
}

const o = new Observable();
const logData1 = data => console.log(`Subscribe 1: ${data}`)
const logData2 = data => console.log(`Subscribe 2: ${data}`)
const logData3 = data => console.log(`Subscribe 3: ${data}`)


o.subscribe(logData1)
o.subscribe(logData2)
o.subscribe(logData3)

o.notify('notified 1')

o.unsubscribe(logData3)

o.notify('notified 1')

// Exemplo MODULE

