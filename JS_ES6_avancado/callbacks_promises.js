// PROMISES

/* 
 -- pode ter 3 status: 
 -> Pending: quando está em execução
 -> Fullfilled: quando concluiu a execução
 -> Rejected: quando aconteceu algum erro

*/

const doSomethingPromise = () => new Promise((resolve, reject) => {
  //throw new Error('Something went wrong');
  setTimeout(() => {
    //did something
    resolve('First data')
  }, 1500);
})

const doOtherThingPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    //did something
    resolve('Second data')
  }, 1000);
})

doSomethingPromise()
  .then(data => { console.log(data); return doOtherThingPromise() })
  .then(data2 => console.log(data2))
  .catch(err => console.log(err))

// para rodar em paralelo usar Promise.all

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => console.log("Promise All " + data)).catch(err => console.log(err))

//retorna a promise que resolver primeiro

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => console.log("Promise Race " + data)).catch(err => console.log(err))

// CALLBACK

function doSomething(callback) {
  setTimeout(() => {
    //did something
    callback('First data')
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(() => {
    //did other thing
    callback('Second data')
  }, 1000);
}

function doAll() {
  try {
    doSomething(function (data) {
      let processedData = data.split('');
      try {
        doOtherThing(function (data2) {
          let processedData2 = data2.split('');

          try {
            setTimeout(function () {
              console.log(processedData, processedData2)
            }, 1000)
          } catch (err) {
            //handle error
          }
        })
      } catch (err) {
        //handle error
      }
    })
  } catch (err) {
    //handle error
  }
}

doAll();