const prop2 = 'Digital'
const prop3 = 'teste'

const obj = {
  prop1: 'DIO',
  prop2, // não precisa escrever novamente, funciona para métodos tb
  [prop3 + 'concat']: 'prop value',
  sum(a, b) {
    return a + b;
  }
};

console.log(obj)


