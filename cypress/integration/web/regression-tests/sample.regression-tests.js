/// <reference types="cypress" />

context('log in', () => {
  it('can lohin with proper mail address and pssword', () => {
    cy.visit('https://money-college-dev.firebaseapp.com/login');
    cy.compareSnapshot('login', 0.0);
    cy.compareSnapshot('login', 0.1);
  });
})
