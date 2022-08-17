const validationObjects = {
    formSelector: '.popup__form',
    inputSelector: '.popup__point',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__point_invalid',
  }; 


const toggleFormSubmit = (elementSubmit, isActive = false) => {
    if (isActive) {
        elementSubmit.removeAttribute('disabled');
    } else {
        elementSubmit.setAttribute('disabled', 'disabled');
    }
};

const showError = (elementError, inputElement, obj) => {
    inputElement.classList.add(obj.inputErrorClass);
    elementError.textContent = inputElement.validationMessage;

}
const hideError = (elementError, inputElement, obj) => {
    inputElement.classList.remove(obj.inputErrorClass);
    elementError.textContent = inputElement.validationMessage;
}


const checkInputValidity = (inputElement, formElement, obj) => {
    const elementError = formElement.querySelector(`.${inputElement.id}-error`);
    const inputIsValid = inputElement.validity.valid;
    if (!inputIsValid) {
        showError(elementError,inputElement, obj);
    } else {
        hideError(elementError,inputElement, obj);
    }
}

const setEventListener = (formElement, obj) => {
    const inputList = formElement.querySelectorAll(obj.inputSelector);
    const button = formElement.querySelector(obj.submitButtonSelector);
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    [...inputList].forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input, formElement, obj);
            toggleFormSubmit(button, formElement.checkValidity(), obj);
        })
    })
}

const enableValidation = (obj) => {
    const forms = document.querySelectorAll(obj.formSelector);
    [...forms].forEach(form => {
        setEventListener(form, obj);
    })
};

enableValidation(validationObjects); 

