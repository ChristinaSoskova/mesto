(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){var a,c,l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c=function(){l._element.remove(),l._element=null},(a="removeCard")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c,this.cardId=e._id,this._data=e,this._name=e.name,this._link=e.link,this._owner=e.owner,this._userId=o,this._templateSelector=n,this._openImg=r,this._openPopupBth=i,this._setLikeCard=u}var n,r;return n=t,(r=[{key:"getId",value:function(){return this._data._id}},{key:"_getTemplate",value:function(){return this._templateSelector.content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return Boolean(this._data.likes.find((function(t){return t._id===e._userId})))}},{key:"setLike",value:function(e){this._data.likes=e.likes,this._updateLike()}},{key:"_updateLike",value:function(){this._element.querySelector(".element_like-meter").textContent=this._data.likes.length,this.isLiked()?this._element.querySelector(".element__like-button").classList.add("element__like-button_type_click"):this._element.querySelector(".element__like-button").classList.remove("element__like-button_type_click")}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name;var e=this._element.querySelector(".element__picture");return e.alt=this._name,e.src=this._link,this._updateLike(),this._setEventListeners(),this._compareId(),this._element.querySelector(".element_like-meter").textContent=this._data.likes.length,this._element}},{key:"_compareId",value:function(){this._userId!==this._owner._id&&this._element.querySelector(".element__delete-button").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__picture").addEventListener("click",(function(){return e._openImg(e._name,e._link)}));var t=this._element.querySelector(".element__like-button"),n=this._element.querySelector(".element__delete-button");t.addEventListener("click",(function(){return e._setLikeCard(e)})),n.addEventListener("click",(function(){return e._openPopupBth(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__point",submitButtonSelector:".popup__save-button",inputErrorClass:"popup__point_invalid"};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"toggleFormSubmit",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?o._submitButton.removeAttribute("disabled"):o._submitButton.setAttribute("disabled","disabled")})),i(this,"_showError",(function(e,t){t.classList.add(o._validationConfig.inputErrorClass),e.textContent=t.validationMessage})),i(this,"_hideError",(function(e,t){t.classList.remove(o._validationConfig.inputErrorClass),e.textContent=t.validationMessage})),i(this,"_checkInputValidity",(function(e,t){var n=o._form.querySelector(".".concat(e.id,"-error"));e.validity.valid?o._hideError(n,e,t):o._showError(n,e,t)})),i(this,"_setEventListener",(function(){var e;o._form.addEventListener("submit",(function(e){e.preventDefault()})),(e=o._inputList,function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e,o._form,o._validationConfig),o.toggleFormSubmit(o._form.checkValidity())}))}))})),this._form=n,this._validationConfig=t,this._inputList=n.querySelectorAll(t.inputSelector),this._submitButton=n.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListener(this._form,this._validationConfig)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&(e.preventDefault(),o.close())},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close(),e._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close}))}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return p(this,u),(r=i.call(this,e))._form=r._popup.querySelector(n),r._erorr=r._form.querySelectorAll(t),r._submitHandler=o,r._submitBth=r._form.querySelector(".popup__save-button"),r}return t=u,(n=[{key:"_getInputValue",value:function(){var e={};return s(this._form.querySelectorAll(".popup__point")).forEach((function(t){e[t.name]=t.value})),e}},{key:"renderLoading",value:function(e){this._submitBth.textContent=e?"Сохранение...":"Сохранение"}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValue())})),d(b(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){var e=this;d(b(u.prototype),"close",this).call(this),s(this._form.querySelectorAll(".popup__point")).forEach((function(t){t.classList.remove("popup__point_invalid"),e._clearErorr(t)})),this._form.reset()}},{key:"_clearErorr",value:function(e){this._form.querySelector(".".concat(e.id,"-error")).textContent=""}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__pic"),t}return t=u,(n=[{key:"open",value:function(e,t){k(j(u.prototype),"open",this).call(this),this._popupImg.src=t,this._popupImg.alt=e,this._popup.querySelector(".popup__subtitle").textContent=e,k(j(u.prototype),"setEventListeners",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorName=document.querySelector(t),this._selectorInfo=document.querySelector(n),this._selectorAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._selectorName.textContent,userDescription:this._selectorInfo.textContent}}},{key:"setUserInfo",value:function(e){this._selectorName.textContent=e.name,this._selectorInfo.textContent=e.about,this._selectorAvatar.src=e.avatar}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var R=new WeakSet,x=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=R),r.add(n),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return T(e,R,D).call(e,t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return T(e,R,D).call(e,t)}))}},{key:"getEditUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.fullname,about:e.profession})}).then((function(e){return T(t,R,D).call(t,e)}))}},{key:"getAddCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return T(t,R,D).call(t,e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return T(t,R,D).call(t,e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return T(t,R,D).call(t,e)}))}},{key:"toggleLike",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return T(n,R,D).call(n,e)}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return e.ok?e.json():Promise.reject({message:"Ошибка",res:e})}function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function M(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._handleClickDelete=null,t}return t=u,(n=[{key:"deleteThisCard",value:function(e){this._handleClickDelete=e}},{key:"setEventListeners",value:function(){var e=this;N(F(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__save-button_type_delete").addEventListener("click",(function(t){t.preventDefault(),e._handleClickDelete(),N(F(u.prototype),"close",e).call(e)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._avatarSelector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"setNewAvatar",value:function(e){this._avatarSelector.src=e.avatar}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=document.querySelector("#elements__container-template"),G=document.querySelector(".intro__edit-button"),K=document.querySelector(".profile__add-button"),Q=document.querySelector(".popup__save-button_type_add"),X=document.querySelector(".popup__form_type_edit"),Y=document.querySelector(".popup__point_content_name"),Z=document.querySelector(".popup__point_content_job"),ee=document.querySelector(".popup__form_type_add"),te=document.querySelector(".popup__form_type_avatar"),ne=document.querySelector(".profile__avatar"),re=new x({url:"https://mesto.nomoreparties.co/v1/cohort-51",headers:{authorization:"b75081c3-63ae-4231-8d9c-4e1ac7e43aad","Content-Type":"application/json"}}),oe=new u(n,X),ie=new u(n,ee),ue=new u(n,te),ae=new q(".intro__title",".intro__subtitle",".profile__avatar"),ce=new m(".popup_type_add-card",".popup__item-error",".popup__form",(function(e){ce.renderLoading(!0),re.getAddCard(e).then((function(e){de.addItem(_e(e)),Q.setAttribute("disabled","disabled")})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){ce.renderLoading(!1),ce.close()}))})),le=new m(".popup_type_edit",".popup__item-error",".popup__form",(function(e){le.renderLoading(!0),re.getEditUserInfo(e).then((function(e){ae.setUserInfo(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){le.renderLoading(!1),le.close()}))})),se=new J(".popup_type_delete-card"),fe=new m(".popup_type_avatar",".popup__item-error",".popup__form",(function(e){fe.renderLoading(!0),re.changeAvatar(e).then((function(e){ye.setNewAvatar(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){fe.renderLoading(!1),fe.close()}))})),pe=new L(".popup_type_image"),ye=new $(".profile__avatar"),de=new C({renderer:function(e){de.addItem(_e(e))}},".elements__container");function he(e,t){pe.open(e,t)}function _e(e){return new t(e,W,he,"dbff5f8afe75600de4898ec4",ve,be).generateCard()}function ve(e){se.deleteThisCard((function(){return re.removeCard(e.getId()).then((function(){e.removeCard()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))})),se.open(e)}function be(e){re.toggleLike(e.cardId,e.isLiked()).then((function(t){e.setLike(t)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}se.setEventListeners(),ce.setEventListeners(),fe.setEventListeners(),le.setEventListeners(),pe.setEventListeners(),ie.enableValidation(),ue.enableValidation(),ie.toggleFormSubmit(!1),oe.enableValidation(),G.addEventListener("click",(function(){var e=ae.getUserInfo();Y.value=e.userName,Z.value=e.userDescription,le.open()})),K.addEventListener("click",(function(){return ce.open()})),ne.addEventListener("click",(function(){return fe.open()})),re.getUserInfo().then((function(e){ae.setUserInfo(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})),re.getInitialCards().then((function(e){de.rendererItems(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))})();