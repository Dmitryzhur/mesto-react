import { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

	// Обработчики открытия попапов
	const onEditAvatar = () => {
		console.log('обработчик ОБНОВЛЕНИЕ АВЫ')
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
		!isEditAvatarPopupOpen ? console.log('ВЕРНО') : console.log('НЕВЕРНО')
	}

	const onEditProfile = () => {
		console.log('обработчик ИЗМЕНЕНИЯ ПРОФИЛЯ');
		const popupEditProfile = document.querySelector('.popup_type_edit');
		popupEditProfile.classList.add('popup_opened');
	}

	const onAddPlace = () => {
		console.log('обработчик ДОБАВЛЕНИЯ МЕСТА');
		const popupNewPlace = document.querySelector('.popup_type_add-element');
		popupNewPlace.classList.add('popup_opened');
	}

	const closeAllPopup = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
	}

	return (
		<div className="page">
			<Header />
			<Main
				onEditAvatar={onEditAvatar}
				onEditProfile={onEditProfile}
				onAddPlace={onAddPlace}
			/>
			<Footer />

			<PopupWithForm
				title='Обновить аватар'
				name='update-avatar'
				buttonName='Сохранить'
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopup}>
				<>
					<input className="popup__item" type="url" id="input-link-avatar" name="avatar"
						placeholder="Ссылка на картинку" required />
					<span className="popup__input-error input-link-avatar-error popup__error"></span>
				</>
			</PopupWithForm>

			<PopupWithForm />
			<PopupWithForm />
			<PopupWithForm />
			<ImagePopup />
		</div>
	);
}

export default App;
