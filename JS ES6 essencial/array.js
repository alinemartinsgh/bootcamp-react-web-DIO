const users = ['Bruno', 'Dora', 'Aline'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN
  }
]

console.log('Itens:', persons.length);
console.log('A variável persons é um array:', Array.isArray(persons))

//Iterar os itens do array
persons.forEach(person => console.log(`Nome: ${person.name}`))

// FLAT - retorna um novo array com todos os elemtnos de um subarray concatenados de forma recursiva de acordo com a profundidade espeficada
const arrFlat = [1, 2, 3, [4, 5]]
const arrFlatJunt = arrFlat.flat()
console.log("Flat " + arrFlatJunt)

// FLATMAP - retorna um novo array assim como a função map e executa o flat de profundidade 1
arrFlatJunt.flatMap(value => [value * 2])
arrFlatJunt.flatMap(value => [[value * 2]])

// Keys - retorna um array iterator que contém as chaves para cada elemento do array
const arrIterator = arrFlatJunt.keys();

// Values - retorna um array iterator que contém os valores para cada elemento do array
arrFlatJunt.values()

// Entries - retorna um array iterator que contém os pares chave/valor para cada elemento do array
const iterator = arrFlatJunt.entries()
console.log(iterator.next())

// Filtrar um array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'
  return person
})

console.log('\nPessoas com adição do course:', personsWithCourse);

//Transformar array em outro tipo
//recebe como primeiro parâmetro uma função e segundo parâmetro o value inicial do que será retornado(no caso abaixo recebeu 0 e será retornado um number)
//a função recebe dois parâmetros: o primeiro é a variável que será retornada, o novo tipo. No caso do exemplo abaixo é o age. O segundo parâmetro da função é o item que está iterando (no caso abaixo, person)
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma das idades das pessoas', totalAge)

//Juntando operações
const totalEvenAges = persons.filter(person => person.age % 2 === 0).reduce((age, person) => {
  age += person.age;
  return age;
}, 0)

console.log('\nSoma de idades das pessoas que posuem idade par', totalEvenAges);

// outras formas de criar array
const arrOf = Array.of('John', 'Cris', 'Jenny')
console.log(arrOf)

const arrEmpty = Array(3) // array de 3 itens, porém vazio
const arr2 = Array(3, 2)
console.log(arrEmpty, arr2)

// Array.from  - transforma uma nodeList em array(para poder usar shift, pop... )

// INSERIR ELEMENTOS
const arr = [1, 2, 3, 4, 5]
arr.push(6) // adiciona ao final
arr.unshift(0) // adiciona no início

console.log(arr);

// REMOVER ELEMENTOS
arr.pop() // remove o último item da lista
arr.shift() // remove o primeiro item

console.log(arr);

// CONCAT - concatena um ou mais itens retornando um novo array

const fruits = ['apple', 'pineapple', 'banana']

const tudoJunto = users.concat(fruits);
console.log(tudoJunto)

// SLICE - "fatia" retornando um novo array de acordo com início e fim 

const separa = tudoJunto.slice(0, 3); // inicio e fim // se informar apenas um parâmetro ele vai considerar o início
console.log(separa)

// SPLICE - altera um array adicionando novos elementos enquanto remove elementos antigos
// o primeiro parâmetro é o início, o segundo é a quantidade de itens que serão removidos e o terceiro é o que será adicionado 
fruits.splice(0, 0, 'strawberry')
console.log(fruits)
fruits.splice(2, 1, 'tomato')
console.log(fruits)

// FIND - buscar elementos: retorna o primeiro elemento que satisfaz a condição

console.log(fruits.find(value => value === 'apple'));

// FINDINDEX - buscar elementos: retorna o índice do primeiro elemento que satisfaz a condição
console.log(fruits.findIndex(value => value > 0));

// INDEXOF - retorna o primeiro índice em que um elemento pode ser encontrado em um array
console.log(fruits.indexOf('apple'));

// LASTINDEXOF - retorna o último índice em que um elemento pode ser encontrado em um array
console.log(fruits.lastIndexOf('tomato'));

// INCLUDES - retorna um booleano verificando se um item existe no array
console.log(fruits.includes('banana'))

// SOME - retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
arr.some(value => value % 2 === 0); // true

// EVERY - retorna um booleano verificando se todos os itens de um array satifazem a condição
arr.every(value => value % 2 === 0); // false

// SORT - ordena os elementos de um array de acordo com a condição 
console.log(persons.sort((current, next) => current.age - next.age));

// REVERSR - inverte os elementos de um array 
console.log(arr.reverse())

// JOIN - junta todos os elementos de um array, separados por um delimitador e retorna uma string
console.log(arr.join('-'));