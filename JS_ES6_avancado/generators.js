// generators

function* hello() {
  console.log('Hello')
  yield 1;
  console.log('From')
  yield 2;
  console.log('Function')
  const value = yield 3;
  console.log(value)
}

const it = hello();
console.log(it.next())
console.log(it.next())
console.log(it.next('olar'))

function* naturalNumbers() {
  let number = 0
  while (true) {
    yield number;
    number++;
  }
}

const numbers = naturalNumbers()

console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())


const obj2 = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i > this.values.length; i++) {
      yield this.values[i]
    }
  }
};

for (let value of obj2) {
  console.log(value)
}