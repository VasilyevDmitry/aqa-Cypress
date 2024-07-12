import elementsForm from "../../support/checkForm/elementsForm";
import stepsForForm from "../../support/checkForm/stepsForForm";

describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.btn-primary').click()
    });
   it('should display error for empty "Email" field', () => {
        elementsForm.getSignUpEmail().click()
        stepsForForm.stepsForForm()
        elementsForm.getInvalidFeedback().should('include.text', 'Email required').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
    
      it('should display error for invalid "Email" input', () => {
        elementsForm.getSignUpEmail().type('dmitryv477');
        stepsForForm.stepsForForm()
        elementsForm.getInvalidFeedback().should('include.text', 'Email is incorrect').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
});