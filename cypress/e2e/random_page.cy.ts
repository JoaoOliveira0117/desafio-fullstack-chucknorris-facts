describe('Random Fact Page Tests', () => {
  beforeEach(() => {
    cy.visit('/random');
  });

  it('Should render a random fact', () => {
    cy.get('h6').should('exist');
  });

  it('Should render a new random fact on reload', () => {
    // This is weird because it still has a minimal chance of breaking
    // because randomly the same fact could be returned twice.

    let fact: string;

    cy.get('h6').invoke('text').as('fact');

    cy.wait(1000);

    cy.get('@fact').then((text) => {
      fact = text as unknown as string;
    });

    cy.reload();

    cy.wait(1000);

    cy.get('h6')
      .invoke('text')
      .then((text) => {
        expect(text).not.to.equal(fact);
      });
  });
});
