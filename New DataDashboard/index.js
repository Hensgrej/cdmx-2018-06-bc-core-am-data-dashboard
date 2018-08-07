// HTML Elements
const btnDropdownMexico = document.getElementById('campus-mexico');
const btnDropdownLima = document.getElementById('campus-lima');
const btnDropdownSantiago = document.getElementById('campus-santiago');

const mexicoGenerations = document.getElementById('mexico-info');
const limaGenerations = document.getElementById('lima-info');
const santiagoGenerations = document.getElementById('santiago-info');
const mexicoGenerationBtns = document.getElementsByClassName('mexico-generations');

let getEmail = document.getElementById('email');
let getPassword = document.getElementById('password');
let btnLogin = document.getElementById('btnLogin');

// Hide non necessary HTML elements
mexicoGenerations.style.display = 'none';
limaGenerations.style.display = 'none';
santiagoGenerations.style.display = 'none';

btnDropdownMexico.addEventListener('click', () => {
  mexicoGenerations.style.display = 'block';
  santiagoGenerations.style.display = 'none';
  limaGenerations.style.display = 'none';
});

btnDropdownLima.addEventListener('click', () => {
  mexicoGenerations.style.display = 'none';
  santiagoGenerations.style.display = 'none';
  limaGenerations.style.display = 'block';
});

btnDropdownSantiago.addEventListener('click', () => {
  santiagoGenerations.style.display = 'block';
  mexicoGenerations.style.display = 'none';
  limaGenerations.style.display = 'none';
});

