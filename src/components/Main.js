import avatar from '../images/avatar.png';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {
	

	
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-info">
					<img className="profile__avatar" src={avatar} alt="Аватар пользователя" />
					<button onClick={handleEditAvatarClick} type="button" className="profile__avatar-change" aria-label="Редактировать профиль"></button>
					<div className="profile__info">
						<h1 className="profile__title">Дмитрий Журавлев</h1>
						<button onClick={handleEditProfileClick} type="button" className="profile__edit-button button"></button>
						<p className="profile__subtitle">Повелитель дедлайнов</p>
					</div>
				</div>
				<button onClick={handleAddPlaceClick} type="button" className="profile__add-button button"></button>
			</section>

			<section className="elements">
			</section>

			<div className="popup popup_type_view-image">
				<div className="popup__container-image">
					<button type="button" className="popup__close-button button" id="close-button-popup-view"></button>
					<img src="#" alt="Увеличенная карточка" className="popup__image" />
					<p className="popup__description"></p>
				</div>
			</div>
		</main>
	)
}

export default Main;