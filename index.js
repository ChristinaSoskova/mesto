import { Card } from "./card.js";
import { initialCards } from "./data.js";
import { validationObjects } from "./data.js";
import { formValidator } from "./formValidator.js";

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
const formAdd = document.querySelector('.popup__form_type_add');
const body = document.querySelector('.root');
const openPicture = document.querySelector('.popup__pic');
const openSubtitle = document.querySelector('.popup__subtitle');
const ESC_CODE = "Escape";
const cardsConteiner = document.querySelector('.elements__container');
const template = document.querySelector('#elements__container-template');


const validProfile = new formValidator(validationObjects, formProfile);
const validAdd = new formValidator(validationObjects, formAdd);

validAdd.enableValidation();
validAdd.toggleFormSubmit(false);
validProfile.enableValidation();


function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        evt.preventDefault();
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
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


function openImg(name, link) {
    openPicture.src = link;
    openPicture.alt = name;
    openSubtitle.textContent = name;
    openPopup(popImg);
}

// функция сохранения данных профиля
function submitProfileForm(evt) {
    evt.preventDefault();
    nameU.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popEdit);
}

function addCard(obj) {
    const card = new Card(obj, template, openImg);
    const cardElement = card.generateCard();
    cardsConteiner.prepend(cardElement);
}

initialCards.forEach((item) => {
    addCard(item);
});

formAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    saveBthAdd.setAttribute('disabled', 'disabled');
    addCard({ name: inputPlace.value, link: inputAlt.value });
    closePopup(popAdd);
});


formProfile.addEventListener('submit', submitProfileForm);
popupCloseBthEdit.addEventListener('click', closePopup(popEdit));
popupCloseBthAdd.addEventListener('click', closePopup(popAdd));
popupCloseBthImg.addEventListener('click', closePopup(popImg));
popupProfileOpenBth.addEventListener('click', () => openEdit(nameU, job));
popupCardOpenBth.addEventListener('click', () => openAdd());


function closeOverlay(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
}

popEdit.addEventListener('click', closeOverlay);
popImg.addEventListener('click', closeOverlay);
popAdd.addEventListener('click', closeOverlay);
