export class formValidator {

    constructor(obj, form) {
        this._form = form;
        this._obj = obj;
        this._inputList = form.querySelectorAll(obj.inputSelector);
        this._submitButton = form.querySelector(obj.submitButtonSelector);
    }

    toggleFormSubmit = (isActive = false) => {
        if (isActive) {
            this._submitButton.removeAttribute('disabled');
        } else {
            this._submitButton.setAttribute('disabled', 'disabled');
        }
    };

    _showError = (elementError, inputElement) => {
        inputElement.classList.add(this._obj.inputErrorClass);
        elementError.textContent = inputElement.validationMessage;
    }

    _hideError = (elementError, inputElement) => {
        inputElement.classList.remove(this._obj.inputErrorClass);
        elementError.textContent = inputElement.validationMessage;
    }


    _checkInputValidity = (inputElement, obj) => {
        const elementError = this._form.querySelector(`.${inputElement.id}-error`);
        const inputIsValid = inputElement.validity.valid;
        if (!inputIsValid) {
            this._showError(elementError, inputElement, obj);
        } else {
            this._hideError(elementError, inputElement, obj);
        }
    }


    _setEventListener = (formElement, obj) => {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        [... this._inputList].forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input, formElement, obj);
                this.toggleFormSubmit(this._form.checkValidity());
            })
        })
    }


    enableValidation(obj, form) {
        this._setEventListener(form, obj);
    };
}