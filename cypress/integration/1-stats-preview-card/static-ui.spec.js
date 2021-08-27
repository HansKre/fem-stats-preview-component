/// <reference types="Cypress" />

describe('Static UI', () => {
    it('should render correctly', () => {
        cy.get('#title').should('have.text', 'Get insights that help your business grow.');
    });
});
