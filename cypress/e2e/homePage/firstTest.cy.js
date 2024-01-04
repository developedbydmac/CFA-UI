describe('Chick-fil-A Website Test', () => {
    it('Visits the Chick-fil-A Website', () => {
        cy.visit('https://www.chick-fil-a.com/');
        cy.title().should('include', 'Chick-fil-A');
        cy.get('#onetrust-accept-btn-handler').click();
    });
});