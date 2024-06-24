describe('Fact Id Page Tests', () => {
  it('Should be able to access a fact by clicking on it', () => {
    cy.visit('/');
    cy.get("input[name='search']").type('cat');
    cy.get("button[type='submit']").click();

    cy.get('h6').eq(0).click();
  });

  it('Should not be able to access a non existent fact', () => {
    cy.visit('/123');

    cy.get('p').contains('No facts found').should('exist');
  });
});
