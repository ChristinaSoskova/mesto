
export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;

    }

    _getTemplate() {
        const cardElement = document.querySelector('#elements__container-template').content.querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _closeByEsc(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
        }
    }

    _openImg(name, link) {
        document.querySelector('.popup_type_image').classList.add('popup_opened');
        document.querySelector('.popup__pic').src = link;
        document.querySelector('.popup__pic').alt = name;
        document.querySelector('.popup__subtitle').textContent = name;
        const body = document.querySelector('.root');
        body.addEventListener('keydown', this._closeByEsc());
    }

    _removeCard(evt) {
        const deleteBth = evt.target;
        deleteBth.closest('.element').remove('li');
    }

    _likeCard(evt) {
        const likeBth = evt.target;
        likeBth.classList.toggle('element__like-button_type_click');
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__picture').alt = this._name;
        this._element.querySelector('.element__picture').src = this._link;
        const likeBth = this._element.querySelector('.element__like-button');
        const deleteBth = this._element.querySelector('.element__delete-button');
        likeBth.addEventListener('click', this._likeCard);
        deleteBth.addEventListener('click', this._removeCard);
        const element = this._element.querySelector('.element__picture');
        element.addEventListener('click', () => {
            this._openImg(this._name, this._link);
        })

        return this._element;
    }


}