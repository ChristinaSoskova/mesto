import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector,popupImg) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(".popup__pic");
  }

  open(name, link) {
    super.open();
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popup.querySelector(".popup__subtitle").textContent = name;
    super.setEventListeners();
  }
}
