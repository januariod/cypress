/// <reference types='cypress'/>

describe('Cypress basic', () => {
  it('Should visit a page and assert title', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');

    // cy.title().debug().should('be.equal', 'Campo de Treinamento')
    // cy.pause()

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo');

      let syncTitle;

    cy.title().then((title) => {
      console.log(title);

      cy.get('#formNome').type(title)

      syncTitle = title
    });

    cy.get('[data-cy=dataSobrenome]').then($el => {
      $el.val(syncTitle)
    })

    cy.get('#elementosForm\\:sugestoes').then($el => {
      cy.wrap($el).type(syncTitle)
    })
  });

  it('Should visit page and interactive with element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');

    cy.get('#buttonSimple').click().should('have.value', 'Obrigado!');
  });
});
