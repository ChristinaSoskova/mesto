export class formValidator {
   
    constructor(obj, form){
        this._form = form;
        this._obj = obj;
    }

_toggleFormSubmit = (elementSubmit, isActive = false) => {
    if (isActive) {
        elementSubmit.removeAttribute('disabled');
    } else {
        elementSubmit.setAttribute('disabled', 'disabled');
    }
};

_showError = (elementError, inputElement, obj) => {
    inputElement.classList.add(obj.inputErrorClass);
    elementError.textContent = inputElement.validationMessage;
}

_hideError = (elementError, inputElement, obj) => {
    inputElement.classList.remove(obj.inputErrorClass);
    elementError.textContent = inputElement.validationMessage;
}


_checkInputValidity = (inputElement, formElement, obj) => {
    const elementError = formElement.querySelector(`.${inputElement.id}-error`);
    const inputIsValid = inputElement.validity.valid;
    if (!inputIsValid) {
        this._showError(elementError,inputElement, obj);
    } else {
        this._hideError(elementError,inputElement, obj);
    }
}

_openPlace() {
    const saveBthAdd = document.querySelector('.popup__save-button_type_add');
    saveBthAdd.setAttribute('disabled', 'disabled'); 
}

_setEventListener = (formElement, obj) => {
    const inputList = formElement.querySelectorAll(obj.inputSelector);
    const button = formElement.querySelector(obj.submitButtonSelector);
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    
    });

    [...inputList].forEach(input => {
        input.addEventListener('input', () => {
            this._checkInputValidity(input, formElement, obj);
            this._toggleFormSubmit(button, formElement.checkValidity(), obj);
        })
    })
}

}