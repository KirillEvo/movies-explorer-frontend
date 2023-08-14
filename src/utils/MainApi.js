// const apiUrl = 'https://api.nomoreparties.co';

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }
  updateUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._checkResponse(res))
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    }).then(res => this._checkResponse(res))
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    }).then(res => this._checkResponse(res))
  }

  signOut(){
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }

  token() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }

  setMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country : data.country,
        director : data.director,
        duration : data.duration,
        year : data.year,
        description : data.description,
        image : `https://api.nomoreparties.co${data.image.url}`,
        trailerLink : data.trailerLink,
        thumbnail : `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId : data.id,
        nameRU : data.nameRU,
        nameEN : data.nameEN,
      })
    }).then(res => this._checkResponse(res))
  }

  delMovie(movie) {
    return fetch(`${this._baseUrl}/movies/${movie}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res);
  }
};

const api = new MainApi({
  // baseUrl: 'https://api.dip.nomoredomains.xyz',
  baseUrl: 'http://localhost:4444',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
