/// <reference types='cypress'/>

describe('Waitings', () => {
  before('visit page', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });

  beforeEach('Reload page', () => {
    cy.reload();
  });

  it('Wait for element availability', () => {
    cy.get('#novoCampo').should('not.exist');
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo').should('not.exist');
    cy.get('#novoCampo').should('exist');
    cy.get('#novoCampo').type('funciona');
  });

  it('Retry', () => {
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo')
      // .should("not.exist")
      .should('exist');
  });

  it('Find', () => {
    cy.get('#buttonList').click();
    cy.get('#lista li').find('span').should('contain', 'Item 1');
    cy.get('#lista li span').should('contain', 'Item 2');
  });

  it('Timeout', () => {
    // cy.get("#buttonDelay").click();
    // cy.get("#novoCampo", { timeout: 1000 }).should("exist");

    cy.get('#buttonListDOM').click();
    cy.wait(5000);
    cy.get('#lista li span').should('contain', 'Item 2');
  });

  it('Should or Then', () => {
    cy.get('#buttonListDOM').then(($el) => {
      expect($el).to.have.length(1);
    });
    cy.get('#buttonList');
  });
});
