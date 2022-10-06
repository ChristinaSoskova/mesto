export class AvatarPicture {
    constructor(avatarSelector){
        this._avatarSelector = document.querySelector(avatarSelector);
    }

    setNewAvatar(data){
           this._avatarSelector.src = data.avatar;
    }
}