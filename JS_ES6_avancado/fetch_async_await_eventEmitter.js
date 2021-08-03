// FETCH - fazer requisitões HTTP
/*
fetch(endereco, {
  method: 'post', // default get
  body: JSON.stringify
}).then(responseStream =>
  responseStream.json()
).then(data => console.log(data)).catch(err => console.log(err)) // somente para erros de rede
*/


// ES7 - Async / Await 


const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12345);
  }, 1000)
})

const simpleFunc = async () => {
  //throw new Error('Oh no! Oh no!');
  const data = await asyncTimer();
  return data;
}

simpleFunc().then(data => console.log(data)).catch(err => console.log(err))

// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data)
  }
}

const users = new Users();

users.on('user logged', data => { // .once se quiser consumir apenas uma vez 
  console.log(data);
})

//emitter.emit('User logged', { user: 'aline martins' })

users.userLogged({ user: 'aline martins' })

//EventTarget (para browser) - se parece com eventListener