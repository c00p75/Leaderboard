export default async () => {
  const list = document.querySelector('#board table');
  const scores = document.createElement('table');
  scores.innerHTML = '<thead><th>User Name</th><th></th><th>Points</th></thead>';
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkTCYEA17yEVtm11XsOo/scores/')
    .then((response) => response.json())
    .then((json) => {
      json.result.sort((a, b) => b.score - a.score);
      document.querySelector('#top-player').innerHTML = `<span>Top Player: ${json.result[0].user}🏆</<span>`;
      json.result.forEach((i) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${i.user}</td> <td>:</td> <td>${i.score}</td>`;
        scores.appendChild(row);
      });
    });
  document.querySelector('#board').replaceChild(scores, list);
};
