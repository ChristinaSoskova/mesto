export class Section {
    constructor({ renderer }, cardsConteiner) {
        this._renderer = renderer;
        this._container = document.querySelector(cardsConteiner);
    }

    addItem(cards) {
        this._container.prepend(cards);
    }

    rendererItems(initialArray) {
        initialArray.forEach(element => {
            this._renderer(element)
        });
    }
}