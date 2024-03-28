const localStorageKey = 'feedback-form-state';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');

let storage = {};
if (localStorage.getItem(localStorageKey) === null) {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ email: '', message: '' })
  );
}
//
const formStorage = JSON.parse(localStorage.getItem(localStorageKey));
const inputMessage = formStorage.email || '';
const textareaMessage = formStorage.message || '';

input.value = inputMessage;
textarea.value = textareaMessage;

form.addEventListener('input', saveDate);
form.addEventListener('submit', submitEvent);

function saveDate(event) {
  const getedData = event.target.value.trim();
  const storageNotSaved = JSON.parse(localStorage.getItem(localStorageKey));
  if (event.target.name === 'email') {
    storageNotSaved.email = getedData;
  } else if (event.target.name === 'message') {
    storageNotSaved.message = getedData;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(storageNotSaved));
}

function submitEvent(event) {
  event.preventDefault();
  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('All form fields must be filled in!');
    return;
  }

  console.log({
    email: input.value.trim(),
    message: textarea.value.trim(),
  });
  localStorage.setItem(localStorageKey, JSON.stringify({}));
  input.value = '';
  textarea.value = '';
}
