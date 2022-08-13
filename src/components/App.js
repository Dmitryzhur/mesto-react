import { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";


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

	function handleUpdateUser(data) {
		api.editProfile(data)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			})
	}

	function handleUpdateAvatar(data) {
		api.editAvatar(data)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			})
	}

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

	const closeAllPopups = () => {
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

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar} />

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser} />

				<PopupWithForm
					title='Новое место'
					name='add-element'
					buttonName='Создать'
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onSubmit={closeAllPopups}
				>
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
					onClose={closeAllPopups}>

				</ImagePopup>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
