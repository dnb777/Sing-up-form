"use strict"

const form = document.querySelector('.my-form');
const psw = document.querySelector('#psw');
const confirmPsw = document.querySelector('#confirm-psw');
const submitBTN = document.querySelector('.submit-btn')
const error = document.querySelector('.error-span');

let passes = null;

const passesValidation = () => {
	if(psw.value != "" && confirmPsw.value && psw.value === confirmPsw.value) {
		psw.style.border = "2px solid green";
		confirmPsw.style.border = "2px solid green";
		error.classList.remove('error-msg');
		passes = true;

	}else {
		psw.style.border = "";
		confirmPsw.style.border = "";
		error.classList.add('error-msg');
		passes = false;
	}
}

function validate(event) {
	event.preventDefault();

	if(passes) {
		form.submit();
	}else {
		alert("Passwords must match")
	}
	
}

form.addEventListener('submit', validate)