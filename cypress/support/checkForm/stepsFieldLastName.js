import elementsForm from "./elementsForm";

const stepsFieldLastName = {
    stepsFieldLastName() {
        elementsForm.getSignUpName().click()
        elementsForm.getInvalidFeedback().should('be.visible');

    }
}

export default stepsFieldLastName