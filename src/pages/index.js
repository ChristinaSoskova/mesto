import { Card } from "../components/card.js";
import { initialCards } from "../data.js";
import { validationObjects } from "../data.js";
import { FormValidator } from "../components/formValidator.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Section } from "../components/section.js";
import { UserInfo } from "../components/userInfo.js";
import "./index.css";



const template = document.querySelector('#elements__container-template');
const popupProfileOpenBth = document.querySelector('.intro__edit-button');
const popupCardOpenBth = document.querySelector('.profile__add-button');
const saveBthAdd = document.querySelector('.popup__save-button_type_add');
const formProfile = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__point_content_name');
const jobInput = document.querySelector('.popup__point_content_job');
const formAdd = document.querySelector('.popup__form_type_add');

const validProfile = new FormValidator(validationObjects, formProfile);
const validAdd = new FormValidator(validationObjects, formAdd);
const userInfo = new UserInfo('.intro__title', '.intro__subtitle'); 
const popupAddCard = new PopupWithForm ('.popup_type_add-card', '.popup__item-error','.popup__form', '.profile__add-button',  submitAddCardForm);
const popupEditProfile = new PopupWithForm('.popup_type_edit', '.popup__item-error', '.popup__form', '.intro__edit-button', handleEditProfile);
const popupImg = new PopupWithImage ('.popup_type_image');
const section = new Section({
    items: initialCards,
    renderer: (obj) => {
    section.addItem(addCard(obj));
}
}
, '.elements__container');

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupImg.setEventListeners();

section.rendererItems(initialCards);

validAdd.enableValidation();
validAdd.toggleFormSubmit(false);
validProfile.enableValidation();


function handleCardClick(name,link){
    popupImg.open(name,link);
}

function addCard(cardData) {
    const card = new Card(cardData, template, handleCardClick);
   return card.generateCard();
}

function submitAddCardForm(data){
    section.addItem(addCard(data));
    saveBthAdd.setAttribute('disabled', 'disabled');
}

function handleEditProfile(data) {
    userInfo.setUserInfo(data);
}

popupProfileOpenBth.addEventListener('click',() => {
    const currentUserInfo = userInfo.getUserInfo();
    nameInput.value = currentUserInfo.userName;
    jobInput.value = currentUserInfo.userDescription;   
    popupEditProfile.open()
  });


popupCardOpenBth.addEventListener('click',() => popupAddCard.open());

