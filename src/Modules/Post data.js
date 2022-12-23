const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');

export default async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkTCYEA17yEVtm11XsOo/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
  })
    .then((response) => response.json());
  userName.value = '';
  userScore.value = '';
};