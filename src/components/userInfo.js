export class UserInfo {
    constructor(selectorName, selectorInfo, selectorAvatar ) {
        this._selectorName = document.querySelector(selectorName);
        this._selectorInfo = document.querySelector(selectorInfo);
        this._selectorAvatar = document.querySelector(selectorAvatar);
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
        this._selectorName.textContent = data.name;
        this._selectorInfo.textContent = data.about;
        this._selectorAvatar.src = data.avatar;
    }
}