const inputName = document.querySelector('#name')
const inputLastName = document.querySelector('#lname')
const inputMail = document.querySelector('#mail')
const inputPassword = document.querySelector('#password')
const btn = document.querySelector('.form-btn')
const nameError = document.querySelector('.name-error')
const lastNameError = document.querySelector('.lname-error')
const mailError = document.querySelector('.email-error')
const passError = document.querySelector('.password-error')
const iconErrorName = document.querySelector('#ierror-name')
const iconErrorLastName = document.querySelector('#ierror-lname')
const iconErrorMail = document.querySelector('#ierror-mail')
const iconErrorPass = document.querySelector('#ierror-pass')


const nameCheck = () => {
	if (inputName.value == 0) {
		nameError.style.display = 'block'
		iconErrorName.style.display = 'block'
		inputName.style.borderColor = 'hsl(0, 100%, 74%)'
	} else {
		nameError.style.display = 'none'
		iconErrorName.style.display = 'none'
		inputName.style.borderColor = 'hsl(154, 59%, 51%)'
	}
}

const lastNameCheck = () => {
	if (inputLastName.value == 0) {
		lastNameError.style.display = 'block'
		iconErrorLastName.style.display = 'block'
		inputLastName.style.borderColor = 'hsl(0, 100%, 74%)'
	} else {
		lastNameError.style.display = 'none'
		iconErrorLastName.style.display = 'none'
		inputLastName.style.borderColor = 'hsl(154, 59%, 51%)'
	}
}

const mailCheck = () => {
	if (!inputMail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/i)) {
		mailError.style.display = 'block'
		iconErrorMail.style.display = 'block'
		mailError.textContent = 'Your email address is incorrect'
		inputMail.style.borderColor = 'hsl(0, 100%, 74%)'
	} else {
		mailError.style.display = 'none'
		iconErrorMail.style.display = 'none'
		inputMail.style.borderColor = 'hsl(154, 59%, 51%)'
	}
}

const passwordCheck = () => {
	if (inputPassword.value.length < 4 && inputPassword.value.length > 0) {
		passError.style.display = 'block'
		passError.textContent = 'Your password is too short'
		iconErrorPass.style.display = 'block'
		inputPassword.style.borderColor = 'hsl(0, 100%, 74%)'
	} else if(inputPassword.value.length == 0) {
		passError.style.display = 'block'
		passError.textContent = 'Password cannot be empty'
		iconErrorPass.style.display = 'block'
		inputPassword.style.borderColor = 'hsl(0, 100%, 74%)'
	} else {
		passError.style.display = 'none'
		iconErrorPass.style.display = 'none'
		inputPassword.style.borderColor = 'hsl(154, 59%, 51%)'
	}
}

btn.addEventListener('click', () => {
	nameCheck()
	lastNameCheck()
	mailCheck()
	passwordCheck()
})
