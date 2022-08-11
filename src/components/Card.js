import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
	const currentUser = useContext(CurrentUserContext);

	// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
	const isLiked = card.likes.some(i => i._id === currentUser._id);
	// Создаём переменную, которую после зададим в `className` для кнопки лайка
	const cardLikeButtonClassName = (
		`elements__element-like-button ${isLiked ? 'elements__element-like-button_active' : ''}`
		);

	// Определяем, являемся ли мы владельцем текущей карточки
	const isOwn = card.owner._id === currentUser._id;
	// Создаём переменную, которую после зададим в `className` для кнопки удаления
	const cardDeleteButtonClassName = (
		`elements__element-trash-button ${isOwn ? 'elements__element-trash-button_visible' : ''}`
	);

	function handleClick() {
		onCardClick(card);
	}

	function handleCardLike() {
		onCardLike(card);
	}

	function handleCardDelete() {
		onCardDelete(card);
	}

	return (
		<div className="elements__element">
			<button type="button" className={`${cardDeleteButtonClassName} button`}  aria-label="Удалить" onClick={handleCardDelete}></button>
			<img className="elements__element-img" src={`${card.link}`} alt={card.name} onClick={handleClick} />
			<div className="elements__element-block">
				<h3 className="elements__element-title">{card.name}</h3>
				<div className="elements__element-like-container">
					<button className={`${cardLikeButtonClassName} button`} type="button" aria-label="Нравится" onClick={handleCardLike}></button>
					<p className="elements__element-number-like">{card.likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;