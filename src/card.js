
export class Card {
    constructor(data, templateSelector, openImg) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openImg = openImg;
    }


    removeCard = () => {
        this._element.remove();
        this._element = null;
    }

    _getTemplate() {
        return this._templateSelector.content.querySelector('.element')
            .cloneNode(true);
    }

    _likeCard(evt) {
        const likeBth = evt.target;
        likeBth.classList.toggle('element__like-button_type_click');
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        const cardPicture = this._element.querySelector('.element__picture');
        cardPicture.alt = this._name;
        cardPicture.src = this._link;
        cardPicture.addEventListener('click', () => this._openImg(this._name, this._link));
        const likeBth = this._element.querySelector('.element__like-button');
        const deleteBth = this._element.querySelector('.element__delete-button');
        likeBth.addEventListener('click', this._likeCard);
        deleteBth.addEventListener('click', this.removeCard);

        return this._element;

    }


}