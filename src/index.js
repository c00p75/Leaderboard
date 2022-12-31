import './style.css';
import JSConfetti from 'js-confetti';
import fetchAPIData from './Modules/Get data.js';
import postAPIData from './Modules/Post data.js';

// Fetch data when DOM loads
document.querySelector('DOMContentLoaded', fetchAPIData());

// Refresh button event litsener
document.querySelector('#refresh').addEventListener('click', () => {
  fetchAPIData();
});

// Submit button event litsener
document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  document.querySelector('form #submit').disabled = true;
  await postAPIData();
  document.querySelector('form #submit').disabled = false;
});

// Top player confetti effect
const canvas = document.getElementById('confetti');
const jsConfetti = new JSConfetti({ canvas });
jsConfetti.particleSpeed = 60;

jsConfetti.addConfetti({
  confettiColors: [
    'gold', 'blue', 'goldenrod', 'red',
  ],
});

setInterval(() => jsConfetti.addConfetti({
  confettiColors: [
    'DodgerBlue', 'OliveDrab', 'Gold', 'Pink', 'SlateBlue', 'LightBlue', 'Violet', 'PaleGreen', 'SteelBlue', 'SandyBrown', 'Chocolate', 'Crimson',
  ],
}), 10000);

setInterval(() => jsConfetti.addConfetti({
  emojis: ['🏆'],
  emojiSize: 10,
  confettiNumber: 50,
}), 5000);