// atribuindo valor padrão caso esqueça de informar o parâmetro, pode atribuir um parâmetro também(a ordem é importante)

function multiply(a, b = 1) {
  return a * b
}

//lazy evaluation

function randomNumber() {
  console.log("generating number...")
  return Math.random() * 10;
}

function multiplicacao(a, b = randomNumber()) {
  return a * b;
}

console.log(multiplicacao(3))
console.log(multiplicacao(3, 5))