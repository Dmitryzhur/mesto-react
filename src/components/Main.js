import React, { useState, useEffect } from "react";
import api from "../utils/Api";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

	const [search, setSearch] = useState('');
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');

	const getUser = () => {
		setLoading(true);
		api.getUser(search)
			.then((res) => {
				setUserName(res.name);
				setUserDescription(res.about);
				setUserAvatar(res.avatar);
			})
			.catch((err) => { console.log(err); })
			.finally(() => setLoading(false));
		
			// Promise.all([api.getUser(), api.getCards()])
			// .then(([userData, cards]) => {
			// 	userInfo.setUserInfo(userData);
			// 	userInfo.setAvatar(userData);
			// 	userInfo.setId(userData);

			// 	cardList.renderItems(cards);
			// })
			// .catch((err) => { console.log(err); })
	}

	React.useEffect(() => {
		getUser();
	}, [userName, userDescription, userAvatar]);

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
			</section>
		</main>
	)
}

export default Main;