import { garagePage } from "../../support/pageAddCar/garagePage";
import carData from '../../fixtures/brend/carData.json'

describe('Login Test for Multiple Users', () => {
    let carId;

    beforeEach(()=>{
        cy.login(Cypress.env("email"), Cypress.env("password"))
    });
    
    it('check data car', () => {

        cy.intercept('/api/cars', (req) => {
            expect(req.body.carBrandId).to.equal(carData.BMW.id);
            expect(req.body.carModelId).to.equal(carData.BMW.model.id);
            expect(req.body.mileage).to.equal(carData.BMW.mileage);
            
          })

        cy.writeFile('cypress/fixtures/brend/carId.json', { 
            id: carData.BMW.model.id,
            model: carData.BMW.model.id,
            mileage: carData.BMW.mileage
         });

          garagePage.getBtnAddCar().contains('Add car').click()
          garagePage.getBrandCar().select("BMW")
          garagePage.getModelCar().select("X6")
          garagePage.getMileageCar().type("88")
          garagePage.getbtnAdd().contains('Add').click()

    });
   
});