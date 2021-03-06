const fetch = require('node-fetch');

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const leaderBoard = () => {
  fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Strikers Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => new Error('Error:', error));
};

export default leaderBoard;