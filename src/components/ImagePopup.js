function ImagePopup() {
	return (
		<div>
			<div className="popup popup_type_view-image">
				<div className="popup__container-image">
					<button type="button" className="popup__close-button button" id="close-button-popup-view"></button>
					<img src="#" alt="Увеличенная карточка" className="popup__image" />
					<p className="popup__description"></p>
				</div>
			</div>
		</div>
	)
}

export default ImagePopup;