function fn() {
  return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  //mais de uma expressão
  return 'Code here'
}
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

fn.prop = 'Posso criar propriedades, pois funções tb são objetos'; // não muito utilizado

console.log(fn());
console.log(fn.prop);
logFnResult(fn)

//Receber e retornar funções
//const controlFnExecu => fnParam => allowed =>
const controlFnExecu = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controlFnExecu(fn);
handleFnExecution(true) // Executará a função fn
handleFnExecution(); // Não executará a função fn

function controlFnExec(fnParam) {
  return function (allowed) {
    if (allowed) {
      fn.fnParam();
    }
  }
}

this.name = 'Nome do contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
  return this.name
}

const user = {
  name: 'Nome do objeto de execução',
  getNameArrowFn, // quando a chave e o valor são iguais, a atribuição de propriedade pode ser assim
  getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());