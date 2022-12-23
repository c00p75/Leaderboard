export default async () => {
  const list = document.querySelector('#board ul');
  const scores = document.createElement('ul');
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkTCYEA17yEVtm11XsOo/scores/')
    .then((response) => response.json())
    .then((json) => {
      json.result.forEach((i) => {
        const item = document.createElement('li');
        item.innerHTML = `<span>${i.user}</span> : <span>${i.score}</span>`;
        scores.appendChild(item);
      });
    });
  document.querySelector('#board').replaceChild(scores, list);
};
