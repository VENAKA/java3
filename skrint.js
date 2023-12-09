/* and && - також */
/* or || - або це або це */
/* not ! - ні*/


/* 
let firstNumber = 5
let reSult = firstNumber > 3 && firstNumber < 4
console.log(reSult) 
*/

/* 
let sekondNumber = 7
let reSult = sekondNumber > 6 || sekondNumber < 5
console.log(reSult) 
*/ 
/* 
let thirtNumber = '8'
let reSult = !isNaN(thirtNumber)
console.log(typeof reSult) 
*/


/* 
let numberNull = 0
let stringOne = 'zera'
if(stringOne === 'zero'){
    numberNull = 7
}
console.log(numberNull)
*/

/* 
let myBalens = prompt('введіть свій баланс')
if(myBalens >= '1$'){
    alert("Ви не бомж")
}
else{
    alert( 'ви ніщі')
}
console.log(myBalens) 
*/

/* 
let nameJs = prompt('в Яка офіційна назва JavaScript?')
if(nameJs === 'ECMAScript'){
    alert('Правильно!!!')
}
else{
    alert('Ви не знаєте? ECMAScript!')
}
console.log(nameJs)
*/

/* === - обов'язково має стояти в if ато буде лайно */

/* 
let asrNumber = prompt('введіть число')
if(asrNumber > 0){
    alert('більше')
}
else if(asrNumber < 0){
    alert('менше')
}
else{
    alert('рівно')
}
console.log(asrNumber)
*/

/* 
let result = a + b < 4 ? 'нижче' : 'вище'
console.log(result) 
*/

/* let firsrPole = prompt('Ввпишіть сюди шось')
let secondPole = prompt('Введіть сюди щось ще')
if(firsrPole = '' && secondPole !==''){
    alert()
} */

/* let numberOne = parseInt(prompt('Введіть число'))
let numberTwo = parseInt(prompt('Введіть ще одне число'))
let reSult = numberOne += numberTwo
if(reSult > 10){
    alert('Число більше 10')
}
else{
    alert('число менше або дорівнює 10' )
} */

/* let taskOne = document.querySelector('.one')

taskOne.style.backgroundColor = 'purple' */

/* let autLink = document.querySelector(".listK")
aS.style.backgroundColor = 'orange'

let inLink = document.querySelector(".list__item-link");
if(inLink.lenght > 0){
    inLink[0].add('new')
} */



/* let vodVidstan = parseInt(prompt('введіть скільки ви пробігли?')) 
let chuZiv = prompt('чи їли ви бургер?')
if(vodVidstan > '2км' && vodVidstan < '4км'){
    alert('ти аутсайдер')
}
else if(vodVidstan > '4км' && vodVidstan < '6км' && chuZiv === 'так' || chuZiv === 'да'){
    alert('а ти харош чорт')
}
else if(vodVidstan > '4км' && vodVidstan < '6км' !== chuZiv === 'так' || chuZiv === 'да'){
    alert('Ти шо голова, спортсмен?')
}
else if(vodVidstan > '6км' && vodVidstan < '8км'){
    alert('Чітер! Десь по любому змухлював')
}
else if(vodVidstan > '8км' && vodVidstan < '8км'){
    alert("Ти чемпік!")
}
 */



/*  let imG = document.querySelector('.t__ranok')
let teXt = document.querySelector('im__ranok')

imG.src = "/img/завантаження.jpg"


let liSt = document.querySelector('.list__item-1')

liSt.textContent = "я люблю їсти" */ 


/* let passworDe = document.querySelector('.form__email')  */

let eMail = document.querySelector('.form__email')

eMail.addEventListener('input', function(){
    let emailValue = eMail.value
    if(emailValue.length > 5 && emailValue.includes("@") && emailValue.includes(".") ){
        eMail.classList.add('active')
        eMail.classList.remove('active-O')
    }
    else if(emailValue.length === 0){
        eMail.classList.remove('active')
        eMail.classList.remove('active-O')
    }
    else{
        eMail.classList.remove('active')
        eMail.classList.add('active-O')
    }
}) 




let pasWord = document.querySelector('.form__pasword')

pasWord.addEventListener('input', function(){
    let paswordValue = pasWord.value
    if(paswordValue.length > 8 ){
        pasWord.classList.add('active-1')
        pasWord.classList.remove('active-2')
    }
    else if(paswordValue === 0){
        pasWord.classList.remove('active-1')
        pasWord.classList.remove('active-2')
    }
    else{
        eMail.classList.remove('active-1')
        eMail.classList.add('active-2')
    }
})

let userName = document.querySelector('.form__username')

userName.addEventListener('input' , function(){
    let userNamevalue = userName.value
    if(userNamevalue.length > 4 ){
        userName.classList.add('active-3')
        userName.classList.remove('active-4')
    }
    else if(userNamevalue === 0){
        userName.classList.remove('active-3')
        userName.classList.remove('active-4')
    }
    else{
        userName.classList.remove('active-3')
        userName.classList.add('active-4')
    }
})



let userPhone = document.querySelector('.form__telephone')

userPhone.addEventListener('input' , function(){
    let userPhonevalue = userPhone.value
    if(userPhonevalue > 12){
        userPhone.classList.add('active-5')
        userPhone.classList.remove('active-6')
    }
    else if(userPhonevalue === 0){
        userPhone.classList.remove('active-5')
        userPhone.classList.remove('active-6')
    }
    else{
        userPhone.classList.remove('active-5')
        userPhone.classList.add('active-6')
    }
})


/* let btnCV = document.querySelector('.btn__CV') 

let cardCV = document.querySelector('.card__CV')

btnCV.addEventListener('click' , function(){
    let randomCV = Math.floor(Math.random() * 900) + 100
    cardCV.textContent = 'CV' + randomCV
}) */




/* ddEventListener -слухач обробник подій */

/* eMail.className === 'form__email' */