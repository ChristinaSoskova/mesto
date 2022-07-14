let pop = document.querySelector('.popup');
let edit = document.querySelector('.intro__edit-button');
let saveBth = document.querySelector('.popup__save-button');
let closeBth = document.querySelector('.popup__close-button');
let nameU = document.querySelector('.intro__title');
let job = document.querySelector('.intro__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function open() {
    pop.classList.add('popup_opened');
    nameInput.value = nameU.textContent;
    jobInput.value = job.textContent;
}


function close () {
    pop.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameU.textContent = nameInput.value;
    job.textContent = jobInput.value;
}


formElement.addEventListener('submit', formSubmitHandler); 
edit.addEventListener('click', open);
closeBth.addEventListener('click', close);
saveBth.addEventListener('click', close);