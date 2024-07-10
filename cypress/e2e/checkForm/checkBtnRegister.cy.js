import elementsForm from "../../support/checkForm/elementsForm";
import stepsBtnRegister  from "../../support/checkForm/stepsBtnRegister";

describe('check field Name',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.btn-primary').click()
        stepsBtnRegister.enterStepsBtnRegister()

    });
      it('should disable "Register" button if any mandatory field is empty', () => {
        elementsForm.getSignUpRepeatPassword().type('Password321');
        elementsForm.getBtnRegister().should('be.disabled')
       });
       it("Register user", () => {
        elementsForm.getSignUpRepeatPassword().type('Password321!');
        elementsForm.getBtnRegister().should('not.be.disabled')
       });
    });