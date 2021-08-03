// Com promise (sem async await)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('end'), 5000)
})

console.log('Begin')
promise.then((text) => console.log(text))
//Or
promise.then(console.log)
//Or
promise.then(
  (res) => setTimeout(() => console.log(res), 5000),
  (rej) => console.error(rej)
)

  // IIFE - imediatly invocad function expression
  // o async torna o retorno de uma função automaticamente uma promise
  (async function () {
    console.log('Begin')

    const text = await promise
    console.log(text)
  })()

const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

  (async function () {
    const result = await coinFlip.then(result => `O resultado é ${result}`)

    new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('foi o/'))
  })()