const localStorageKey = 'feedback-form-state';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');

let storage = ['', ''];
if (localStorage.getItem(localStorageKey) === null) {
  localStorage.setItem(localStorageKey, JSON.stringify(['', '']));
}
const formStorage = JSON.parse(localStorage.getItem(localStorageKey));
const inputMessage = formStorage[0];
const textareaMessage = formStorage[1];

input.value = inputMessage;
textarea.value = textareaMessage;

input.addEventListener('input', saveForInput);
textarea.addEventListener('input', saveForTextarea);
form.addEventListener('submit', submitEvent);

function saveForInput(event) {
  event.preventDefault();
  const textInput = event.target.value.trim();
  storage = JSON.parse(localStorage.getItem(localStorageKey));
  storage[0] = textInput;
  localStorage.setItem(localStorageKey, JSON.stringify(storage));
}

function saveForTextarea(event) {
  event.preventDefault();
  const textTextarea = event.target.value.trim();
  storage = JSON.parse(localStorage.getItem(localStorageKey));
  storage[1] = textTextarea;
  localStorage.setItem(localStorageKey, JSON.stringify(storage));
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
  localStorage.setItem(localStorageKey, JSON.stringify(['', '']));
  input.value = '';
  textarea.value = '';
}
