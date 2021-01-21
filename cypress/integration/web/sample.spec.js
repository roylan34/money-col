/// <reference types="cypress" />

context('Sample', () => {
  beforeEach(() => {
    cy.visit('https://money-college-dev.firebaseapp.com/')
  });

  it('sample', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  });
})
