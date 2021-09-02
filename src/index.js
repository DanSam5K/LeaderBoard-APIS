import _ from 'lodash';// eslint-disable-line
import './style.css';
const displayGame = document.querySelector('.list');
const form = document.querySelector('.form');
const username = document.querySelector('.input-name');
const userscore = document.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-button');

const leaderData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fOiEcJqrUPnT8bykVBXu/scores/';

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

