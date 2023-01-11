const throttle = require('lodash.throttle');

const obj = {};
const form = document.querySelector('.feedback-form');
const input = form.email;
const texrarea= form.message;
const btn = form[2];

input.addEventListener('input', throttle(onInput,500))

function onInput () {
obj.email = `${input.value}`
localStorage.setItem('feedback-form-state',JSON.stringify(obj))
}

texrarea.addEventListener('input', throttle(onMess,500))

function onMess () {
obj.message = `${texrarea.value}`
localStorage.setItem('feedback-form-state',JSON.stringify(obj))
}

const getItem = JSON.parse(localStorage.getItem('feedback-form-state')) || '';

if ({email, message} = getItem) {
input.value = email || '';
texrarea.value = message || '';
}
btn.addEventListener('click', onSubmit);

function onSubmit (evt){
evt.preventDefault();
console.log(obj)
localStorage.removeItem('feedback-form-state');
input.value = '';
texrarea.value = '';
}   
