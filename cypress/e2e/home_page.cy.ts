describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have search bar', () => {
    cy.get("input[name='search']").should('have.attr', 'placeholder', 'Fact keywords here');
    cy.get("button[type='submit']").should('have.text', 'Search');
  });

  it('Should be able to search', () => {
    cy.get("input[name='search']").type('test');
    cy.get("button[type='submit']").click();
  });

  it('Should be able to see results', () => {
    cy.get("input[name='search']").type('cat');
    cy.get("button[type='submit']").click();

    cy.get('h6').contains('cat').should('exist');
  });

  it('Should not be able to see results if search query returns empty', () => {
    cy.get("input[name='search']").type('TOTTALLY_GIBBERISH_TO_CAUSE_API_TO_RETURN_EMPTY_RESPONSE');
    cy.get("button[type='submit']").click();

    cy.get('h6').should('not.exist');
    cy.get('p').contains('No facts found').should('exist');
  });
});
