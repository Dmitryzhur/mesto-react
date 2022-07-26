import avatar from '../images/avatar.png';

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
	

	
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-info">
					<img className="profile__avatar" src={avatar} alt="Аватар пользователя" />
					<button onClick={onEditAvatar} type="button" className="profile__avatar-change" aria-label="Редактировать профиль"></button>
					<div className="profile__info">
						<h1 className="profile__title">Дмитрий Журавлев</h1>
						<button onClick={onEditProfile} type="button" className="profile__edit-button button"></button>
						<p className="profile__subtitle">Повелитель дедлайнов</p>
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