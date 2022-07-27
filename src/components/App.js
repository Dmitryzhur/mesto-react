import { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});

	// Обработчики открытия попапов
	const onEditAvatar = () => {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
	}

	const onEditProfile = () => {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	}

	const onAddPlace = () => {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
	}

	const closeAllPopup = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard({});
	}

	return (
		<div className="page">
			<Header />
			<Main
				onEditAvatar={onEditAvatar}
				onEditProfile={onEditProfile}
				onAddPlace={onAddPlace}
				onCardClick={setSelectedCard}
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

			<ImagePopup
				name='view-image'
				card={selectedCard}
				onClose={closeAllPopup}>

			</ImagePopup>
		</div>
	);
}

export default App;
