class Api {
    constructor(baseUrl, headers) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
  
    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        method: "GET",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    editUser(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    createCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    deleteCards(idCard) {
      return fetch(`${this.baseUrl}/cards/${idCard}`, {
        method: "DELETE",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    likeCards(idCard, isLiked) {
      return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
        method: "PUT",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    deleteLikeCards(idCard) {
      return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
        method: "DELETE",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    updateAvatar(avatar) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            `Algo ha fallado: ${res.status} ${res.statusText}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
}

export const api = new Api("https://around-api.es.tripleten-services.com/v1", {
    authorization: "1b616ac7-5a64-43db-bbcc-24fb8a005c55",
    "Content-Type": "application/json",
  });