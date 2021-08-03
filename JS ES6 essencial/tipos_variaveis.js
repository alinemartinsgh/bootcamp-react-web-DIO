/* Tipos e Variáveis */

/* string, number, boolen, null, undefined, symbol, object, function, array*/

// STRING

const textSize = 'Texto'.length;
console.log(`Quantidade de letras ${textSize}`);

const splittedText = 'Text'.split('x');
console.log("\nArray com as posições separadas pelo delimitador ", splittedText);

const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(`\nSubstituição de valor ${replacedText}`);

const lastChar = 'Texto'.slice(-1)
console.log(`\nÚltima letra de uma string ${lastChar}`);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última ${allWithoutLastChar}`);

const secontToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra até a última ${secontToEnd}`);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nAs duas primeiras letras são: ${twoCharsBeforeFirstPos}`);


// NUMBER
const myNumber = 12.4032;


const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais ${fixedTwoDecimals}`);

// OBJECT

let user = {
  name: 'aline'
}

//alterar propriedade
user.name = 'outro nome';
user['name'] = 'outro outro nome'

const prop = 'name';
user[prop] = 'mais outro nome'


function getProp(prop) {
  return user[prop]
}

//criar propriedade
user.lastName = 'martins'

//deletar usuário
delete user.name;

const person = {
  name: 'aline',
  lastName: 'martins'
}

console.log('\nValores das propriedades do objeto person:', Object.values(person));
console.log('\nLista de propriedades e valores:', Object.entries(person));

//Mergear propriedades de um objeto
Object.assign(person, { fullName: 'Aline P Martins' });

console.log('\nAdiciona a propriedade fullName no objeto Person', person);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, person, { age: 32 }));

//previne TODAS as alterações em um objeto

const newObj = { foo: 'bar' }
Object.freeze(newObj)

newObj.foo = 'changes' // não vai rolar
delete newObj.foo // não vai rolar
newObj.bar = 'foo' // não vai rolar

console.log('\n Variávl newObj após alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const persona = {
  name: 'aline'
}
Object.seal(persona);

persona.name = 'martins';
delete persona.name;
persona.age = 26;

console.log('\nVariável persona após modificações:', persona);

//SYMBOL

const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades

const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user3 = {
  [nameSymbol1]: 'Bruno',
  [nameSymbol2]: 'Aline',
  lastName: 'Martins'
}

console.log(user3)

//criam propriedades que não são enumerabes

for (const key in user3) {
  if (user3.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user3[key]}`);
  }
}

console.log('Propriedades do objeto user3:', Object.keys(user3));
console.log('Valores das propriedades do objeto user3: ', Object.values(user3));

console.log('Symbols registrados no objeto user3: ', Object.getOwnPropertySymbols(user3))
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user3));

const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
};