let regForm = document.querySelector('.reg-form')
let logForm = document.querySelector('.log-form')

regForm.style.display = 'none'
logForm.style.display = 'flex'
document.documentElement.style.setProperty('--color', 'var(--color1)')

function changeForm() {
	if (regForm.style.display === 'none') {
		regForm.style.display = 'flex'
		logForm.style.display = 'none'
		document.documentElement.style.setProperty('--color', 'var(--color2)')
	} else {
		regForm.style.display = 'none'
		logForm.style.display = 'flex'
		document.documentElement.style.setProperty('--color', 'var(--color1)')
	}
}
