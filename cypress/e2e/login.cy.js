import loginPage from '../pages/loginPage';

describe('OrangeHRM Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.enterUsername(data.validUser.username);
      loginPage.enterPassword(data.validUser.password);
      loginPage.clickLoginButton();
      loginPage.verifySuccessfulLogin();
    });
  });

  it('should show error message for invalid credentials', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.enterUsername(data.invalidUser.username);
      loginPage.enterPassword(data.invalidUser.password);
      loginPage.clickLoginButton();
      cy.get('.oxd-alert-content').should('be.visible')
        .and('contain', 'Invalid credentials');
    });
  });
});
