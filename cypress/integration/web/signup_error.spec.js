/// <reference types="cypress" />

context('sign up errors', () => {
  beforeEach(() => {
    cy.visit('https://money-college-dev.firebaseapp.com/sign-up')
  });

it('this error message appears when user type any word in any place onece, and then if user delete all of the text', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('tr');
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').clear();
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('メールアドレスを入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(2)').contains('姓を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(3)').contains('名を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(4)').contains('パスワードを入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(5)').contains('パスワード（確認）を入力してください。');
  cy.get('.sc-fzqMAW').should('be.disabled');
});

it('type only wrong e-mail address', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('tr');
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('メールアドレスを正しく入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(2)').contains('姓を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(3)').contains('名を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(4)').contains('パスワードを入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(5)').contains('パスワード（確認）を入力してください。'); 
  cy.get('.sc-fzqMAW').should('be.disabled');
});

it('type only e-mail address', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('trump815@yopmail.com');
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('姓を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(2)').contains('名を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(3)').contains('パスワードを入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(4)').contains('パスワード（確認）を入力してください。');  
  cy.get('.sc-fzqMAW').should('be.disabled'); 
});

it('type only e-mail address and last name', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('trump815@yopmail.com');
  cy.get('.sc-fzowVh > :nth-child(1) > .sc-fzoYHE').type('山田');
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('名を入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(2)').contains('パスワードを入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(3)').contains('パスワード（確認）を入力してください。');  
  cy.get('.sc-fzqMAW').should('be.disabled'); 
});

it('type e-mail address and last name,and first name', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('trump815@yopmail.com');
  cy.get('.sc-fzowVh > :nth-child(1) > .sc-fzoYHE').type('山田');
  cy.get(':nth-child(2) > .sc-fzoYHE').type('太郎');
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('パスワードを入力してください。');
  cy.get('.sc-fzoxnE > :nth-child(2)').contains('パスワード（確認）を入力してください。');  
  cy.get('.sc-fzqMAW').should('be.disabled');
});

it('type e-mail address,last name,first name,and password', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('trump815@yopmail.com');
  cy.get('.sc-fzowVh > :nth-child(1) > .sc-fzoYHE').type('山田');
  cy.get(':nth-child(2) > .sc-fzoYHE').type('太郎');
  cy.get(':nth-child(3) > .sc-fzoYHE').type('test1234');
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('パスワード（確認）を入力してください。');   
  cy.get('.sc-fzqMAW').should('be.disabled'); 
});

it('type e-mail address and last name,first name,and password, but psssword was full-width character', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('trump815@yopmail.com');
  cy.get('.sc-fzowVh > :nth-child(1) > .sc-fzoYHE').type('山田');
  cy.get(':nth-child(2) > .sc-fzoYHE').type('太郎');
  cy.get(':nth-child(3) > .sc-fzoYHE').type('あああああ')
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('使用できない文字が含まれています。');
  cy.get('.sc-fzoxnE > :nth-child(2)').contains('パスワード（確認）を入力してください。');  
  cy.get('.sc-fzqMAW').should('be.disabled');
});

it('type e-mail address,last name,first name,password,and confirm password, but confirm password is not same with password ', () => {
  cy.get('.sc-fzqAui > :nth-child(1) > .sc-fzoYHE').type('trump815@yopmail.com');
  cy.get('.sc-fzowVh > :nth-child(1) > .sc-fzoYHE').type('山田');
  cy.get(':nth-child(2) > .sc-fzoYHE').type('太郎');
  cy.get(':nth-child(3) > .sc-fzoYHE').type('test1234');
  cy.get(':nth-child(4) > .sc-fzoYHE').type('test');
  cy.get('.sc-fzoxnE > :nth-child(1)').contains('同じパスワードを入力してください。');  
  cy.get('.sc-fzqMAW').should('be.disabled');  
});
})
