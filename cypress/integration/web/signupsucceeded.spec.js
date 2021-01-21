/// <reference types="cypress" />

context('sign up succeeded', () => {
  beforeEach(() => {
    cy.visit('https://money-college-dev.firebaseapp.com/')
  });

it('can move to sign up page', () => {
  cy.get('.sc-fzoOEf').click();
  cy.url().should('include', '/sign-up');
});

it('move to terms of searvice page', () => {
  cy.get('.sc-fzoOEf').click();
  cy.url().should('include', '/sign-up');
  cy.get('[href="/terms-of-services"]').click();
  cy.url().should('include', '/????'); //URLがわからない
  //閉じるボタンの機能テスト
});

it('move to privacy policy page', () => {
  cy.get('.sc-fzoOEf').click();
  cy.url().should('include', '/sign-up');
  cy.get('[href="/privacy-policy"]').click();
  cy.url().should('include', '/????'); //URLがわからない
  //閉じるボタンの機能テスト
});

it('check in check box disappear if user click the check box for mail magazin', () => {
  cy.get('.sc-fzoOEf').click();
  cy.url().should('include', '/sign-up');
  cy.get('.sc-fznLPX').check();
  




it('sign up succeeded', () => {
  cy.get('.sc-fzoOEf').click();
  

});
})
