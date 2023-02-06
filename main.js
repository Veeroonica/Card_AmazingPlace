const cardTwo = document.querySelector('.card-two')
const arrow = document.querySelector('.arrow')
const cardOne = document.querySelector('.card-one')
const x = document.querySelector ('.card-main-x')
const cardMain = document.querySelector('.card-main')

const translate = () => {
    cardTwo.classList.toggle('translate')
}
const scaleLeft = () => {
    cardOne.classList.toggle('scale-out-hor-left')
}
const rotate = () => {
    cardMain.classList.toggle('card-main-scale')
}

cardTwo.addEventListener('click', translate)
arrow.addEventListener('click', scaleLeft)
x.addEventListener('click', rotate)