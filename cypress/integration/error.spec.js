it('nada aqui', () => {

});

it('a function test', function () {
  console.log('Function', this);
});

it('an arrow test', () => {
  console.log('Arrow', this);
});

// function soma(a, b) {
//     return a + b
// }

// const soma = function(a, b) {
//     return a + b
// }

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a, b) => a + b;

// const soma = a => a + a

const soma = () => 5 + 13;

console.log(soma(1, 10));
