function Card({ card, onCardClick }) {
	function handleClick() {
		onCardClick(card);
	}

	return (
		<div className="elements__element">
			<button type="button" className="elements__element-trash-button button" aria-label="Удалить"></button>
			<img className="elements__element-img" src={`${card.link}`} alt={card.name} onClick={handleClick} />
			<div className="elements__element-block">
				<h3 className="elements__element-title">{card.name}</h3>
				<div className="elements__element-like-container">
					<button className="elements__element-like-button button" type="button" aria-label="Нравится"></button>
					<p className="elements__element-number-like">{card.likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;