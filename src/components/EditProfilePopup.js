import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const currentUser = useContext(CurrentUserContext);

	// После загрузки текущего пользователя из API
	// его данные будут использованы в управляемых компонентах.
	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser, isOpen]);

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeDescription(e) {
		setDescription(e.target.value);
	}

	function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();

		// Передаём значения управляемых компонентов во внешний обработчик
		onUpdateUser({
			name,
			about: description,
		});
	}

	return (
		<PopupWithForm
			title='Редактировать профиль'
			name='edit'
			buttonName='Сохранить'
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<>
				<input
					className="popup__item"
					type="text"
					id="input-name"
					name="name"
					placeholder="Имя"
					required
					minLength="2"
					maxLength="40"
					value={name || ''}
					onChange={handleChangeName} />
				<span className="popup__input-error input-name-error popup__error"></span>

				<input
					className="popup__item"
					type="text"
					id="input-about"
					name="about"
					placeholder="О себе"
					required
					minLength="2"
					maxLength="200"
					value={description || ''}
					onChange={handleChangeDescription} />
				<span className="popup__input-error input-about-error popup__error"></span>
			</>
		</PopupWithForm>
	)
}

export default EditProfilePopup;