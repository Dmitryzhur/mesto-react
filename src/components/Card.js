function Card() {
	return (
		<template id="elements__element-template">
			<div className="elements__element">
				<button type="button" className="elements__element-trash-button button"></button>
				<img className="elements__element-img" />
					<div className="elements__element-block">
						<h3 className="elements__element-title"></h3>
						<div className="elements__element-like-container">
							<button className="elements__element-like-button button" type="button" aria-label="Нравится"></button>
							<p className="elements__element-number-like">0</p>
						</div>
					</div>
			</div>
		</template>
	)
}

export default Card;