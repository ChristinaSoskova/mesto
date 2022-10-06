import { Popup } from "./popup.js";

export class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._handleClickDelete = null;
}

 deleteThisCard(action){
    this._handleClickDelete = action;
    }

setEventListeners(){
super.setEventListeners();
const deleteBth = this._popup.querySelector('.popup__save-button_type_delete');
deleteBth.addEventListener('click', (evt) => {
    evt.preventDefault();
    this._handleClickDelete();
    super.close();
});
}

}