const Math = require('../src/math.js')
const assert = require('assert')
const expect = require('chai').expect
const sinon = require('sinon')

let value = 0

describe('Math class', function () {
  //hooks
  beforeEach(function () {
    value = 0;
  })

  it('Sum two numbers', function (done) { //indicado usar function e não arrow para ter controle sobre o escopo
    const math = new Math();
    this.timeout(3000); // padrão 2000

    value = 5;

    //throw new Error('you shall not pass')
    math.soma(value, 5, (value) => {
      ///assert.equal(value, 10);
      expect(value).to.equal(10);
      done();
    });
  });
  //it.only executa apenas esse teste ou pode utilizar o .skip para "pular"
  it('Multiply two numbers', function () {
    const math = new Math();
    const obj = {
      name: 'Aline'
    }
    const obj2 = {
      name: 'Aline'
    }

    expect(obj).to.deep.equal(obj2) //comparação profunda dos valores
    //expect(obj).to.have.property('name').to.equal('Aline M')
    //assert.equal(math.multiply(value, 5), 0)
    //expect(math.multiply(value, 5)).to.equal(0)
  });

  it.only('Calls req with sum and index value', function () {
    const req = {};
    const res = {
      //load: sinon.spy()
      load: function load(){
        console.log('Called')
      }
    };
    //sinon.spy(res, 'load')
    sinon.stub(res, 'load').returns('qlqr coisa')

    const math = new Math();

    math.printSum(req, res, 5, 5);
    //expect(res.load.calledOnce).to.be.true;
    //expect(res.load.args[0][1]).to.equal(10)

    expect(res.load.args[0][0]).to.equal('index')
  })
});