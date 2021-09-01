import _ from 'lodash';
import './style.css';

const hardLoadedContent = () => {
  const scoreBoard = document.getElementById('update');
  const addScore = document.getElementById('add');
  const recentContent = `<div class="title-container">
      <h2 class="recent-title">Recent Scores</h2>
      <button class="submit-button">Refresh</button>
    </div>
    <ul class="list">
      <li id="1"><p>Wisdom: 10</p></li>
      <li id="2"><p>Faithfulness : 300</p></li>
      <li id="3"><p>Self control : 10</p></li>
      <li id="4"><p>Passion : 100</p></li>
      <li id="5"><p>Beauty : 10</p></li>
      <li id="6"><p>Power: 80</p></li>
    </ul>`;
  const addContent = `<div class="title-container">
      <h2 class="add-title">Add Your Score</h2>
    </div>
    <form class="form">
      <input class="input-name" type="text" placeholder="Your Name">
      <input class="input-score" type="text" placeholder="Your Score">
      <button class="submit-button" type="submit">Submit</button>
    </form>`;
  scoreBoard.innerHTML = recentContent;
  addScore.innerHTML = addContent;
  const UserList = document.querySelectorAll('li');
  UserList.forEach((item) => {
    if ((item.id % 2) !== 0) {
      item.style.backgroundColor = '#d0c9c3';
    }
  });
};

window.addEventListener('DOMContentLoaded', hardLoadedContent);