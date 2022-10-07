import { Popup } from "./Popup.js";

export class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._handleClickDelete = null;
    }

    setDeleteHandler(action) {
        this._handleClickDelete = action;
    }

    setEventListeners() {
        super.setEventListeners();
        const deleteBtn = this._popup.querySelector('.popup__save-button_type_delete');
        deleteBtn.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleClickDelete();
        });
    }

}