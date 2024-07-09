describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
    });
    it('Empty field name', ()=>{

        cy.get('.app-content').find('button').should('have.length', 1);

    });
    it('find all links in footer', ()=>{

        cy.get('#contactsSection').find('a').should('have.length', 7);

    });

});