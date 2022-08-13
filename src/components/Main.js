import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
	const currentUser = useContext(CurrentUserContext);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-info">
					<img className="profile__avatar" src={`${currentUser.avatar}`} alt="Аватар пользователя" />
					<button onClick={onEditAvatar} type="button" className="profile__avatar-change" aria-label="Редактировать профиль"></button>
					<div className="profile__info">
						<h1 className="profile__title">{currentUser.name}</h1>
						<button onClick={onEditProfile} type="button" className="profile__edit-button button"></button>
						<p className="profile__subtitle">{currentUser.about}</p>
					</div>
				</div>
				<button onClick={onAddPlace} type="button" className="profile__add-button button"></button>
			</section>

			<section className="elements">
				{cards.map((card) => {
					return <div key={card._id}>
						<Card
							card={card}
							onCardClick={onCardClick}
							onCardLike={onCardLike}
							onCardDelete={onCardDelete} />
					</div>
				}

				)}
			</section>
		</main>
	)
}

export default Main;