import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
	const avatarRef = useRef();

	function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();
		// Передаём значения рефа во внешний обработчик
		onUpdateAvatar({
			avatar: avatarRef.current.value,
		});
	}

	return (
		<PopupWithForm
			title='Обновить аватар'
			name='update-avatar'
			buttonName='Сохранить'
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<>
				<input
					className="popup__item"
					type="url"
					id="input-link-avatar"
					name="avatar"
					placeholder="Ссылка на картинку"
					required
					ref={avatarRef} />
				<span className="popup__input-error input-link-avatar-error popup__error"></span>
			</>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;