class ApiConfig {
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

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

}

const api = new ApiConfig({
  // baseUrl: 'https://api.dip.nomoredomains.xyz',
  baseUrl: 'http://localhost:4444',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
