class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}
try {
  //console.log(name)
  const name = 'Aline M'
  const myError = new CustomError({
    message: 'You shall not pass', data: {
      type: 'Server error'
    }
  })

  throw myError
} catch (err) {
  if (err.data.type === 'Server error') {
    console.log(err.data)
  }
} finally {
  console.log('keep going...')
}

//Debbuging console

console.log('Black text')
console.warn('Yellow text with alert')
console.error('Red error text')

console.trace();

console.group('My group')
console.log('Info inside group')
console.log('More info inside group')
console.groupEnd('My group')

console.time('Log time')
setTimeout(() => {
  console.timeEnd('Log time')
}, 2000)

console.table(['Aline m', 'Digital innovation One']);
console.log('%c styled log', 'color: blue, font-size: 40px')
console.assert(1 === 0, 'ooops')
