import elementsForm from "./elementsForm";

const stepsForForm = {
    stepsForForm() {
        elementsForm.getSignUpLastName().click()
        elementsForm.getInvalidFeedback().should('be.visible');

    }
}

export default stepsForForm