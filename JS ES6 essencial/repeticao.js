/** FOR */

const array = ['one', 'two', 'three']

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(`Element #${index}: ${element}`);
}

/** WHILE */

var n = 0;
var x = 0

while (n < 3) {
  n++;
  x += n;
}

console.log(x);

/** DO WHILE */

let i = 0;

do {
  i += 1;
  console.log(i)
} while (i < 5)

/** FOR IN */

let arr = [3, 5, 7];
arr.foo = "hello";

// índice
for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

//value
for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}

console.log(arr.foo) // "hello"

// BREAK

console.log('Exemplo da utilização de break');

var index = 0;

while (true) {
  index++

  if (index > 2) {
    break
  }

  console.log(index)
}


// CONTINUE

console.log('\nExemplo da utilização de continue');

const arr2 = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];

  if (element % 2 === 0) {
    continue;
  }

  console.log(element)
}