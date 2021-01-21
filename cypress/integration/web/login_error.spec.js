/// <reference types="cypress" />

context('login_error', () => {
  beforeEach(() => {
    cy.visit('https://money-college-dev.firebaseapp.com/')
  });

  it('this error message appears when user type any word in the place for email or password, and then if user delete all of the text', () => {
    cy.get(':nth-child(1) > .sc-fzoYHE').type('trump888@yopmail.com');
    cy.get(':nth-child(1) > .sc-fzoYHE').clear();
    cy.get('.sc-fznBMq > :nth-child(1)').contains('メールアドレスを入力してください。');
    cy.get('.sc-fznBMq > :nth-child(2)').contains('パスワードを入力してください。');
  });

it('this error message appears when user does not type password', () => {
  cy.get(':nth-child(1) > .sc-fzoYHE').type('trump888@yopmail.com');
  cy.get('.sc-fznNvL').contains('パスワードを入力してください。');
});

it('this error message appears when user type wrong mail address, and does not type password', () => {
  cy.get(':nth-child(1) > .sc-fzoYHE').type('tr');
  cy.get('.sc-fznBMq > :nth-child(1)').contains('メールアドレスを正しく入力してください。');
  cy.get('.sc-fznBMq > :nth-child(2)').contains('パスワードを入力してください。');
});

it('this error message appears when user does not type email address', () => {
  cy.get(':nth-child(2) > .sc-fzoYHE').type('test12345');
  cy.get('.sc-fznNvL').contains('メールアドレスを入力してください。');
});

it('this error message appears when user put wrong mail address or password', () => {
  cy.get(':nth-child(1) > .sc-fzoYHE').type('trump888@yopmail.co');
  cy.get(':nth-child(2) > .sc-fzoYHE').type('test12345');
  cy.get('.sc-fzqMAW').click();
  cy.get('.sc-fznNvL').contains('メールアドレスまたはパスワードが間違っています。');
});
})
