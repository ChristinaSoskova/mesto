let pop = document.querySelector('.popup');
let edit = document.querySelector('.intro__edit-button');
let saveBth = document.querySelector('.popup__save-button');
let closeBth = document.querySelector('.popup__icon');
let nameU = document.querySelector('.intro__title');
let job = document.querySelector('.intro__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__point-name');
let jobInput = document.querySelector('.popup__point-job');

function open() {
    pop.classList.toggle('popup_opened');
    nameInput.value = nameU.textContent;
    jobInput.value = job.textContent;
}

edit.addEventListener('click', open);


function close () {
    pop.classList.toggle('popup_opened');
}


closeBth.addEventListener('click', close);
saveBth.addEventListener('click', close);


function formSubmitHandler(evt) {
    evt.preventDefault();
    nameU.textContent = nameInput.value;
    job.textContent = jobInput.value;
}


formElement.addEventListener('submit', formSubmitHandler); 
