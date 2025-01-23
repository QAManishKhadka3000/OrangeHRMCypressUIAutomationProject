// cypress/e2e/login.cy.js

export const login = () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Verify page title
    cy.title().should('eq', 'OrangeHRM');

    // Enter username and password
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

    // Click login button
    cy.get('.oxd-button').click();
};
