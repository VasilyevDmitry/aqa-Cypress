import elementsForm from "../../support/checkForm/elementsForm";
import stepsForForm from "../../support/checkForm/stepsForForm";

describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.btn-primary').click()
    });
      it('should display error for empty "Re-enter password" field', () => {
        elementsForm.getSignUpRepeatPassword().click();
        stepsForForm.stepsForForm()

        elementsForm.getInvalidFeedback().should('include.text', 'Re-enter password required').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
    
      it('should display error for non-matching "Re-enter password"', () => {
        elementsForm.getSignUpPassword().type('Password123');
        elementsForm.getSignUpRepeatPassword().type('Password321');
        stepsForForm.stepsForForm()
        elementsForm.getInvalidFeedback().should('include.text', 'Passwords do not match').and('have.css', 'color', 'rgb(220, 53, 69)');
      });
});