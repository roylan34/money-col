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
  cy.url().should('include','/terms-of-services'); 
  //URLは実際のHPから取ってきている→機能する
  //閉じるボタンの位置情報はどう取ってくるか？
});

it('move to privacy policy page', () => {
  cy.get('.sc-fzoOEf').click();
  cy.url().should('include', '/sign-up');
  cy.get('[href="/privacy-policy"]').click();
  cy.url().should('include','/privacy-policy'); 
  //URLは実際のHPから取ってきている→機能する
  //閉じるボタンの位置情報はどう取ってくるか？
});
//ここから11/25スタート
//チェックボックスのはずし方リサーチ
it('check in check box disappear if user click the check box for mail magazin', () => {
  cy.get('.sc-fzoOEf').click();
  cy.url().should('include', '/sign-up');
  cy.get('[type="checkbox"]').check();
  //メルマガを希望した際に、それが機能しているかはわからない。
});

//ここより下部にsign up のサクセスverを記載
})
