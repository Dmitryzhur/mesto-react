function PopupWithForm({ title, name, buttonName, children, isOpen, onClose, onSubmit, onClick }) {
	return (
		<div>
			<div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
				<div className="popup__container">
					<button type="button" className="popup__close-button button" id="close-button" onClick={onClose}></button>
					<h2 className="popup__heading">{title}</h2>
					<form className={`popup__admin popup__admin_type_${name}`} name={name} onSubmit={onSubmit}>
						{children}
					</form>
					<button type="submit" className="popup__button button" onClick={onClick}>{buttonName}</button>
				</div>
			</div>
		</div>
	)
}

export default PopupWithForm;