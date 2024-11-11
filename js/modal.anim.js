let modal = document.querySelector('.auth-modal')
let blurScreen = document.querySelector('.blur-screen')
let hidebtn = document.querySelector('.hide-modal')

modal.style.visibility = 'hidden'
blurScreen.style.visibility = 'hidden'
hidebtn.style.visibility = 'hidden'

function showModal() {
	console.log('кнопка нажата')
	modal.style.visibility = 'visible'
	blurScreen.style.visibility = 'visible'
	hidebtn.style.visibility = 'visible'
	modal.style.transform = 'translateY(25%)'
}
function hideModal() {
	modal.style.visibility = 'hidden'
	blurScreen.style.visibility = 'hidden'
	hidebtn.style.visibility = 'hidden'
	modal.style.transform = 'translateY(-125%)'
}
