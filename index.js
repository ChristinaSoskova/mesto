import { Card } from "./card.js";
import { initialCards } from "./data.js";
import { validationObjects } from "./data.js";
import { formValidator } from "./FormValidator.js";

const popEdit = document.querySelector('.popup_type_edit');
const popAdd = document.querySelector('.popup_type_add-card');
const popImg = document.querySelector('.popup_type_image');
const popupProfileOpenBth = document.querySelector('.intro__edit-button');
const popupCardOpenBth = document.querySelector('.profile__add-button');
const saveBthAdd = document.querySelector('.popup__save-button_type_add');
const popupCloseBthEdit = document.querySelector('.popup__close-button_type_edit');
const popupCloseBthAdd = document.querySelector('.popup__close-button_type_add');
const popupCloseBthImg = document.querySelector('.popup__close-button_type_img');
const nameU = document.querySelector('.intro__title');
const job = document.querySelector('.intro__subtitle');
const formProfile = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__point_content_name');
const jobInput = document.querySelector('.popup__point_content_job');
const inputPlace = document.querySelector('.popup__point_content_place');
const inputAlt = document.querySelector('.popup__point_content_alt');
const cards = document.querySelector('.elements__container');
const formAdd = document.querySelector('.popup__form_type_add');
const body = document.querySelector('.root');



function closeByEsc(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    }
}

// функция открытия попапов
function openPopup(modal) {
    modal.classList.add('popup_opened');
    body.addEventListener('keydown', closeByEsc);
}

// функция закрытия попапов
function closePopup(modal) {
    modal.classList.remove('popup_opened');
    body.removeEventListener('keydown', closeByEsc);
}

// функция открытия окна редактирования
function openEdit(nameU, job) {
    nameInput.value = nameU.textContent;
    jobInput.value = job.textContent;
    openPopup(popEdit);
}

// функция открытия окна добавления карточки
function openAdd() {
    formAdd.reset();
    openPopup(popAdd);
}

// функция сохранения данных профиля
function submitProfileForm(evt) {
    evt.preventDefault();
    nameU.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popEdit);
}


function createCardItems() {
    initialCards.forEach((item) => {
        const card = new Card(item);
        const cardElement = card.generateCard();
        document.querySelector('.elements__container').prepend(cardElement)
    });
}

createCardItems();

formAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    saveBthAdd.setAttribute('disabled', 'disabled');
    const card = new Card({ name: inputPlace.value, link: inputAlt.value });
    const cardElement = card.generateCard();
    document.querySelector('.elements__container').prepend(cardElement);
    closePopup(popAdd);
});


formProfile.addEventListener('submit', submitProfileForm);
popupCloseBthEdit.addEventListener('click', () => closePopup(popEdit));
popupCloseBthAdd.addEventListener('click', () => closePopup(popAdd));
popupCloseBthImg.addEventListener('click', () => closePopup(popImg));
popupProfileOpenBth.addEventListener('click', () => openEdit(nameU, job));
popupCardOpenBth.addEventListener('click', () => openAdd());


body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        closePopup(popEdit);
        closePopup(popAdd);
        closePopup(popImg);
    }
});

popAdd.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popAdd);
    }
});

popEdit.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popEdit);
    }
});

popImg.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popImg);
    }
});



function enableValidation(obj) {
    
    const forms = document.querySelectorAll(obj.formSelector);
    [...forms].forEach(form => {
       const valid = new formValidator(form);
       valid._setEventListener(form, obj);
       valid._openPlace(); 
    })
};

enableValidation(validationObjects);

