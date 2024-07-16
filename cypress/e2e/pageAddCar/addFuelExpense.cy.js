import { garagePage } from "../../support/pageAddCar/garagePage";
import { garagePageAddExpense } from "../../support/pageAddCar/garagePageAddExpense";

describe('Login Test for Multiple Users', () => {
    beforeEach(()=>{

        cy.login(Cypress.env("email"), Cypress.env("password"))
        
        garagePage.getBtnAddCar().contains('Add car').click()
        garagePage.getBrandCar().select('BMW')
        garagePage.getModelCar().select('X6')
        garagePage.getMileageCar().type('88')
        garagePage.getbtnAdd().contains('Add').click()
    });
    
    it('Add fuel expense', () => {

        garagePageAddExpense.getBtnAddExpense().contains('Add fuel expense').click()
        garagePageAddExpense.getAddExpenseMileage().type('8844')
        garagePageAddExpense.getAddExpenseLiters().type('12')
        garagePageAddExpense.getAddExpenseTotalCost().type('10520')
        garagePageAddExpense.getBtnAdd().contains('Add').click()    

    });
});



   
    
    