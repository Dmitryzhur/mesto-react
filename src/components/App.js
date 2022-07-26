import { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

	// Обработчики открытия попапов
	const onEditAvatar = () => {
		console.log('обработчик ОБНОВЛЕНИЕ АВЫ');
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
		!isEditAvatarPopupOpen ? console.log('ВЕРНО') : console.log('НЕВЕРНО');
	}

	const onEditProfile = () => {
		console.log('обработчик ИЗМЕНЕНИЯ ПРОФИЛЯ');
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
		!isEditProfilePopupOpen ? console.log('держи поп. Меняй') : console.log('куда пропал поп ап');
	}

	const onAddPlace = () => {
		console.log('обработчик ДОБАВЛЕНИЯ МЕСТА');
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
		!isAddPlacePopupOpen ? console.log('получил поп') : console.log('куда пропал поп ап');
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

			<PopupWithForm
				title='Редактировать профиль'
				name='edit'
				buttonName='Сохранить'
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopup}>
				<>
					<input className="popup__item" type="text" id="input-name" name="name" placeholder="Имя" required
						minLength="2" maxLength="40" />
					<span className="popup__input-error input-name-error popup__error"></span>
					<input className="popup__item" type="text" id="input-about" name="about" placeholder="О себе" required
						minLength="2" maxLength="200" />
					<span className="popup__input-error input-about-error popup__error"></span>
				</>
			</PopupWithForm>

			<PopupWithForm
				title='Новое место'
				name='add-element'
				buttonName='Создать'
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopup}>
				<>
					<input className="popup__item" type="text" id="input-name-place" name="input-name-place"
						placeholder="Название" required minLength="2" maxLength="30" />
					<span className="popup__input-error input-name-place-error popup__error"></span>
					<input className="popup__item" type="url" id="input-link-place" name="input-link-place"
						placeholder="Ссылка на картинку" required />
					<span className="popup__input-error input-link-place-error popup__error"></span>
				</>
			</PopupWithForm>

			<PopupWithForm />
			<ImagePopup />
		</div>
	);
}

export default App;
