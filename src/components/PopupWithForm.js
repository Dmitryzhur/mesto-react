// Кроме заголовка и идентификатора в компонент PopupWithForm 
// будет передаваться вложенное содержимое в виде JSX-разметки, 
// отличающейся для всех четырёх попапов.

function PopupWithForm({ title, name, buttonName, children, isOpen, onClose }) {
	return (
		<div>
			<div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button" onClick={onClose}></button>
					<h2 className="popup__heading">{title}</h2>
					<form className={`popup__admin popup__admin_type_${name}`} name={name}>
						{children}
					</form>
					<button type="submit" className="popup__button button">{buttonName}</button>
				</div>
			</div>

{/* 
			<div className="popup popup_type_edit">
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button"></button>
					<h2 className="popup__heading">Редактировать профиль</h2>
					<form className="popup__admin popup__admin_type_profile" name="EditProfile" noValidate>
						<input className="popup__item" type="text" id="input-name" name="name" placeholder="Имя" required
							minLength="2" maxLength="40" />
						<span className="popup__input-error input-name-error popup__error"></span>
						<input className="popup__item" type="text" id="input-about" name="about" placeholder="О себе" required
							minLength="2" maxLength="200" />
						<span className="popup__input-error input-about-error popup__error"></span>
						<button type="submit" className="popup__button button">Сохранить</button>
					</form>
				</div>
			</div>

			<div className="popup popup_type_add-element">
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button-popup-add"></button>
					<h2 className="popup__heading">Новое место</h2>
					<form className="popup__admin popup__admin_type_add-elem" name="NewPlace" noValidate>
						<input className="popup__item" type="text" id="input-name-place" name="input-name-place"
							placeholder="Название" required minLength="2" maxLength="30" />
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
					<form className="popup__admin popup__admin_type_profile" name="Update-Avatar" noValidate>
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
			</div> */}
		</div>
	)
}

export default PopupWithForm;