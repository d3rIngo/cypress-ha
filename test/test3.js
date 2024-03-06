it('Benutzeranmeldung mit gültigen Anmeldeinformationen', () => {
    cy.visit('/');
    cy.get('#username').type('benutzername');
    cy.get('#password').type('passwort');
    cy.get('form#login-form').submit();
    cy.get('#success-message').should('be.visible').and('contain', 'erfolgreich');
});