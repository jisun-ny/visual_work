const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const usernameSavedAtStorage = localStorage.getItem(USERNAME_KEY);
if (USERNAME_KEY === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(usernameSavedAtStorage);
}
