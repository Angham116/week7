const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
// const confirmPass = document.querySelector('#');

loginBtn.addEventListener('click', () => {
	const userData = {
	email : email.value,
	pass : password.value,
}
	// console.log('use',userData);
	fetch('/login', 'POST', userData, () => {
		console.log('hi');
	})
})

