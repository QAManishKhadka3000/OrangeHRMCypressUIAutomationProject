class LoginPage {
    visit() {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
  
    enterUsername(username) {
      cy.get('input[name="username"]').clear().type(username);
    }
  
    enterPassword(password) {
      cy.get('input[name="password"]').clear().type(password);
    }
  
    clickLoginButton() {
      cy.get('button[type="submit"]').click();
    }
  
    verifySuccessfulLogin() {
      cy.url().should('include', '/dashboard');
    }
  }
  
  export default new LoginPage();
  