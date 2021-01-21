/// <reference types="cypress" />

context('login and logout', () => {
  beforeEach(() => {
    cy.visit('https://money-college-dev.firebaseapp.com/')
  });

  it('can lohin with proper mail address and pssword', () => {
    cy.get(':nth-child(1) > .sc-fzoYHE').type('trump888@yopmail.com');
    cy.get(':nth-child(2) > .sc-fzoYHE').type('test12345');
    cy.get('.sc-fzqMAW').click();
    cy.url().should('include', '/home');
  });

  it('can logout by pushing the logout button', () => {
    cy.get('sc-Axmtr hvJMgY').trigger('mouseover');
    cy.get('sc-zoyAV fQsatj').click();
    //ログアウトボタンの位置情報未取得
    cy.url().should('include','/login');
  });
})
