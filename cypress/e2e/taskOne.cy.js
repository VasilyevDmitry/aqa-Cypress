describe('find elements buttons and links',()=>{
    beforeEach(()=>{
        cy.visit('/')
    });
    it('find all btn in header', ()=>{

        cy.get('.app-content').find('button').should('have.length', 1);

    });
    it('find all links in footer', ()=>{

        cy.get('#contactsSection').find('a').should('have.length', 7);

    });

});