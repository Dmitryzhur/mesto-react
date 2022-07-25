import logo from '../images/logo.svg';
import avatar from '../images/avatar.png';
// import { isContentEditable } from '@testing-library/user-event/dist/utils';



function App() {
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Change <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>

		<div className="page">
			<header className="header">
				<img className="header__logo" src={logo} alt="Логотип проекта Mesto" />
			</header>

			<main className="content">
				<section className="profile">
					<div className="profile__avatar-info">
						<img className="profile__avatar" src={avatar} alt="Аватар пользователя" />
						<button type="button" className="profile__avatar-change" aria-label="Редактировать профиль"></button>
						<div className="profile__info">
							<h1 className="profile__title">Дмитрий Журавлев</h1>
							<button type="button" className="profile__edit-button button"></button>
							<p className="profile__subtitle">Повелитель дедлайнов</p>
						</div>
					</div>
					<button type="button" className="profile__add-button button"></button>
				</section>

				<section className="elements">
				</section>
			</main>

			<footer className="footer">
				<p className="footer__copyright">&copy; 2022 Mesto Russia</p>
			</footer>

			<div className="popup popup_type_edit">
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button"></button>
					<h2 className="popup__heading">Редактировать профиль</h2>
					<form className="popup__admin popup__admin_type_profile" name="EditProfile" novalidate>
						<input className="popup__item" type="text" id="input-name" name="name" placeholder="Имя" required
							minlength="2" maxlength="40" />
						<span className="popup__input-error input-name-error popup__error"></span>
						<input className="popup__item" type="text" id="input-about" name="about" placeholder="О себе" required
							minlength="2" maxlength="200" />
						<span className="popup__input-error input-about-error popup__error"></span>
						<button type="submit" className="popup__button button">Сохранить</button>
					</form>
				</div>
			</div>

			<div className="popup popup_type_add-element">
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button-popup-add"></button>
					<h2 clclassNameass="popup__heading">Новое место</h2>
					<form className="popup__admin popup__admin_type_add-elem" name="NewPlace" novalidate>
						<input className="popup__item" type="text" id="input-name-place" name="input-name-place"
							placeholder="Название" required minlength="2" maxlength="30" />
						<span className="popup__input-error input-name-place-error popup__error"></span>
						<input className="popup__item" type="url" id="input-link-place" name="input-link-place"
							placeholder="Ссылка на картинку" required />
						<span className="popup__input-error input-link-place-error popup__error"></span>
						<button type="submit" className="popup__button button">Создать</button>
					</form>
				</div>
			</div>

			<div className="popup popup_type_update-avatar">
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button-popup-avatar"></button>
					<h2 className="popup__heading">Обновить аватар</h2>
					<form className="popup__admin popup__admin_type_profile" name="Update-Avatar" novalidate>
						<input className="popup__item" type="url" id="input-link-avatar" name="avatar"
							placeholder="Ссылка на картинку" required />
						<span className="popup__input-error input-link-avatar-error popup__error"></span>
						<button type="submit" className="popup__button button">Сохранить</button>
					</form>
				</div>
			</div>

			<div className="popup popup_type_confirm">
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button-popup-confirm"></button>
					<h2 className="popup__heading">Вы уверены?</h2>
					<button type="submit" className="popup__button button">Да</button>
				</div>
			</div>

			<div className="popup popup_type_view-image">
				<div className="popup__container-image">
					<button type="button" className="popup__close-button button" id="close-button-popup-view"></button>
					<img src="#" alt="Увеличенная карточка" class="popup__image" />
					<p className="popup__description"></p>
				</div>
			</div>
		</div>
	);
}

export default App;
