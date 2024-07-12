class ElementsForm{

    signUpName = '#signupName'
    signUpLastName = '#signupLastName'
    invalidFeedback = '.invalid-feedback'
    signUpEmail = '#signupEmail'
    signUpPassword = '#signupPassword'
    signUpRepeatPassword = '#signupRepeatPassword'
    btnRegister = '.modal-footer > button'

    getSignUpName(){
        return cy.get(this.signUpName)
    }
    getSignUpLastName(){
        return cy.get(this.signUpLastName)
    }
    getInvalidFeedback(){
        return cy.get(this.invalidFeedback)
    }
    getSignUpEmail(){
        return cy.get(this.signUpEmail)
    }
    getSignUpPassword(){
        return cy.get(this.signUpPassword)
    }
    getSignUpRepeatPassword(){
        return cy.get(this.signUpRepeatPassword)
    }
    getBtnRegister(){
        return cy.get(this.btnRegister)
    }
}
const elementsForm = new ElementsForm()

export default elementsForm
