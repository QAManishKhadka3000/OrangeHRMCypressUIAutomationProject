// cypress/e2e/Admin.cy.js

import { login } from './Login.cy';

describe('Admin Actions', () => {
    it('should perform admin-related tests after login', () => {
        login();  // Call the login function from login.cy.js

        // Add additional admin-specific test steps here
        cy.get('.oxd-main-menu-item').contains('Admin').click();
        cy.url().should('include', '/admin/viewSystemUsers');


    });
});
