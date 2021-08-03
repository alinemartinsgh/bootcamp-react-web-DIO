/** FILTER */
// Cria um novo array com todos os elementos que passaram no teste da função fornecida

const pets = [
  {
    name: 'dora',
    type: 'dog',
    age: 3,
    weight: 8
  },
  {
    name: 'gulp',
    type: 'fish',
    age: 1,
    weight: 0.01
  },
  {
    name: 'mimi',
    type: 'cat',
    age: 5,
    weight: 5
  },
  {
    name: 'feijão',
    type: 'dog',
    age: 1,
    weight: 10
  },
  {
    name: 'nino',
    type: 'bird',
    age: 4,
    weight: 0.05
  },
  {
    name: 'matheus',
    type: 'cat',
    age: 6,
    weight: 8
  },
];

const menorQueCinco = num => num < 5

//const newPets = pets.filter(pet => pet.age < 5)
const newPets = pets.filter(({ age }) => menorQueCinco(age)) // com função externa

console.log("FILTER");
console.log(pets);
console.log(newPets);

/** MAP */
// Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de itens

console.log("\nMAP");
console.log(pets);
const petNames = pets.map(pet => pet.name)
console.log(petNames);

// diferença de fazer com foreach
console.log("\nFOREACH")

const petNamesForEach = [];
pets.forEach(pet => petNamesForEach.push(pet.name));
console.log(petNamesForEach);

/** REDUCE */
// Executa uma função para cada elemento retornando um único valor de retorno
console.log("\nREDUCE")

const idade = pets.reduce((ages, pet) => ages += pet.age, 0)
console.log(idade)

//retornando um objeto
const petsIdadePeso = pets.reduce((total, pet) => {
  return {
    totalAge: total.totalAge + pet.age,
    totalWeight: total.totalWeight + pet.weight,
  }
}, { totalAge: 0, totalWeight: 0 });

console.log(petsIdadePeso);

// FILTER + REDUCE
console.log('\nFILTER + REDUCE')

const dogWeight = pets
  .filter(pet => pet.type === 'dog')
  .reduce((totalWeight, pet) => totalWeight += pet.weight, 0);

console.log(dogWeight);

// MAP + PROMISE
console.log('\nMAP + PROMISE')

const items = ['a', 'b', 'c', 'd'];

; (async function () {
  const promiseFunction = async (element) => {
    return new Promise((resolve, reject) => {
      return resolve(`${element} - promise`)
    })
  }

  const itemMappedPromises = items.map(promiseFunction);
  const itemMapped = await Promise.all(itemMappedPromises);

  console.log(itemMapped)
  //const itemMapped = promiseFunction('x')
  //console.log(await itemMapped)

})()