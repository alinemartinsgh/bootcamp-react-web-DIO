
/** IF, IF ELSE, ELSE IF */
const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é par`);
  } else {
    console.log(`O número ${item} é ímpar`);
  }
});

const arr = [2, 3, 4, 5, 6, 8, 10, 15]

console.log('\nelse if');
arr.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é divisível por 2.`);
  } else if (item % 3 === 0) {
    console.log(`O número ${item} é divisível por 3.`);
  } else if (item % 5 === 0) {
    console.log(`O número ${item} é divisível por 5.`);
  }
})

arr.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é divisível por 2.`);
  }
  if (item % 3 === 0) {
    console.log(`O número ${item} é divisível por 3.`);
  }
  if (item % 5 === 0) {
    console.log(`O número ${item} é divisível por 5.`);
  }
})

//** SWITCH */

const fruit = 'pera';

switch (fruit) {
  case 'banana':
    console.log('R$ 3,00 / kg');
    break;
  case 'mamão':
  case 'pera':
    console.log('R$ 2,00 / kg');
    break;
  default:
    console.log('Produto não existe no estoque');
    break;
}

// se quiser que o o default seja executado é só tirar o break