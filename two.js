let btnCV = document.querySelector('.form__block-cvv') 

let cardCV = document.querySelector('.card__info-cv')

btnCV.addEventListener('click' , (event) => {
    event.preventDefault()
})

btnCV.addEventListener('click' , function(){
    let randomCV = Math.floor(Math.random() * 900) + 100
    cardCV.textContent = 'CV' + randomCV
})

let blockName = document.querySelector('.form__block-name')

let cardName = document.querySelector('.card__name')

blockName.addEventListener('input' , function(){
    let newName = blockName.value
    cardName.innerHTML = newName
})

let blockSurname = document.querySelector('.form__block-surname')

let cardSurname = document.querySelector('.card__surname')

blockSurname.addEventListener('input' , function(){
    let newSurename = blockSurname.value
    cardSurname.innerHTML = newSurename
})

let cardNumber = document.querySelector('.card__input')

let clickNumber = document.querySelector('.form__block-button')

clickNumber.addEventListener("click", (event) => {
    event.preventDefault()
})

clickNumber.addEventListener("click" , function(){
    let randomNumber = Math.floor(Math.random() * 9000) + 1000
    let randomNumbertwo = Math.floor(Math.random() * 9000) + 1000
    let randomNumberthree = Math.floor(Math.random() * 9000) + 1000
    let randomNumberfour = Math.floor(Math.random() * 9000) + 1000
    cardNumber.textContent = randomNumber + ' ' + randomNumbertwo + ' ' + randomNumberthree + ' ' + randomNumberfour
})



let blockDate = document.querySelector('.form__block-date')

let infoDate = document.querySelector('.card__info-date')

blockDate.addEventListener('change' , function(){
    let activeDate = blockDate.value
    let selectDate = activeDate.split('-')
    if(selectDate.length === 3 ){
        let year = selectDate[0]
        let month = selectDate[1]
        let day = selectDate[2]
        infoDate.textContent = `${day} / ${month} / ${year}`
    }
})

window.addEventListener('scroll' , function(){
    let fOrm = document.querySelector('.form-2')

    if(scrollY > 50){
        fOrm.classList.add('block')
    }
    else{
        fOrm.classList.remove('block')
    }
})




let nameValue = sessionStorage.getItem('nameValue')
document.querySelector('.header__username').innerHTML = nameValue














/* modal */
let cardFin = document.querySelector('.card__fin')
let finButton = document.querySelector('.card__button')

finButton.addEventListener('click' , function(){
    if(cardFin.className === 'card__fin') {
        cardFin.style.display = 'block'
    }

    else {
        cardFin.style.display = 'none'
    }
})







