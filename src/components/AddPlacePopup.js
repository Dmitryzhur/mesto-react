import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
	const [name, setName] = useState('');
	const [link, setLink] = useState('');

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeLink(e) {
		setLink(e.target.value);
	}

	function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();

		// Передаём значения управляемых компонентов во внешний обработчик
		onAddCard({
			name: name,
			link: link,
		});
	}

	// Очистка инпутов при открытии/закрытии
	useEffect(() => {
		setName('');
		setLink('');
	}, [isOpen]);

	return (
		<PopupWithForm
			title='Новое место'
			name='add-element'
			buttonName='Создать'
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<>
				<input
					className="popup__item"
					type="text"
					id="input-name-place"
					name="input-name-place"
					placeholder="Название"
					required
					minLength="2"
					maxLength="30"
					value={name || ''}
					onChange={handleChangeName} />
				<span className="popup__input-error input-name-place-error popup__error"></span>
				<input
					className="popup__item"
					type="url"
					id="input-link-place"
					name="input-link-place"
					placeholder="Ссылка на картинку"
					required
					value={link || ''}
					onChange={handleChangeLink} />
				<span className="popup__input-error input-link-place-error popup__error"></span>
			</>
		</PopupWithForm>
	)
}

export default AddPlacePopup;