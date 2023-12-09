



let bUtton = document.querySelector('.form__btn')

bUtton.addEventListener("click", function ()  {
let eMail = document.querySelector(".form__email");
let pAssword = document.querySelector(".form__pasword");
let naMe = document.querySelector('.form__username')
let ascNumber = document.querySelector('.form__telephone')
let emailModal = document.querySelector('.email__modal')
let pasModal = document.querySelector('.pas__modal')
let userModal = document.querySelector('.user__modal')
let phoneModal = document.querySelector('.phone__madal')

let emailValue = eMail.value;
let passwordValue = pAssword.value;
let nameValue = naMe.value
let newNumberValue = ascNumber.value
let eMod = emailModal
let pasMod = pasModal
let useMod = userModal
let phoneMod = phoneModal


if(emailValue.length < 5 && !emailValue.includes("@") && !emailValue.includes(".")) {
    eMail.classList.add("active");
    eMail.classList.remove("deactive");
    eMod.classList.add("block")
    setTimeout(function(){
        eMod.classList.remove("block")
    } , 2000  )
    return;
}
else if(passwordValue.length < 7){
    pAssword.classList.add("active");
    pAssword.classList.remove("deactive");
    pasMod.classList.add("block")
    eMod.classList.remove("block")
    setTimeout(function(){
        pasMod.classList.remove("block")
    } , 2000)
    return;
}
else if(nameValue.length === 0){
    useMod.classList.add("block")
    pasMod.classList.remove("block")
    setTimeout(function(){
        useMod.classList.remove("block")
    } , 2000)
    return;
}
else if(newNumberValue.length !== 13 || !newNumberValue.includes('+')) {
    phoneMod.classList.add("block")
    useMod.classList.remove("block")
    setTimeout(function(){
        phoneMod.classList.remove("block")
    } , 2000)
    return;
}
else {
    sessionStorage.setItem("nameValue" , nameValue)
    window.location.href = '../2__st/two.html'
    phoneMod.classList.remove("block")
}

})



