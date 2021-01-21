const baseUrl = 'http://localhost:3000';
const authServerUrl = 'http://localhost:9099';
const projectId = 'money-college-dev-8a907';


module.exports = {
  baseUrl,
  authServerUrl,
  projectId,
  authRequestPrefix: authServerUrl + '/emulator/v1/projects/' + projectId,
  signupLink: '.sc-fzoOEf',
  signupEmail: '.sc-fzqAui > :nth-child(1) > .sc-fzoYHE',
  lastName: '.sc-fzowVh > :nth-child(1) > .sc-fzoYHE',
  firstName: '.sc-fzowVh > :nth-child(2) > .sc-fzoYHE',
  password: ':nth-child(3) > .sc-fzoYHE',
  confirmPassword: ':nth-child(4) > .sc-fzoYHE',
  signupSubmit: '.sc-fzqMAW',
  emailSentLoginLink: '.sc-fzpdbB',
  loginEmail: ':nth-child(1) > .sc-fzoYHE',
  loginPassword: ':nth-child(2) > .sc-fzoYHE',
  loginSubmit: '.sc-fzqMAW',
}