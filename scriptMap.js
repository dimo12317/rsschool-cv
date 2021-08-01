let contactUs = document.querySelector('header .controlPanel .contactUs');
let contactUsFoter = document.querySelector('footer button')
let contactUsModal = document.getElementById('contactUsModal');
function ModalContact() {
    contactUsModal.style.display = "block";
}
contactUs.addEventListener('click', ModalContact);
contactUsFoter.addEventListener('click', ModalContact);
window.addEventListener('click', () => {
    if (event.target == contactUsModal) {
        contactUsModal.style.display = "none";
    }
})


let logIn = document.querySelector('header .onlineLogoSearch .logIn');
let createAcNone = document.querySelectorAll('header .onlineLogoSearch .logInModalContent .createAc');
let createColor = document.querySelector('header .onlineLogoSearch .logInModalContent .chose .a');
let logColor = document.querySelector('header .onlineLogoSearch .logInModalContent .chose .b');
let logInModal = document.getElementById('logInModal');
function ModalLog() {
    createAcNone.forEach(element => {
        element.style.display = "none";
    });
    createColor.style.borderBottomColor = "#C5E1E6";
    logColor.style.borderBottomColor = "#2A8086";
    logInModal.style.display = "block";
}
logIn.addEventListener('click', ModalLog);
window.addEventListener('click', () => {
    if (event.target == logInModal) {
        logInModal.style.display = "none";
    }
})
let googleLogin = document.querySelectorAll('header .onlineLogoSearch .logInModalContent .choseMessage div');
googleLogin.forEach(element => {
    element.addEventListener('click', ()=>{
        if(element.style.borderStyle == "solid") {
            element.style.borderStyle = "hidden";
            return 0;
        }
        googleLogin.forEach( e => {
            e.style.borderStyle = "hidden"
        })
        element.style.borderStyle = "solid";
    })
})
let agre = document.querySelector('header .onlineLogoSearch .logInModalContent .useAg');
let agreStyle = document.querySelector('header .onlineLogoSearch .logInModalContent .useAg img');
agre.addEventListener('click', ()=>{
    if(agreStyle.style.backgroundColor == "green") {
        agreStyle.style.backgroundColor = "white";
        return 0;
    }
    agreStyle.style.backgroundColor = "green";
})
let sendCreateAk = document.querySelector('header .onlineLogoSearch .logInModalContent button');
let sendProtect = document.querySelectorAll('header .onlineLogoSearch .logInModalContent input');
let regAc = document.querySelector('header .onlineLogoSearch .regAc');
sendCreateAk.addEventListener('click', ()=>{
    if (logColor.style.borderBottomColor === "rgb(42, 128, 134)") {
        if (sendProtect[1].value != '' && sendProtect[2].value.length > 7 || googleLogin[0].style.borderStyle == 'solid' || googleLogin[1].style.borderStyle == 'solid') {
            if(googleLogin[0].style.borderStyle == 'solid') {
                regAc.innerHTML = 'Log in with Google';
                localStorage.setItem('person',sendProtect[1].value);
                createAc.style.display = 'none';
                logIn.style.display = 'none'; 
                regAc.style.display = 'flex'; 
                logInModal.style.display = "none";
                return 0;
            }
            if(googleLogin[1].style.borderStyle == 'solid') {
                regAc.innerHTML = 'Log in with Facebook';
                localStorage.setItem('person',sendProtect[1].value);
                createAc.style.display = 'none';
                logIn.style.display = 'none';
                regAc.style.display = 'flex';
                logInModal.style.display = "none";
                return 0;
            }
            createAc.style.display = 'none';
            logIn.style.display = 'none';
            regAc.innerHTML = sendProtect[1].value;
            localStorage.setItem('person',sendProtect[1].value);
            regAc.style.display = 'flex';
            logInModal.style.display = "none";
        }
    }  else {
        if (agreStyle.style.backgroundColor == 'green' && sendProtect[0].value != '' && sendProtect[1].value != '' && sendProtect[2].value.length > 7 || googleLogin[0].style.borderStyle == 'solid' || googleLogin[1].style.borderStyle == 'solid') {
            if(googleLogin[0].style.borderStyle == 'solid') {
                regAc.innerHTML = 'Log in with Google';
                localStorage.setItem('person','Log in with Google');
                createAc.style.display = 'none';
                logIn.style.display = 'none'; 
                regAc.style.display = 'flex'; 
                logInModal.style.display = "none";
                return 0;
            }
            if(googleLogin[1].style.borderStyle == 'solid') {
                regAc.innerHTML = 'Log in with Facebook';
                localStorage.setItem('person','Log in with Facebook');
                createAc.style.display = 'none';
                logIn.style.display = 'none';
                regAc.style.display = 'flex';
                logInModal.style.display = "none";
                return 0;
            }
            createAc.style.display = 'none';
            logIn.style.display = 'none';
            regAc.innerHTML = sendProtect[1].value;
            localStorage.setItem('person',sendProtect[1].value);
            regAc.style.display = 'flex';
            logInModal.style.display = "none";
        } else {
            alert('Incorrect email or password');
        }
    } 
})


