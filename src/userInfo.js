export class UserInfo {
    constructor() {
        this._selectorName = document.querySelector('.intro__title');
        this._selectorInfo = document.querySelector('.intro__subtitle');
    }

    getUserInfo() {
        const object =
        {
            userName: this._selectorName.textContent,
            userDescription: this._selectorInfo.textContent,
        }

        return object;
    }

    setUserInfo(data) {
        this._selectorName.textContent = data.fullname;
        this._selectorInfo.textContent = data.profession;
    }
}