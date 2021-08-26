describe('Responsiveness', () => {
    context('Desktop', () => {
        beforeEach(() => {
            cy.viewport(1280, 720);
        });

        describe('Initial state when user visits home', () => {
            beforeEach(() => {
                cy.visit('/');
            });

            it('should render correctly', () => {
                cy.get('#title').should('have.text', 'Get insights that help your business grow.');
            });
        });
    });
});
