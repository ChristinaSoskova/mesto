import { Card } from "../components/Card.js";
import { validationObjects } from "../data.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import "./index.css";
import { Api } from "../components/Api.js";
import { PopupDelete } from "../components/PopupDelete.js";
import { options } from "../data.js";



const template = document.querySelector('#elements__container-template');
const popupProfileOpenBth = document.querySelector('.intro__edit-button');
const popupCardOpenBth = document.querySelector('.profile__add-button');
const saveBthAdd = document.querySelector('.popup__save-button_type_add');
const formProfile = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__point_content_name');
const jobInput = document.querySelector('.popup__point_content_job');
const formAdd = document.querySelector('.popup__form_type_add');
const formAvatar = document.querySelector('.popup__form_type_avatar');
const avatar = document.querySelector('.profile__avatar');
let userId; 

const api = new Api(options);
const validProfile = new FormValidator(validationObjects, formProfile);
const validAdd = new FormValidator(validationObjects, formAdd);
const validAvatar = new FormValidator(validationObjects, formAvatar);
const userInfo = new UserInfo('.intro__title', '.intro__subtitle', '.profile__avatar');
const popupAddCard = new PopupWithForm('.popup_type_add-card', '.popup__form', submitAddCardForm);
const popupEditProfile = new PopupWithForm('.popup_type_edit', '.popup__form', handleEditProfile);
const popupDeleteCard = new PopupDelete('.popup_type_delete-card');
const popupAvatar = new PopupWithForm('.popup_type_avatar', '.popup__form', submitAvatarForm);
const popupImg = new PopupWithImage('.popup_type_image');

const section = new Section({
    renderer: (obj) => {
        section.addItem(addCard(obj));
    }
}
    , '.elements__container');



popupDeleteCard.setEventListeners();
popupAddCard.setEventListeners();
popupAvatar.setEventListeners();
popupEditProfile.setEventListeners();
popupImg.setEventListeners();
validAdd.enableValidation();
validAvatar.enableValidation();
validProfile.enableValidation();



popupProfileOpenBth.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo();
    nameInput.value = currentUserInfo.userName;
    jobInput.value = currentUserInfo.userDescription;
    popupEditProfile.open()
    validProfile.clearErorr();
    validProfile.toggleFormSubmit(true);
});


popupCardOpenBth.addEventListener('click', () => {
    validAdd.toggleFormSubmit(false);
    validAdd.clearErorr();
    popupAddCard.open();
});

avatar.addEventListener('click', () => {
    popupAvatar.open();
    validAvatar.toggleFormSubmit(false); 
    validAvatar.clearErorr()});
    

function submitAvatarForm(avatarToServer) {
    popupAvatar.renderLoading(true);
    api.changeAvatar(avatarToServer)
        .then((avatarFromServer) => {
            userInfo.setUserInfo(avatarFromServer);
            popupAvatar.close();
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
        .finally(() => {
            popupAvatar.renderLoading(false);
        });
}

function handleCardClick(name, link) {
    popupImg.open(name, link);
}



function addCard(cardData) {
    const card = new Card(cardData, template, handleCardClick, userId, openDeletePopup, setLikeCard);
    return card.generateCard();
    
}

function openDeletePopup(card) {
    popupDeleteCard.setDeleteHandler(() =>
        api.removeCard(card.getId())
            .then(() => { card.removeCard(); popupDeleteCard.close() })
            .catch((err) => {
                console.log('Ошибка. Запрос не выполнен: ', err)
            })
    ),
        popupDeleteCard.open(card);
}


function setLikeCard(card) {
    api.toggleLike(card.cardId, card.isLiked())
        .then((data) => {
            card.setLike(data);
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
}

function submitAddCardForm(dataCardToServer) {
    popupAddCard.renderLoading(true);
    api.getAddCard(dataCardToServer)
        .then((dataCardFromServer) => {
            section.addItem(addCard(dataCardFromServer));
            popupAddCard.close();
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
        .finally(() => {
            popupAddCard.renderLoading(false);
        });
}


function handleEditProfile(dataToServer) {
    popupEditProfile.renderLoading(true);
    api.getEditUserInfo(dataToServer)
        .then((dataProfileFromServer) => {
            userInfo.setUserInfo(dataProfileFromServer);
            popupEditProfile.close();
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
        .finally(() => {
            popupEditProfile.renderLoading(false);
        });
}



  Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
      section.rendererItems(cards);
})
.catch(err => {
  console.log('Ошибка. Запрос не выполнен: ', err)
});