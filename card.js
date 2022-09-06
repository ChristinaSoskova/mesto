
export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;

    }

    _getTemplate() {
        const cardElement = this._templateSelector.content.querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }


    _likeCard(evt) {
        const likeBth = evt.target;
        likeBth.classList.toggle('element__like-button_type_click');
    }

    generateCard() {
        this._element = this._getTemplate();
        const cardPicture = this._element.querySelector('.element__picture');
        this._element.querySelector('.element__title').textContent = this._name;
        cardPicture.alt = this._name;
        cardPicture.src = this._link;
        const likeBth = this._element.querySelector('.element__like-button');
        const deleteBth = this._element.querySelector('.element__delete-button');
        likeBth.addEventListener('click', this._likeCard);
        deleteBth.addEventListener('click', () => this._element.remove());

        return this._element;
    }


}