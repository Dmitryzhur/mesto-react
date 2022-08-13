import { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
// import PopupWithForm from "./PopupWithForm";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	// const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCardsList] = useState([]);
	// const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		// setLoading(true);
		Promise.all([api.getUser(), api.getCards()])
			.then(([userData, initialCards]) => {
				setCurrentUser(userData);
				setCardsList(initialCards);
			})
			.catch((err) => { console.log(err) })
		// .finally(() => setLoading(false))
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

	function handleAddCard(data) {
		api.addCard(data)
			.then((newCard) => {
				setCardsList([newCard, ...cards]);
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

	// const onCardDeleteClick = () => {
	// 	setIsDeletePlacePopupOpen(!isDeletePlacePopupOpen);
	// }

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		// setIsDeletePlacePopupOpen(false);
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

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddCard={handleAddCard} />

				<ImagePopup
					name='view-image'
					card={selectedCard}
					onClose={closeAllPopups} />

				{/* <PopupWithForm
					name="confirm"
					title="Вы уверены?"
					buttonName="Да"
					isOpen={isDeletePlacePopupOpen}
					onClose={closeAllPopups}
					onSubmit={onCardDelete} 
					card={selectedCard}
					/> */}
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
