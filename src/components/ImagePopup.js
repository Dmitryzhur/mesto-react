function ImagePopup({ name, card, onClose }) {
	return (
		<div>
			<div className={`popup popup_type_${name} ${card._id ? 'popup_opened' : ''}`}>
				<div className="popup__container-image">
					<button type="button" onClick={onClose} className="popup__close-button button" id="close-button-popup-view"></button>
					<img src={card.link} alt={card.name} className="popup__image" />
					<p className="popup__description">{card.name}</p>
				</div>
			</div>
		</div>
	)
}

export default ImagePopup;