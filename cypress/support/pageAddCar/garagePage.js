class GaragePage {

    btnAddCar = 'button'
    addCarBrand = '#addCarBrand'
    addCarModel = '#addCarModel'
    addCarMileage = '#addCarMileage'
    btnAdd = '.modal-footer'
    
    getBtnAddCar(){
        return cy.get(this.btnAddCar)
    }
    getBrandCar(){
        return cy.get(this.addCarBrand)
    }
    getModelCar(){
        return cy.get(this.addCarModel)
    }
    getMileageCar(){
        return cy.get(this.addCarMileage)
    }
    getbtnAdd(){
        return cy.get(this.btnAdd)
    }
    
  }
  
  export const garagePage = new GaragePage();
  