import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, erorr, formSelector, openBth, submitHandler = null) {
        super(popupSelector);
        this._form = this._popup.querySelector(formSelector);
        this._erorr = this._form.querySelectorAll(erorr);
        this._submitHandler = submitHandler;
        this._openBth = openBth;

    }

    _getInputValue() {
        const formObject = {};
        const inputElements = this._form.querySelectorAll('.popup__point');
        [...inputElements].forEach((input) => {
            formObject[input.name] = input.value;
        });

        return formObject;
    }

    setEventListeners() {

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValue());
            this.close();
        })
        super.setEventListeners();
    }

    close() {
        super.close();
        const inputElements = this._form.querySelectorAll('.popup__point');
        [...inputElements].forEach((input) => {
            input.classList.remove('popup__point_invalid');
            this._clearErorr(input);
        });
        this._form.reset();
    }

    _clearErorr(input) {
        const elementError = this._form.querySelector(`.${input.id}-error`);
        elementError.textContent = '';
    }

}