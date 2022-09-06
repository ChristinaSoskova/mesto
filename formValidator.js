export class formValidator {

    constructor(obj, form) {
        this._form = form;
        this._obj = obj;
        this._inputList = form.querySelectorAll(obj.inputSelector);
        this._submitButton = form.querySelector(obj.submitButtonSelector);

    }

    _toggleFormSubmit = (submitButton, isActive = false) => {
        if (isActive) {
            this._submitButton.removeAttribute('disabled');
        } else {
            this._submitButton.setAttribute('disabled', 'disabled');
        }
    };

    _showError = (elementError, inputElement, obj) => {
        inputElement.classList.add(this._obj.inputErrorClass);
        elementError.textContent = inputElement.validationMessage;
    }

    _hideError = (elementError, inputElement, obj) => {
        inputElement.classList.remove(this._obj.inputErrorClass);
        elementError.textContent = inputElement.validationMessage;
    }


    _checkInputValidity = (inputElement, form, obj) => {
        const elementError = this._form.querySelector(`.${inputElement.id}-error`);
        const inputIsValid = inputElement.validity.valid;
        if (!inputIsValid) {
            this._showError(elementError, inputElement, obj);
        } else {
            this._hideError(elementError, inputElement, obj);
        }
    }

    _openPlace() {
        const saveBthAdd = document.querySelector('.popup__save-button_type_add');
        saveBthAdd.setAttribute('disabled', 'disabled');
    }

    _setEventListener = (formElement, obj) => {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        [... this._inputList].forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input, formElement, obj);
                this._toggleFormSubmit(this._submitButton, this._form.checkValidity());
            })
        })
    }


    enableValidation(obj, form) {
        this._setEventListener(form, obj);
        this._openPlace();
    };


}