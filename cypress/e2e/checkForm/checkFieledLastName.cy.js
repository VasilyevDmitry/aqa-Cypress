import elementsForm from "../../support/checkForm/elementsForm";
import stepsFieldLastName from "../../support/checkForm/stepsFieldLastName";

describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.btn-primary').click()
    });
    it('should display error for empty "Last name" field', () => {
         elementsForm.getSignUpLastName().click();
         stepsFieldLastName.stepsFieldLastName()
         elementsForm.getInvalidFeedback().should('include.text', 'Last name required').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
      
      it('should display error for invalid with letters "Last name" input', () => {
         elementsForm.getSignUpLastName().type('Ноно')
         stepsFieldLastName.stepsFieldLastName()
         elementsForm.getInvalidFeedback().should('include.text', 'Last name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
     });
     it('should display error for invalid with numbers "Last name" input', () => {
         elementsForm.getSignUpLastName().type('212222')
         stepsFieldLastName.stepsFieldLastName()
         elementsForm.getInvalidFeedback().should('include.text', 'Last name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
     });
     it('should display error for invalid with symbols "Last name" input', () => {
         elementsForm.getSignUpLastName().type('dj@j')
         stepsFieldLastName.stepsFieldLastName()
         elementsForm.getInvalidFeedback().should('include.text', 'Last name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
     });
    
      it('should display error for "Last name" input length', () => {
         elementsForm.getSignUpLastName().type('q')
         stepsFieldLastName.stepsFieldLastName()
         elementsForm.getInvalidFeedback().should('include.text', 'Last name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
      });

      it('should display error for "Last name" input length', () => {
         elementsForm.getSignUpLastName().type('sdklkclzlkxclkclzxlczcxzcj')
         stepsFieldLastName.stepsFieldLastName()
         elementsForm.getInvalidFeedback().should('include.text', 'Last name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
});