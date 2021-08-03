// Antes do ES6

function sum(a, b) {
  var value = 0

  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i]
  }

  return value;
}

console.log(sum(5, 5, 10, 8, 9))

//depois do ES6 - rest operator

function soma(...args) { // também pode passar outros agumentos (a, b, ...args), porém não inclui os argumentos anteriores
  return args.reduce((acc, value) => acc + value, 0)
}

console.log(soma(5, 5, 10, 8, 9))


const multiply = (...args) => args.reduce((acc, value) => acc * value, 1) // ...args transforma os argumentos em um array

// spread operator: pode ser utilizados em strings, arrays, objetos literais e objetos iteráveis

const soma2 = (...args) => {
  return multiply(...args) // vai transformar todos os itens do array e transformar em parâmetros
}

const str = 'Digital Innovation One';

function LogArgs(...args) {
  console.log(args)
}
LogArgs(...str)

const arr = [1, 2, 3]

const arr2 = [4, 5, 6]

const junt = [...arr, ...arr2]

console.log(junt);

const obj = {
  teste: 123
}

const obj2 = {
  ...obj,
  teste2: 'olar'
}

