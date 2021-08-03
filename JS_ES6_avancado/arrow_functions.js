// Arrow function 

// com apenas um argumento e retornando apenas uma linha
//let sum = a => a;

// com dois ou mais argumentos e mais linhas
let sum = (a, b) => {
  let soma = a + b;
  return soma;
};

// em casos de destructuring
sum = ({ a }) => a;

// em casos de hash operator
sum = (...a) => a;

// default values
sum = (a = 5) => a;

// retorno implícito de um objeto
let createObj = () => ({ test: 12 });

console.log(createObj())

// executando no contexto de onde são invocadas
let obj = {
  showContext: function showContext() {
    this.log('teste')

    setTimeout(() => {
      console.log(this)
    }, 1000)
  },
  log: function log(value) {
    console.log(value);
  }
};

obj.showContext();