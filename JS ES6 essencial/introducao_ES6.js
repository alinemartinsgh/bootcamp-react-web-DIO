/*-> Curryng: técnica de transformar uma função com 'n' parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro retorna uma função

ex.:  
** Sem Curryng **/

function soma(a, b) {
  return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

/** com Curryng **/

function soma(a) {
  return function (b) {
    return a + b
  }
}

const soma2 = soma(2);

soma2(2);
soma2(3);
soma2(4);
soma2(5);

/* -> Hoisting: levantar ou suspender algo. As declarações tanto de variáveis quanto de funções são elevadas ao escopo em que elas estão. Hoisting de variável só eleva a criação da variável e não a atribuição. A função é elevada como um todo.

** Hoisting de variáveis ** */

function fn() {
  console.log(text); //retorna undefined

  var text = "Exemple";

  console.log(text)
}

fn()

/** Hoisting de função **/

function fn2() {
  log('Hoisting de função');

  function log(value) {
    console.log(value)
  }
}

fn2();

/** IMUTABILIDADE 
 * -> em linguagens funcionais, os dados são imutáveis. Se você precisa mudar é necessário criar um novo. Ex.: array e objetos
*/

const user = {
  name: 'Aline',
  lastName: 'Martins'
};

function getUserWithFullName(user) {
  return {
    ...user, //spread operator
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);
console.log(user)

const students = [
  {
    name: 'Grace',
    grade: 7
  },
  {
    name: 'Jennifer',
    grade: 4
  },
  {
    name: 'Paul',
    grade: 10
  }
];


function getApprovedStudents(studentList) {
  return studentList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados: ')
console.log(getApprovedStudents(students));

console.log('\nLista de alunos');
console.log(students);


/** Tipos e variáveis */

//VAR

var test = 'example';

(() => {
  console.log(`Valor dentro da função "${test}"`); // undefined

  if (true) {
    var test = 'cabeça';
    console.log(`Valor dentro do if "${test}"`) // cabeça
  }

  console.log(`valor após a execução do if "${test}"`) // cabeça
})(); // para rodar a função

//LET

(() => {
  let test = 'valor função';
  console.log(`Valor dentro da função "${test}"`); // valor função

  if (true) {
    let test = 'cabeça';
    console.log(`Valor dentro do if "${test}"`) // cabeça
  }

  console.log(`valor após a execução do if "${test}"`) // valor função

})();

//CONST

(() => {
  const test = 'valor função';
  console.log(`Valor dentro da função "${test}"`); // valor função

  if (true) {
    const test = 'cabeça';
    console.log(`Valor dentro do if "${test}"`) // cabeça
  }

  console.log(`valor após a execução do if "${test}"`) // valor função

})();


// não pode alterar o valor
const name = 'aline';

//mas se for um objeto, podemos alterar duas propriedades (se não estiver congelado). Porém não podemos fazer o objeto 'apontar' para outro lugar
const user2 = {
  name: 'aline'
} 

user2.name = 'qlqr outro nome'

//pode adicionar ou remover itens. Ou mesmo alterar diretamente
const persons = ['guilherme', 'pedro', 'jennifer'];

persons.push('joão')
persons.shift();
persons[1] = 'aline'

console.log(`\n Array após mofificações ${persons}`);

