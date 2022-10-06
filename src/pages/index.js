import { Card } from "../components/card.js";
import { validationObjects } from "../data.js";
import { FormValidator } from "../components/formValidator.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Section } from "../components/section.js";
import { UserInfo } from "../components/userInfo.js";
import "./index.css";
import { Api } from "../components/api.js";
import { PopupDelete } from "../components/popupDelete.js";
import { AvatarPicture } from "../components/avatarPicture.js";
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

const api = new Api(options);
const validProfile = new FormValidator(validationObjects, formProfile);
const validAdd = new FormValidator(validationObjects, formAdd);
const validAvatar = new FormValidator(validationObjects, formAvatar);
const userInfo = new UserInfo('.intro__title', '.intro__subtitle', '.profile__avatar');
const popupAddCard = new PopupWithForm('.popup_type_add-card', '.popup__item-error', '.popup__form', submitAddCardForm);
const popupEditProfile = new PopupWithForm('.popup_type_edit', '.popup__item-error', '.popup__form', handleEditProfile);
const popupDeleteCard = new PopupDelete('.popup_type_delete-card');
const popupAvatar = new PopupWithForm('.popup_type_avatar', '.popup__item-error', '.popup__form', submitAvatarForm);
const popupImg = new PopupWithImage('.popup_type_image');
const avatarChanger = new AvatarPicture('.profile__avatar');

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
validAdd.toggleFormSubmit(false);
validProfile.enableValidation();



popupProfileOpenBth.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo();
    nameInput.value = currentUserInfo.userName;
    jobInput.value = currentUserInfo.userDescription;
    popupEditProfile.open()
});


popupCardOpenBth.addEventListener('click', () => popupAddCard.open());
avatar.addEventListener('click', () => popupAvatar.open());

function submitAvatarForm(avatarToServer) {
    popupAvatar.renderLoading(true);
    api.changeAvatar(avatarToServer)
        .then((avatarFromServer) => {
            avatarChanger.setNewAvatar(avatarFromServer);
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
        .finally(() => {
            popupAvatar.renderLoading(false);
            popupAvatar.close();
        });
}

function handleCardClick(name, link) {
    popupImg.open(name, link);
}

function addCard(cardData) {
    const card = new Card(cardData, template, handleCardClick, 'dbff5f8afe75600de4898ec4', openDeletePopup, setLikeCard);
    return card.generateCard();
}

function openDeletePopup(instant) {
    popupDeleteCard.deleteThisCard(() =>
        api.removeCard(instant.getId())
            .then(() => { instant.removeCard() })
            .catch((err) => {
                console.log('Ошибка. Запрос не выполнен: ', err)
            })
    ),
        popupDeleteCard.open(instant);
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
            saveBthAdd.setAttribute('disabled', 'disabled')
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
        .finally(() => {
            popupAddCard.renderLoading(false);
            popupAddCard.close();
        });
}


function handleEditProfile(dataToServer) {
    popupEditProfile.renderLoading(true);
    api.getEditUserInfo(dataToServer)
        .then((dataProfileFromServer) => {
            userInfo.setUserInfo(dataProfileFromServer);
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err)
        })
        .finally(() => {
            popupEditProfile.renderLoading(false);
            popupEditProfile.close();
        });
}

api.getUserInfo()
    .then((data) => {
        userInfo.setUserInfo(data);
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err)
    });

api.getInitialCards()
    .then((data) => {
        section.rendererItems(data);

    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err)
    });

