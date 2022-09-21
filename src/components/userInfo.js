export class UserInfo {
    constructor(selectorName, selectorInfo) {
        this._selectorName = document.querySelector(selectorName);
        this._selectorInfo = document.querySelector(selectorInfo);
    }

    getUserInfo() {
        const userInfo =
        {
            userName: this._selectorName.textContent,
            userDescription: this._selectorInfo.textContent,
        }

        return userInfo;
    }

    setUserInfo(data) {
        this._selectorName.textContent = data.fullname;
        this._selectorInfo.textContent = data.profession;
    }
}