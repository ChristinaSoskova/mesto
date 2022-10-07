import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSelector, submitHandler = null) {
        super(popupSelector);
        this._form = this._popup.querySelector(formSelector);
        this._submitHandler = submitHandler;
        this._submitBtn = this._form.querySelector('.popup__save-button');
        this._submitBtnText = this._submitBtn.textContent;
        this._inputElements = this._form.querySelectorAll('.popup__point');
    }

    _getInputValue() {
        const formObject = {};
        [...this._inputElements].forEach((input) => {
            formObject[input.name] = input.value;
        });

        return formObject;
    }
    
    renderLoading(isLoading, loadingText='Сохранение...'){
        if(isLoading) {
            this._submitBtn.textContent = loadingText;
        }
        else {
            this._submitBtn.textContent = this._submitBtnText;
        }
      }
      
    setEventListeners() {

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValue());
        })
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
        
    }

}