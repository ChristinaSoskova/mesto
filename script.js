const popEdit = document.querySelector('.popup_type_edit');
const popAdd = document.querySelector('.popup_type_add-card');
const popImg = document.querySelector('.popup_type_image');
const edit = document.querySelector('.intro__edit-button');
const add = document.querySelector('.profile__add-button');
const saveBth = document.querySelector('.popup__save-button');
const closeBth = document.querySelector('.popup__close-button');
const nameU = document.querySelector('.intro__title');
const imgSub = document.querySelector('.popup__subtitle');
const job = document.querySelector('.intro__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__point_content_name');
const jobInput = document.querySelector('.popup__point_content_job');
const namePlace = document.querySelector('.element__title');
const  place = document.querySelector('.element__picture');
const inputPlace = document.querySelector('.popup__point_content_place');
const inputAlt = document.querySelector('.popup__point_content_alt');
const root = document.querySelector('.root');
const pictureOpen = document.querySelector('.popup__pic');
const pictureOpenSub = document.querySelector('.popup__subtitle');
const deleteBth = document.querySelector('.element__delete-button');
const element = document.querySelector('.element');

// функция открытия попапов
function open(modal) {
    modal.classList.add('popup_opened');
}

// функция закрытия попапов
function close(evt) {
    const closeBth = evt.target;
    console.log(closeBth);
    if (closeBth.classList.contains('popup__close-button')) {
        closeBth.closest('.popup').classList.remove('popup_opened');
    }
    if (closeBth.classList.contains('popup__save-button')) {
        closeBth.closest('.popup').classList.remove('popup_opened');
    }
}

// функция удаления карточек
function removeCard(evt) {
    const deleteBth = evt.target;
    console.log(deleteBth);
    if (deleteBth.classList.contains('element__delete-button')) {
        deleteBth.closest('.element').remove('li');
    }
}
// функция постановки лайков 
function likeCard(evt) {
    const likeBth = evt.target;
    console.log(likeBth);
    if (likeBth.classList.contains('element__like-button')) {
        likeBth.classList.toggle('element__like-button_type_click');
    }
}


// функция реагирования на клики по root
function click(evt) {
    removeCard(evt);
    likeCard(evt);
    close(evt);
}


// функция открытия изображений
function openImg(item) {
    pictureOpen.src = item.link;
    pictureOpenSub.textContent = item.name;
    open(popImg);
}

// функция открытия окна редактирования
function openEdit(nameU, job) {
    nameInput.value = nameU.textContent;
    jobInput.value = job.textContent;
    open(popEdit);
}

// функция открытия окна добавления карточки
function openAdd() {
    document.querySelector('.popup__form_type_add').reset();
    open(popAdd);
}

// функция сохранения данных профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameU.textContent = nameInput.value;
    job.textContent = jobInput.value;
}


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const formAdd = document.querySelector('.popup__form_type_add');
const list = document.querySelector('.elements__container');
const template = document.querySelector('#elements__container-template').content.children[0];

// функция добавления картинок на страницу
function newPlace(item) {
    const elementPicture = template.cloneNode(true);
    const newText = elementPicture.querySelector('.element__title');
    const newPicture = elementPicture.querySelector('.element__picture');
    newText.textContent = item.name;
    newPicture.src = item.link;
    list.prepend(elementPicture);
    const element = elementPicture.querySelectorAll('.element__picture');
    element.forEach(b => b.addEventListener('click', () => {
        openImg(item)
    }))
}

initialCards.forEach(newPlace);



// функция добавления новой карточки пользователем
function addPlace(evt) {
    evt.preventDefault();
    const elementPicture = template.cloneNode(true);
    const namePlace = elementPicture.querySelector('.element__title');
    const place = elementPicture.querySelector('.element__picture')
    namePlace.textContent = inputPlace.value;
    place.src = inputAlt.value;
    list.prepend(elementPicture);
}

root.addEventListener('click', click);
formAdd.addEventListener('submit', addPlace);
formElement.addEventListener('submit', formSubmitHandler);
edit.addEventListener('click', () => openEdit(nameU, job));
add.addEventListener('click', () => openAdd());
saveBth.addEventListener('click', () => close);
saveBth.addEventListener('click', () => close);



