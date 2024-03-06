describe('Anmeldeseite', () => {
    it('Lädt die Anmeldeseite korrekt', () => {
        cy.visit('/'); // Besuche die Basis-URL
        cy.get('form#login-form').should('exist'); // Überprüfe, ob das Anmeldeformular vorhanden ist
    });
});