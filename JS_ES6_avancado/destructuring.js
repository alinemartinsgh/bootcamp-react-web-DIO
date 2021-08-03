let arr = ['apple', 'banana', 'orange', ['Tomato']];

let [apple, banana, orange, [tomato]] = ['apple', 'banana', 'orange', ['Tomato']];

console.log(tomato)

const obj = {
  nome: 'Celso',
  idade: 30,
  props: {
    age: 35,
    favoriteColors: ['black', 'blue']
  }
}

const { nome } = obj
const { props: { age, favoriteColors: [color1, color2] } } = obj

console.log(nome);
console.log(age);
console.log(color1);

// functions

function sum([a, b]) { // com default values sum([a, b] = [0, 0])
  return a + b
}

console.log(sum([5]));