let exit = document.querySelector('header .onlineLogoSearch .logOut');
regAc.addEventListener('click', ()=> {
    exit.style.display = 'flex';
})

exit.addEventListener('click', ()=> {
    regAc.style.display = 'none';
    exit.style.display = 'none';
    createAc.style.display = 'flex';
    logIn.style.display = 'flex';
    sendProtect.forEach(elem => {
        elem.value = '';
    })
    agreStyle.style.backgroundColor = 'white';
    googleLogin[0].style.borderStyle = "hidden";
    googleLogin[1].style.borderStyle = "hidden";
    localStorage.setItem('person', '');
})


let createAc = document.querySelector('header .onlineLogoSearch .signUp');
createAc.addEventListener('click', () => {
    createAcNone.forEach(element => {
        element.style.display = "flex";
    });
    createColor.style.borderBottomColor = "#2A8086";
    logColor.style.borderBottomColor = "#C5E1E6";
    logInModal.style.display = "block";
})

let modalLogIn = document.querySelector('header .onlineLogoSearch .logInModalContent .chose .b')
let modalCreateAc = document.querySelector('header .onlineLogoSearch .logInModalContent .chose .a')
modalLogIn.addEventListener('click', ()=>{
    if(modalLogIn.style.borderBottomColor == "#2A8086") {
        return 0;
    } else {
        createAcNone.forEach(element => {
            element.style.display = "none";
        });
        createColor.style.borderBottomColor = "#C5E1E6";
        logColor.style.borderBottomColor = "#2A8086";
        logInModal.style.display = "block";
    }
})
modalCreateAc.addEventListener('click', ()=>{
    if(modalCreateAc.style.borderBottomColor == "#2A8086") {
        return 0;
    } else {
        createAcNone.forEach(element => {
            element.style.display = "flex";
        });
        createColor.style.borderBottomColor = "#2A8086";
        logColor.style.borderBottomColor = "#C5E1E6";
        logInModal.style.display = "block";
    }
})


let map = document.querySelector('main .map')
let plus = document.querySelector('main .plus')
let minus = document.querySelector('main .minus')
console.log(map.style.backgroundSize)
let Xmap = 70;
let Ymap = 100;
plus.addEventListener('click', ()=>{
    console.log(true)
    map.style.backgroundSize = `${Xmap + 1}% ${Ymap + 1}%`;
    Xmap++;
    Ymap++;
})
minus.addEventListener('click', ()=>{
    console.log(true)
    map.style.backgroundSize = `${Xmap - 1}% ${Ymap - 1}%`;
    Xmap--;
    Ymap--;
})

let person = localStorage.getItem('person');
if(person != '') {
    createAc.style.display = 'none';
    logIn.style.display = 'none';
    regAc.innerHTML = person;
    regAc.style.display = 'flex';
}