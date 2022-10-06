export class Card {
    constructor(data, templateSelector, openImg, userId, openPopupBth, setLikeCard) {
        this.cardId = data._id;
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._owner = data.owner;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._openImg = openImg;
        this._openPopupBth = openPopupBth;
        this._setLikeCard = setLikeCard;
    }

    getId() {
        return this._data._id;
    }


    removeCard = () => {
        this._element.remove();
        this._element = null;
    }

    _getTemplate() {
        return this._templateSelector.content.querySelector('.element')
            .cloneNode(true);
    }

    isLiked() {
        return Boolean(this._data.likes.find((item) => { return item._id === this._userId }));
    }

    setLike(data) {
        this._data.likes = data.likes;
        this._updateLike();

    }

    _updateLike() {
        this._element.querySelector('.element_like-meter').textContent = this._data.likes.length;

        if (this.isLiked()) {
            this._element.querySelector('.element__like-button').classList.add('element__like-button_type_click');
        }
        else {
            this._element.querySelector('.element__like-button').classList.remove('element__like-button_type_click');
        }

    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        const cardPicture = this._element.querySelector('.element__picture');
        cardPicture.alt = this._name;
        cardPicture.src = this._link;
        this._updateLike();
        this._setEventListeners();
        this._compareId();
        this._element.querySelector('.element_like-meter').textContent = this._data.likes.length;
        return this._element;
    }


    _compareId() {
        if (this._userId !== this._owner._id) {
            this._element.querySelector('.element__delete-button').remove();
        }
    }

    _setEventListeners() {
        const cardPicture = this._element.querySelector('.element__picture');
        cardPicture.addEventListener('click', () => this._openImg(this._name, this._link));
        const likeBth = this._element.querySelector('.element__like-button');
        const deleteBth = this._element.querySelector('.element__delete-button');
        likeBth.addEventListener('click', () => this._setLikeCard(this));
        deleteBth.addEventListener('click', () => this._openPopupBth(this));
    }
}