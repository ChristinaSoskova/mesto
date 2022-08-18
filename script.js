

const popEdit = document.querySelector('.popup_type_edit');
const popAdd = document.querySelector('.popup_type_add-card');
const popImg = document.querySelector('.popup_type_image');
const popupProfileOpenBth = document.querySelector('.intro__edit-button');
const popupCardOpenBth = document.querySelector('.profile__add-button');
const saveBthEdit = document.querySelector('.popup__save-button_type_edit');
const saveBthAdd = document.querySelector('.popup__save-button_type_add');
const popupCloseBthEdit = document.querySelector('.popup__close-button_type_edit');
const popupCloseBthAdd = document.querySelector('.popup__close-button_type_add');
const popupCloseBthImg = document.querySelector('.popup__close-button_type_img');
const nameU = document.querySelector('.intro__title');
const imgSub = document.querySelector('.popup__subtitle');
const job = document.querySelector('.intro__subtitle');
const formProfile = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__point_content_name');
const jobInput = document.querySelector('.popup__point_content_job');
const namePlace = document.querySelector('.element__title');
const inputPlace = document.querySelector('.popup__point_content_place');
const inputAlt = document.querySelector('.popup__point_content_alt');
const pictureOpen = document.querySelector('.popup__pic');
const pictureOpenSub = document.querySelector('.popup__subtitle');
const cards = document.querySelector('.elements__container');
const formAdd = document.querySelector('.popup__form_type_add');
const body = document.querySelector('.root');



function closeByEsc (evt) { 
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

    // функция удаления карточек
    function removeCard(evt) {
        const deleteBth = evt.target;
        deleteBth.closest('.element').remove('li');
    }

    // функция постановки лайков 
    function likeCard(evt) {
        const likeBth = evt.target;
        likeBth.classList.toggle('element__like-button_type_click');
    }


    // функция открытия изображений
    function openImg(name, link) {
        pictureOpen.src = link;
        pictureOpen.alt = name;
        pictureOpenSub.textContent = name;
        openPopup(popImg);
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


    const template = document.querySelector('#elements__container-template').content.children[0];


    // функция добавления картинок на страницу
    function createPlace(link, name) {
        const elementPicture = template.cloneNode(true);
        const newText = elementPicture.querySelector('.element__title');
        const newPicture = elementPicture.querySelector('.element__picture');
        const likeBth = elementPicture.querySelector('.element__like-button');
        const deleteBth = elementPicture.querySelector('.element__delete-button');
        likeBth.addEventListener('click', likeCard);
        deleteBth.addEventListener('click', removeCard);
        newText.textContent = name;
        newPicture.alt = name;
        newPicture.src = link;
        const element = elementPicture.querySelector('.element__picture');
        element.addEventListener('click', () => {
            openImg(name, link);
        })
        return elementPicture;

    }

    function renderCard(container, data) {
        container.prepend(createPlace(data.link, data.name));
    }

    function createCardItems() {
        initialCards.forEach((item) => renderCard(cards, item));
    }

    createCardItems();

    formAdd.addEventListener('submit', function (evt) {
        evt.preventDefault();
        saveBthAdd.setAttribute('disabled', 'disabled');
        renderCard(cards, { name: inputPlace.value, link: inputAlt.value });
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
