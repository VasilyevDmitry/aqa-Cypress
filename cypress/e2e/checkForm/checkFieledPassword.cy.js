import elementsForm from "../../support/checkForm/elementsForm";
import stepsForForm from "../../support/checkForm/stepsForForm";

describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.btn-primary').click()
    });

      it('should display error for empty "Password" field', () => {
        elementsForm.getSignUpPassword().click();
        stepsForForm.stepsForForm()
        elementsForm.getInvalidFeedback().should('include.text', 'Password required').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
    
      it('should display error for invalid "Password" length', () => {
        elementsForm.getSignUpPassword().type('short');
        stepsForForm.stepsForForm()
        elementsForm.getInvalidFeedback().should('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');

      });
});