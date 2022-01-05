/// <reference types='cypress'/>

describe("Work with basic elements", () => {
  before("visit page", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach("Reload page", () => {
    cy.reload();
  });

  it("Text", () => {
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });

  it("Link", () => {
    // cy.get("a").click()
    // cy.get("#resultado").should("have.not.text", "Voltou!")
    cy.contains("Voltar").click();

    cy.get("#resultado").should("have.text", "Voltou!");
  });

  it("TextField", () => {
    const testString = "Cypress Test";

    cy.get("#formNome").type(testString).should("have.value", testString);

    cy.get("[data-cy=dataSobrenome]")
      .type("testes{backspace}")
      .should("have.value", "teste");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("teste{selectAll}test", { delay: 100 })
      .should("have.value", "test");

    cy.get(
      "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input"
    )
      .type(testString)
      .should("have.value", testString);
  });

  it("Radio", () => {
    cy.get("#formSexoFem").click().should("be.checked");

    cy.get("#formSexoMasc").should("not.be.checked");

    cy.get("[name=formSexo]").should("have.length", 2);
  });

  it("Checkbox", () => {
    cy.get("#formComidaPizza").click().should("be.checked");

    cy.get("[name=formComidaFavorita]")
      .click({ multiple: true })
      .should("be.checked");

    cy.get("#formComidaPizza").should("not.be.checked");
    cy.get("#formComidaCarne").should("be.checked");
  });

  it("Combo box", () => {
    cy.get("[data-test=dataEscolaridade]")
      .select("2o grau completo")
      .should("have.value", "2graucomp");

    cy.get("[data-test=dataEscolaridade] option").should("have.length", 8);

    cy.get("[data-test=dataEscolaridade] option").then(($arr) => {
      const values = [];
      $arr.each(function () {
        values.push(this.innerHTML);
      });

      expect(values).to.include.members(["Superior", "Mestrado"]);
    });
  });

  it.only("Multi combo box", () => {
    cy.get("[data-testid=dataEsportes]").select(["natacao", "Corrida", "nada"]);

    cy.get("[data-testid=dataEsportes]").then(($el) => {
      expect($el.val()).to.be.deep.equal(["natacao", "Corrida", "nada"]);
      expect($el.val()).to.have.length(3);
    });

    cy.get("[data-testid=dataEsportes]")
      .invoke("val")
      .should("eql", ["natacao", "Corrida", "nada"]);
  });
});
