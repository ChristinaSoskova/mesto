(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){var a,c,l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c=function(){l._element.remove(),l._element=null},(a="removeCard")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c,this.cardId=e._id,this._data=e,this._name=e.name,this._link=e.link,this._owner=e.owner,this._userId=o,this._template=n,this._openImg=r,this._openPopupBth=i,this._setLikeCard=u}var n,r;return n=t,(r=[{key:"getId",value:function(){return this._data._id}},{key:"_getTemplate",value:function(){return this._template.content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return Boolean(this._data.likes.find((function(t){return t._id===e._userId})))}},{key:"setLike",value:function(e){this._data.likes=e.likes,this._updateLike()}},{key:"_updateLike",value:function(){this._likeMeter.textContent=this._data.likes.length,this.isLiked()?this._likeBth.classList.add("element__like-button_type_click"):this._likeBth.classList.remove("element__like-button_type_click")}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name;var e=this._element.querySelector(".element__picture");return e.alt=this._name,e.src=this._link,this._likeMeter=this._element.querySelector(".element_like-meter"),this._likeBth=this._element.querySelector(".element__like-button"),this._deleteBth=this._element.querySelector(".element__delete-button"),this._updateLike(),this._setEventListeners(),this._compareId(),this._likeMeter.textContent=this._data.likes.length,this._element}},{key:"_compareId",value:function(){this._userId!==this._owner._id&&this._deleteBth.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__picture").addEventListener("click",(function(){return e._openImg(e._name,e._link)})),this._likeBth.addEventListener("click",(function(){return e._setLikeCard(e)})),this._deleteBth.addEventListener("click",(function(){return e._openPopupBth(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__point",submitButtonSelector:".popup__save-button",inputErrorClass:"popup__point_invalid"};function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"toggleFormSubmit",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?o._submitButton.removeAttribute("disabled"):o._submitButton.setAttribute("disabled","disabled")})),u(this,"_showError",(function(e,t){t.classList.add(o._validationConfig.inputErrorClass),e.textContent=t.validationMessage})),u(this,"_hideError",(function(e,t){t.classList.remove(o._validationConfig.inputErrorClass),e.textContent=t.validationMessage})),u(this,"_checkInputValidity",(function(e,t){var n=o._form.querySelector(".".concat(e.id,"-error"));e.validity.valid?o._hideError(n,e,t):o._showError(n,e,t)})),u(this,"_setEventListener",(function(){o._form.addEventListener("submit",(function(e){e.preventDefault()})),r(o._inputList).forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e,o._form,o._validationConfig),o.toggleFormSubmit(o._form.checkValidity())}))}))})),this._form=n,this._validationConfig=t,this._inputList=n.querySelectorAll(t.inputSelector),this._submitButton=n.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"clearErorr",value:function(){var e=this;r(this._inputList).forEach((function(t){t.classList.remove("popup__point_invalid"),e._form.querySelector(".".concat(t.id,"-error")).textContent=""}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&(e.preventDefault(),o.close())},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return p(this,u),(n=i.call(this,e))._form=n._popup.querySelector(t),n._submitHandler=r,n._submitBth=n._form.querySelector(".popup__save-button"),n._submitBthText=n._submitBth.textContent,n._inputElements=n._form.querySelectorAll(".popup__point"),n}return t=u,n=[{key:"_getInputValue",value:function(){var e,t={};return(e=this._inputElements,function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){t[e.name]=e.value})),t}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitBth.textContent=e?t:this._submitBthText}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValue())})),y(b(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){y(b(u.prototype),"close",this).call(this),this._form.reset()}}],n&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function E(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__pic"),t._popupSubtitle=t._popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){k(j(u.prototype),"open",this).call(this),this._popupImg.src=t,this._popupImg.alt=e,this._popupSubtitle.textContent=e}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorName=document.querySelector(t),this._selectorInfo=document.querySelector(n),this._selectorAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._selectorName.textContent,userDescription:this._selectorInfo.textContent}}},{key:"setUserInfo",value:function(e){this._selectorName.textContent=e.name,this._selectorInfo.textContent=e.about,this._selectorAvatar.src=e.avatar}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var R=new WeakSet,B=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=R),r.add(n),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return T(e,R,x).call(e,t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return T(e,R,x).call(e,t)}))}},{key:"getEditUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.fullname,about:e.profession})}).then((function(e){return T(t,R,x).call(t,e)}))}},{key:"getAddCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return T(t,R,x).call(t,e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return T(t,R,x).call(t,e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return T(t,R,x).call(t,e)}))}},{key:"toggleLike",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return T(n,R,x).call(n,e)}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return e.ok?e.json():Promise.reject({message:"Ошибка",res:e})}function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function H(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._handleClickDelete=null,t}return t=u,(n=[{key:"setDeleteHandler",value:function(e){this._handleClickDelete=e}},{key:"setEventListeners",value:function(){var e=this;N(F(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__save-button_type_delete").addEventListener("click",(function(t){t.preventDefault(),e._handleClickDelete()}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z,W=document.querySelector("#elements__container-template"),G=document.querySelector(".intro__edit-button"),K=document.querySelector(".profile__add-button"),Q=(document.querySelector(".popup__save-button_type_add"),document.querySelector(".popup__form_type_edit")),X=document.querySelector(".popup__point_content_name"),Y=document.querySelector(".popup__point_content_job"),Z=document.querySelector(".popup__form_type_add"),ee=document.querySelector(".popup__form_type_avatar"),te=document.querySelector(".profile__avatar"),ne=new B({url:"https://mesto.nomoreparties.co/v1/cohort-51",headers:{authorization:"b75081c3-63ae-4231-8d9c-4e1ac7e43aad","Content-Type":"application/json"}}),re=new a(n,Q),oe=new a(n,Z),ie=new a(n,ee),ue=new q(".intro__title",".intro__subtitle",".profile__avatar"),ae=new m(".popup_type_add-card",".popup__form",(function(e){ae.renderLoading(!0),ne.getAddCard(e).then((function(e){pe.addItem(ye(e)),ae.close()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){ae.renderLoading(!1)}))})),ce=new m(".popup_type_edit",".popup__form",(function(e){ce.renderLoading(!0),ne.getEditUserInfo(e).then((function(e){ue.setUserInfo(e),ce.close()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){ce.renderLoading(!1)}))})),le=new J(".popup_type_delete-card"),se=new m(".popup_type_avatar",".popup__form",(function(e){se.renderLoading(!0),ne.changeAvatar(e).then((function(e){ue.setUserInfo(e),se.close()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){se.renderLoading(!1)}))})),fe=new L(".popup_type_image"),pe=new C({renderer:function(e){pe.addItem(ye(e))}},".elements__container");function he(e,t){fe.open(e,t)}function ye(e){return new t(e,W,he,z,de,_e).generateCard()}function de(e){le.setDeleteHandler((function(){return ne.removeCard(e.getId()).then((function(){e.removeCard(),le.close()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))})),le.open(e)}function _e(e){ne.toggleLike(e.cardId,e.isLiked()).then((function(t){e.setLike(t)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}le.setEventListeners(),ae.setEventListeners(),se.setEventListeners(),ce.setEventListeners(),fe.setEventListeners(),oe.enableValidation(),ie.enableValidation(),re.enableValidation(),G.addEventListener("click",(function(){var e=ue.getUserInfo();X.value=e.userName,Y.value=e.userDescription,ce.open(),re.clearErorr(),re.toggleFormSubmit(!0)})),K.addEventListener("click",(function(){oe.toggleFormSubmit(!1),oe.clearErorr(),ae.open()})),te.addEventListener("click",(function(){se.open(),ie.toggleFormSubmit(!1),ie.clearErorr()})),Promise.all([ne.getUserInfo(),ne.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ue.setUserInfo(o),z=o._id,pe.rendererItems(i)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))})();