import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
	const buttonAdd = document.querySelector('.profile__add-button');
	const buttonEdit = document.querySelector('.profile__edit-button');
	const buttonUpdateAvatar = document.querySelector('.profile__avatar-change');
	
	// function openPopup() {
	// 	this._popup.classList.add('popup_opened');
	// 	document.addEventListener('keyup', this._handleEscClose);
	// }

	// Обработчики
	const handleEditAvatarClick = () => {
		console.log('обработчик ОБНОВЛЕНИЕ АВЫ');
		const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
		popupUpdateAvatar.classList.add('popup_opened');
	}

	function handleEditProfileClick() {
		console.log('обработчик ИЗМЕНЕНИЯ ПРОФИЛЯ');
		const popupEditProfile = document.querySelector('.popup_type_edit');
		popupEditProfile.classList.add('popup_opened');
	}

	function handleAddPlaceClick() {
		console.log('обработчик ДОБАВЛЕНИЯ МЕСТА');
		const popupNewPlace = document.querySelector('.popup_type_add-element');
		popupNewPlace.classList.add('popup_opened');
	}

	// const editProfilePopup = new PopupWithForm({
	// 	callbackFunction: (data) => {
	// 		editProfilePopup.renderLoading(true)
	// 		api.editProfile(data)
	// 			.then((res) => {
	// 				userInfo.setUserInfo(res);
	// 				editProfilePopup.closePopup();
	// 			})
	// 			.catch((err) => { console.log(err); })
	// 			.finally(() => {
	// 				editProfilePopup.renderLoading(false);
	// 			})
	// 	}
	// }, '.popup_type_edit'
	// );
	// editProfilePopup.setEventListeners();

	// const popupUpdateAvatar = new PopupWithForm({
	// 	callbackFunction: (data) => {
	// 		popupUpdateAvatar.renderLoading(true)
	// 		api.editAvatar(data)
	// 			.then((res) => {
	// 				userInfo.setAvatar(res);
	// 				popupUpdateAvatar.closePopup();
	// 			})
	// 			.catch((err) => { console.log(err); })
	// 			.finally(() => {
	// 				popupUpdateAvatar.renderLoading(false);
	// 			})
	// 	}
	// }, '.popup_type_update-avatar'
	// );
	// popupUpdateAvatar.setEventListeners();

	// const popupNewPlace = new PopupWithForm({
	// 	callbackFunction: (data) => {
	// 		popupNewPlace.renderLoading(true)
	// 		api.addCard(data)
	// 			.then(res => {
	// 				cardList.addItem(makeNewCard(res));
	// 				popupNewPlace.closePopup();
	// 			})
	// 			.catch((err) => { console.log(err); })
	// 			.finally(() => {
	// 				popupNewPlace.renderLoading(false);
	// 			})
	// 	}
	// }, '.popup_type_add-element');
	// popupNewPlace.setEventListeners();

	return (
		<div className="page">
			<Header />
			<Main
				handleEditAvatarClick={handleEditAvatarClick}
				handleEditProfileClick={handleEditProfileClick}
				handleAddPlaceClick={handleAddPlaceClick}
			/>
			<Footer />
			<PopupWithForm />
			<PopupWithForm />
			<PopupWithForm />
			<PopupWithForm />
			<ImagePopup />
		</div>
	);
}

export default App;
