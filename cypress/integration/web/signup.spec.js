const constants = require('./constants');



context('Sign up', () => {
  beforeEach(() => {
    cy.visit(constants.baseUrl + '/login')
    cy.request(
    {
      url: constants.authRequestPrefix + '/accounts',
      method: 'DELETE',
      auth: {bearer: 'owner'}
    });
  });

  it('sign up', () => {
    cy.get(constants.signupLink).click();
    cy.url().should('include', '/sign-up');
    cy.get(constants.signupEmail).type('test@sample.com');
    cy.get(constants.lastName).type('テスト');
    cy.get(constants.firstName).type('太郎');
    cy.get(constants.password).type('test12345');
    cy.get(constants.confirmPassword).type('test12345');
    cy.get(constants.signupSubmit).click();

    cy.url().should('include', '/verification-sent');
    cy.request({
      url: constants.authRequestPrefix + '/oobCodes',
      method: 'GET',
    }).then(response => {
      const oobCodes = response.body.oobCodes;
      const oobCodeObject = oobCodes[oobCodes.length-1];
      cy.request({
      url: oobCodeObject.oobLink,
      method: 'GET',
      });
    });
    cy.get(constants.emailSentLoginLink).click();
    cy.url().should('include', '/login');
    cy.get(constants.loginEmail).type('test@sample.com');
    cy.get(constants.loginPassword).type('test12345');
    cy.get(constants.loginSubmit).click();
    cy.url().should('include', '/home');
  });
})
