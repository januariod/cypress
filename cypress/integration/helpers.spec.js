/// <reference types='cypress'/>

describe('Helpers', () => {
  it('Wrap', () => {
    const obj = { nome: 'Daniel', Idade: 20 };
    expect(obj).to.have.property('nome');
    cy.wrap(obj).should('have.property', 'nome');

    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#formNome').then(($el) => {
      // $el.val('via jquery funciona, mas não exibe o log no cypress')
      cy.wrap($el).type('Escreveu alguma coisa?');
    });
  });

  it('Wrap and Promise', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');

    const testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });

    cy.get('#buttonSimple').then(() => console.log('Primeiro botão'));

    // testPromise.then((num) => console.log(num));

    cy.wrap(testPromise).then((num) => console.log(num));

    cy.get('#buttonLazy').then(() => console.log('Segundo botão'));
  });

  it('Wrap with should', () => {
    cy.wrap(1);
    // .should((num) => {
    //   return 2;
    // })
    // .should("be.equal", 2);

    cy.wrap(1)
      .then((num) => 2)
      .should('be.equal', 2);
  });

  it('Its', () => {
    const obj = { nome: 'Daniel', Idade: 20 };
    cy.wrap(obj).its('nome').should('be.equal', 'Daniel');

    const obj2 = {
      nome: 'Daniel',
      Idade: 20,
      endereco: { rua: 'Rua dos Testes' },
    };

    cy.wrap(obj2).its('endereco').should('have.property', 'rua');
    cy.wrap(obj2).its('endereco').its('rua').should('contain', 'Testes');
    cy.wrap(obj2).its('endereco.rua').should('be.equal', 'Rua dos Testes');

    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.title().its('length').should('be.equal', 20);
  });

  it('Invoke', () => {
    const getValue = () => 1;
    const soma = (a, b) => a + b;

    cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1);

    cy.wrap({ fn: soma }).invoke('fn', 10, 11).should('be.equal', 21);

    cy.get('#formNome').invoke('val', 'Texto via invoke');

    cy.window().invoke('alert', 'Da pra ver?');

    cy.get('#resultado')
      .invoke('html', '<input type="button" value="Teste botão"/>');
  });
});
