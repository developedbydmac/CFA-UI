describe('Chick-fil-A Website Test', () => {
    
    
    it('Visits the Chick-fil-A Website', () => {
        cy.visit('/');
        cy.title().should('include', 'Chick-fil-A');
        cy.get('#onetrust-accept-btn-handler').click();
    });

    it('Visits the Chick-fil-A Menu-Entrees', () => {
        cy.visit('/#menu');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.url().should('include','#menu');
        cy.get('[href="/menu"] > :nth-child(1)').click();
        cy.contains('Breakfast').click();
    });
});