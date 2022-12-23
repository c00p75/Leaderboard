import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchAPIData from './Modules/Get data.js';
import postAPIData from './Modules/Post data.js';

document.querySelector('DOMContentLoaded', fetchAPIData());

document.querySelector('#refresh').addEventListener('click', () => {
  fetchAPIData();
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  postAPIData();
});