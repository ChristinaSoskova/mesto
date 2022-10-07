export class Card {
    constructor(data, template, openImg, userId, openPopupBtn, setLikeCard) {
        this.cardId = data._id;
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._owner = data.owner;
        this._userId = userId;
        this._template = template;
        this._openImg = openImg;
        this._openPopupBtn = openPopupBtn;
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
        return this._template.content.querySelector('.element')
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
        this._likeMeter.textContent = this._data.likes.length; 

        if (this.isLiked()) {
            this._likeBtn.classList.add('element__like-button_type_click');
        }
        else {
            this._likeBtn.classList.remove('element__like-button_type_click');
        }

    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        const cardPicture = this._element.querySelector('.element__picture');
        cardPicture.alt = this._name;
        cardPicture.src = this._link;
        this._likeMeter = this._element.querySelector('.element_like-meter');
        this._likeBtn = this._element.querySelector('.element__like-button');
        this._deleteBtn = this._element.querySelector('.element__delete-button');
        this._updateLike();
        this._setEventListeners();
        this._compareId();
        this._likeMeter.textContent = this._data.likes.length;
        return this._element;
    }


    _compareId() {
        if (this._userId !== this._owner._id) {
            this._deleteBtn.remove();
        }
    }

    _setEventListeners() {
        const cardPicture = this._element.querySelector('.element__picture');
        cardPicture.addEventListener('click', () => this._openImg(this._name, this._link));
        this._likeBtn.addEventListener('click', () => this._setLikeCard(this));
        this._deleteBtn.addEventListener('click', () => this._openPopupBtn(this));
    }
}