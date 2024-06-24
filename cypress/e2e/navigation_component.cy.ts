describe('Navigation Component Tests', () => {
  it('Should render', () => {
    cy.visit('/');

    cy.get('h3').contains('Cool Chuck Norris Facts').should('exist');
    cy.get('button[data-testid="home"]').should('exist');
    cy.get('button[data-testid="random"]').should('exist');
    cy.get('button[data-testid="button that makes people rich when clicked"]').should('not.exist');
  });

  it('Should be able to access the Random Facts page when clicking on the Random button', () => {
    cy.visit('/');

    cy.get('button[data-testid="random"]').click();

    cy.url().should('include', '/random');
  });

  it('Should be able to access the Home page when clicking on the Home button', () => {
    cy.visit('/random');

    cy.get('button[data-testid="home"]').click();

    cy.url().should('include', '/');
  });
});
