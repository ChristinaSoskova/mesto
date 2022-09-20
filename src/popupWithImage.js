import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    this._popup.querySelector(".popup__pic").src = link;
    this._popup.querySelector(".popup__pic").alt = name;
    this._popup.querySelector(".popup__subtitle").textContent = name;
    super.setEventListeners();
  }
}
