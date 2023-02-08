const cardTwo = document.querySelector('.card-two')
const arrow = document.querySelector('.arrow')
const cardOne = document.querySelector('.card-one')
const x = document.querySelector('.card-main-x')

const translate = () => {
	cardTwo.classList.add('translate')
}
const scaleLeft = () => {
	cardOne.classList.toggle('scale-out-hor-left')
}

const returned = () => {
    cardTwo.classList.remove('translate')
}

cardTwo.addEventListener('click', translate)
arrow.addEventListener('click', scaleLeft)
x.addEventListener('clcik', returned)