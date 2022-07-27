import React, { useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCardsList] = useState([]);
	// const [isLoading, setLoading] = useState(true);

	const getUser = () => {
		// setLoading(true);
		api.getUser()
			.then((res) => {
				setUserName(res.name);
				setUserDescription(res.about);
				setUserAvatar(res.avatar);
			})
			.catch((err) => { console.log(err) })
			// .finally(() => setLoading(false));
	}

	React.useEffect(() => {
		getUser();
	}, [userName, userDescription, userAvatar]);

	const getCards = () => {
		// setLoading(true);
		api.getCards()
			.then((res) => { setCardsList(res) })
			.catch((err) => { console.log(err) })
			// .finally(() => setLoading(false));
	}

	React.useEffect(() => {
		getCards();
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-info">
					<img className="profile__avatar" src={`${userAvatar}`} alt="Аватар пользователя" />
					<button onClick={onEditAvatar} type="button" className="profile__avatar-change" aria-label="Редактировать профиль"></button>
					<div className="profile__info">
						<h1 className="profile__title">{userName}</h1>
						<button onClick={onEditProfile} type="button" className="profile__edit-button button"></button>
						<p className="profile__subtitle">{userDescription}</p>
					</div>
				</div>
				<button onClick={onAddPlace} type="button" className="profile__add-button button"></button>
			</section>

			<section className="elements">
				{cards.map((card) => {
					return <div key={card._id}>
						<Card card={card} onCardClick={onCardClick} />
					</div>
				}

				)}
			</section>
		</main>
	)
}

export default Main;