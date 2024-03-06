it('Fehlerhafte Anmeldung mit ungültigen Anmeldeinformationen', () => {
    cy.visit('/');
    cy.get('#username').type('ungültiger_benutzername');
    cy.get('#password').type('ungültiges_passwort');
    cy.get('form#login-form').submit();
    cy.get('#error-message').should('be.visible');
});
