it('Leere Felder beim Anmelden', () => {
    cy.visit('/');
    cy.get('form#login-form').submit();
    cy.get('#error-message').should('be.visible');
});

// Weitere Tests hier hinzufügen...
