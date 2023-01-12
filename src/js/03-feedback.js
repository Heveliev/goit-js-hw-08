const throttle = require('lodash.throttle');

const obj = {};
const form = document.querySelector('.feedback-form');
const btn = form[2];

form.addEventListener('input', throttle(onInput,500))

function onInput (evt) {
obj[evt.target.name] = evt.target.value;
localStorage.setItem('feedback-form-state',JSON.stringify(obj))
}


function getLocal() {
    
if (!localStorage.getItem('feedback-form-state')) {
return
} else{
    try{
   const getItem = JSON.parse(localStorage.getItem('feedback-form-state'));
for (const key in getItem) {
   obj[key] = getItem[key];
   form[key].value = getItem[key]
}
    } catch(e){
        console.log(e)
    }
}}

getLocal();


form.addEventListener('submit', onSubmit);

function onSubmit (evt){
evt.preventDefault();

console.log(obj)
localStorage.removeItem('feedback-form-state');
form.elements.email.value = '';
form.elements.message.value = '';
};
