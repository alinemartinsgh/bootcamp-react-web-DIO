// symbols: uma maneira de gerar um identificador único

const uniqueId = Symbol('Hello');//valor atribuido não está ligado ao valor de fato
const uniqueId2 = Symbol('Hello');//valor atribuido não está ligado ao valor de fato

console.log(uniqueId === uniqueId2) // retorna false

const obj = {
  [uniqueId]: 'Hello'
}

//Well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let value of arr) {
  console.log(value)
}

const str = 'Digital Inovation One'


const obj2 = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0

    return {

      next: () => {
        i++;
        value: this.value[i - 1]
        done: i > this.values.length
      }
    }
  }
}

