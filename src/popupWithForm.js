import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSelector, openBth, submitHandler = null) {
        super(popupSelector);
        this._form = this._popup.querySelector(formSelector);
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
        this._form.reset();
    }

    open() {
        super.open();
    }

}