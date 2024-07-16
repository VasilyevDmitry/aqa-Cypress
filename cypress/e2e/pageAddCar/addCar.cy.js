import { garagePage } from "../../support/pageAddCar/garagePage";

describe('Login Test for Multiple Users', () => {
    beforeEach(()=>{
        cy.login(Cypress.env("email"), Cypress.env("password"))
    });
    
    it('Add car', () => {

        garagePage.getBtnAddCar().contains('Add car').click()
        garagePage.getBrandCar().select('BMW')
        garagePage.getModelCar().select('X6')
        garagePage.getMileageCar().type('88')
        garagePage.getbtnAdd().contains('Add').click()
    });
});



   
    
    