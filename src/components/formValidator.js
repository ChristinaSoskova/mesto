export class FormValidator {

    constructor(validationConfig, form) {
        this._form = form;
        this._validationConfig = validationConfig;
        this._inputList = form.querySelectorAll(validationConfig.inputSelector);
        this._submitButton = form.querySelector(validationConfig.submitButtonSelector);
    }

    toggleFormSubmit = (isActive = false) => {
        if (isActive) {
            this._submitButton.removeAttribute('disabled');
        } else {
            this._submitButton.setAttribute('disabled', 'disabled');
        }
    };

    _showError = (elementError, inputElement) => {
        inputElement.classList.add(this._validationConfig.inputErrorClass);
        elementError.textContent = inputElement.validationMessage;
    }

    _hideError = (elementError, inputElement) => {
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
        elementError.textContent = inputElement.validationMessage;
    }


    _checkInputValidity = (inputElement, config) => {
        const elementError = this._form.querySelector(`.${inputElement.id}-error`);
        const inputIsValid = inputElement.validity.valid;
        if (!inputIsValid) {
            this._showError(elementError, inputElement, config);
        } else {
            this._hideError(elementError, inputElement, config);
        }
    }


    _setEventListener = () => {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        [... this._inputList].forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input, this._form, this._validationConfig);
                this.toggleFormSubmit(this._form.checkValidity());
            })
        })
    }

    enableValidation() {
        this._setEventListener(this._form,  this._validationConfig);
    };
}