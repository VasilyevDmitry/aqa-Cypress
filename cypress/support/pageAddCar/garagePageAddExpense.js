class GaragePageAddExpense {

    btnAddExpense = '.car_add-expense'
    addExpenseMileage = '#addExpenseMileage'
    addExpenseLiters = '#addExpenseLiters'
    addExpenseTotalCost = '#addExpenseTotalCost'
    addExpenseMileage = '#addExpenseMileage'
    btnAdd = '.modal-footer'
    
    getBtnAddExpense(){
        return cy.get(this.btnAddExpense)
    }
    getAddExpenseMileage(){
        return cy.get(this.addExpenseMileage)
    }

    getAddExpenseLiters(){
        return cy.get(this.addExpenseLiters)
    }
    getAddExpenseTotalCost(){
        return cy.get(this.addExpenseTotalCost)
    }

    getBtnAdd(){
        return cy.get(this.btnAdd)
    }    
  }
  
  export const garagePageAddExpense = new GaragePageAddExpense();
  