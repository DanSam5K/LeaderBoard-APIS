import _ from 'lodash';
import './style.css';

const displayGame = document.querySelector('.list');
const form = document.querySelector('.form');
const username = document.querySelector('.input-name');
const userscore = document.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-button');

const leaderData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LoAHj9ubO8l2HuWQEMln/scores/';

const postData = async (gamerName, gamerScore) => {
  const response = await fetch(leaderData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: gamerName,
      score: gamerScore,
    }),
  })
    .then((res) => res.json());
  return response;
};

form.addEventListener('submit', (e) => {
  const usernameValue = username.value;
  const userscoreValue = userscore.value;
  e.preventDefault();
  postData(usernameValue, userscoreValue);
  form.reset();
});

const getData = async () => {
  const refreshData = await fetch(leaderData);
  const refreshJsonData = await refreshData.json();
  return refreshJsonData;
};

refreshBtn.addEventListener('click', () => {
  getData().then((data) => {
    displayGame.innerHTML = '';
    data.result.forEach((data) => {
      const gameList = document.createElement('li');
      gameList.classList.add('flex', 'border');
      const gamerData = document.createElement('p');
      gamerData.innerHTML = `${data.user}: ${data.score}`;
      gameList.appendChild(gamerData);
      displayGame.appendChild(gameList);
    });
  });
});
