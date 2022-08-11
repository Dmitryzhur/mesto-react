import { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from "../utils/Api";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCardsList] = useState([]);
	// const [isLoading, setLoading] = useState(true);

	const getUser = () => {
		// setLoading(true);
		api.getUser()
			.then((res) => { setCurrentUser(res) })
			.catch((err) => { console.log(err) })
		// .finally(() => setLoading(false));
	}

	useEffect(() => {
		getUser()
	}, []);

	const getCards = () => {
		// setLoading(true);
		api.getCards()
			.then((res) => { setCardsList(res) })
			.catch((err) => { console.log(err) })
		// .finally(() => setLoading(false));
	};

	useEffect(() => {
		getCards();
	}, []);

	const onCardLike = (card) => {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.toggleLike(card._id, isLiked)
			.then((newCard) => {
				setCardsList((state) => state.map((c) => c._id === card._id ? newCard : c));
			})
			.catch((err) => { console.log(err) })
	}

	const onCardDelete = (card) => {
		api.delCard(card._id)
			.then(() => {
				const newArr = cards.filter(item => item._id !== card._id);
				setCardsList(newArr);
			})
			.catch((err) => { console.log(err) })
	}

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
		<CurrentUserContext.Provider value={currentUser} >
			<div className="page">
				<Header />
				<Main
					onEditAvatar={onEditAvatar}
					onEditProfile={onEditProfile}
					onAddPlace={onAddPlace}
					onCardClick={setSelectedCard}
					cards={cards}
					onCardLike={onCardLike}
					onCardDelete={onCardDelete}
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
		</CurrentUserContext.Provider>
	);
}

export default App;
