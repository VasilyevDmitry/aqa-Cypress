import elementsForm from "../../support/checkForm/elementsForm";
import stepsForForm from "../../support/checkForm/stepsForForm";

describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.btn-primary').click()
    });
    it('should display error for empty "Name" field', () => {
         elementsForm.getSignUpName().click()
         stepsForForm.stepsForForm()
         elementsForm.getInvalidFeedback().should('include.text', 'Name required').and('have.css', 'color', 'rgb(220, 53, 69)');

     });
     
      it('should display error for invalid  with letters "Name" input', () => {
         elementsForm.getSignUpName().type('Ноно')
         stepsForForm.stepsForForm()
         elementsForm.getInvalidFeedback().should('include.text', 'Name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
     });
     it('should display error for invalid with numbers "Name" input', () => {
         elementsForm.getSignUpName().type('212222')
         stepsForForm.stepsForForm()
         elementsForm.getInvalidFeedback().should('include.text', 'Name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
     });
     it('should display error for invalid with symbols "Name" input', () => {
         elementsForm.getSignUpName().type('dj@j')
         stepsForForm.stepsForForm()
         elementsForm.getInvalidFeedback().should('include.text', 'Name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
     });
    
      it('should display error for "Name" input length', () => {
         elementsForm.getSignUpName().type('q')
         stepsForForm.stepsForForm()
         elementsForm.getInvalidFeedback().should('include.text', 'Name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
      });

      it('should display error for "Name" input length', () => {
         elementsForm.getSignUpName().type('VeryVeryVeryVeryLongN')
         stepsForForm.stepsForForm()
         elementsForm.getInvalidFeedback().should('include.text', 'Name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
});