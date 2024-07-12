import elementsForm from "./elementsForm";

const stepsBtnRegister = {
    enterStepsBtnRegister() {
        elementsForm.getSignUpName().type('Name')
        elementsForm.getSignUpLastName().type('LastName')
        elementsForm.getSignUpEmail().type('LastName@Name.com');
        elementsForm.getSignUpPassword().type('Password321!');

    }
}

export default stepsBtnRegister