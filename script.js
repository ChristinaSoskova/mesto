let pop = document.querySelector('.popup');
let edit = document.querySelector('.intro__edit-button');
let saveBth = document.querySelector('.popup__save-button');
let closeBth = document.querySelector('.popup__icon');
let nameU = document.querySelector('.intro__title');
let job = document.querySelector('.intro__subtitle');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.user-name');
let jobInput = document.querySelector('.job');

function open() {
    pop.classList.toggle('popup_opened');
}

nameInput.value = nameU.textContent;
jobInput.value = job.textContent;

edit.addEventListener('click', open);
closeBth.addEventListener('click', open);
saveBth.addEventListener('click', open);


function formSubmitHandler(evt) {
    evt.preventDefault();
    nameU.textContent = nameInput.value;
    job.textContent = jobInput.value;
}


formElement.addEventListener('submit', formSubmitHandler); 
