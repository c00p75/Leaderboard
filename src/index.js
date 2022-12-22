import _ from 'lodash'; // eslint-disable-line
import './style.css';

const boardElement = document.querySelector('#board');

const fetchAPIData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkTCYEA17yEVtm11XsOo/scores/', {})
    .then(response => response.json())
    .then(json => {
      json.result.forEach((i) => {
        const item = document.createElement('li');
        item.innerHTML = `<span>${i.user}</span> : <span>${i.score}</span>`;
        boardElement.appendChild(item);
      });
    });
};

const postAPIData = (userName, userScore) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkTCYEA17yEVtm11XsOo/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

// postAPIData('cheez', 4);
fetchAPIData();