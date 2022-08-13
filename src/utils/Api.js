class Api {
	constructor(options) {
		this._baseURL = options.baseUrl;
		this._headers = options.headers;
	}

	getCards() {
		return fetch(`${this._baseURL}/cards`, {
			method: 'GET',
			headers: this._headers,
		})
			.then(this._checkResponseStatus)
	}

	getUser() {
		return fetch(`${this._baseURL}/users/me`, {
			method: 'GET',
			headers: this._headers,
		})
			.then(this._checkResponseStatus)
	}

	editProfile(data) {
		return fetch(`${this._baseURL}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(data)
		},
		)
			.then(this._checkResponseStatus)
	}

	addCard(data) {
		return fetch(`${this._baseURL}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(data)
		})
			.then(this._checkResponseStatus)
	}

	delCard(_id) {
		return fetch(`${this._baseURL}/cards/${_id}`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._checkResponseStatus)
	}

	toggleLike(_id, isLiked) {
		if (!isLiked) {
			return fetch(`${this._baseURL}/cards/${_id}/likes`, {
				method: 'PUT',
				headers: this._headers,
			})
				.then(this._checkResponseStatus)
		} else {
			return fetch(`${this._baseURL}/cards/${_id}/likes`, {
				method: 'DELETE',
				headers: this._headers,
			})
				.then(this._checkResponseStatus)
		}
	}

	editAvatar(data) {
		return fetch(`${this._baseURL}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		},
		)
			.then(this._checkResponseStatus)
	}

	_checkResponseStatus(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	}

}

const API_CONFIG = {
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
	headers: {
		authorization: '5ae85ff0-6a9f-41ff-87d1-d1c4768e29ea',
		'Content-Type': 'application/json'
	}
};

const api = new Api(API_CONFIG);

export default api;