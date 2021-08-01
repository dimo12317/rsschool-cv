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


let payAndFeedModal = document.getElementById("payAndFeedModal");
let payAndBack = document.querySelector(".donat")
payAndBack.addEventListener('click', () => {
    payAndFeedModal.style.display = "block";
})
window.addEventListener('click', ()=>{
    if( event.target == payAndFeedModal) {
        payAndFeedModal.style.display = "none";
    }
})

let monthly = document.querySelector(".contactUsModalContent .timeDonate .b");
let oneTime = document.querySelector(".contactUsModalContent .timeDonate .a");
monthly.addEventListener('click', ()=>{
    monthly.style.backgroundColor = "#19707D";
    monthly.style.color = "#FFFFFF";
    oneTime.style.backgroundColor = "#E5E5E5";
    oneTime.style.color = "#19707D";
})
oneTime.addEventListener('click', ()=>{
    oneTime.style.backgroundColor = "#19707D";
    oneTime.style.color = "#FFFFFF";
    monthly.style.backgroundColor = "#E5E5E5";
    monthly.style.color = "#19707D";
})

let moneyDonate = document.querySelectorAll(".contactUsModalContent .moneyDonate button");
moneyDonate.forEach(element => {
    element.addEventListener("click", ()=>{
        moneyDonate.forEach(elem => {
            elem.style.backgroundColor = "#E5E5E5";
            elem.style.color = "#19707D";
        })
        element.style.backgroundColor = "#19707D";
        element.style.color = "#FFFFFF";
    })
})

let mainScreen = document.querySelector("main .infoPage .mainScreen");
let atherScreen = document.querySelectorAll("main .infoPage .threeFoto .threeFotoImg");
let arrPandSrc = ['https://www.youtube.com/embed/pEwSaEJ2S9Y','https://www.youtube.com/embed/lyMtQLM02XQ','https://www.youtube.com/embed/R7QNDmhGwDg']
let arrPandImg = ['OnlineZ.image/mqdefault_6s (2).webp','OnlineZ.image/mqdefault_6s (3).webp','OnlineZ.image/mqdefault_6s (4).webp']
let mainPandMas = ['OnlineZ.image/hqdefault_live (6).webp', 'https://www.youtube.com/embed/rgXWDk7rh4w'];
atherScreen.forEach(param => {
    param.addEventListener('click', e => {
        if(atherScreen[0] == param) {
            let im = mainPandMas[0];
            let sr = mainPandMas[1];
            mainPandMas[0] = arrPandImg[0];
            mainPandMas[1] = arrPandSrc[0];
            arrPandImg[0] = im;
            for(let i = 0; i < likePandMas.length; i++) {
                if (likePandMas[i] == mainPandMas[0]) {
                    if(likePandMas[i+1] == true) {
                        buttonLikePandMas.style.backgroundColor = "red";
                    } else{
                        buttonLikePandMas.style.backgroundColor = "white";
                    }
                }
            }
            arrPandSrc[0] = sr;
            mainScreen.src = mainPandMas[1];
            param.src = arrPandImg[0];
        }
        if(atherScreen[1] == param) {
            let im = mainPandMas[0];
            let sr = mainPandMas[1];
            mainPandMas[0] = arrPandImg[1];
            mainPandMas[1] = arrPandSrc[1];
            arrPandImg[1] = im;
            for(let i = 0; i < likePandMas.length; i++) {
                if (likePandMas[i] == mainPandMas[0]) {
                    if(likePandMas[i+1] == true) {
                        buttonLikePandMas.style.backgroundColor = "red";
                    } else{
                        buttonLikePandMas.style.backgroundColor = "white";
                    }
                }
            }
            arrPandSrc[1] = sr;
            mainScreen.src = mainPandMas[1];
            param.src = arrPandImg[1];
        }
        if(atherScreen[2] == param) {
            let im = mainPandMas[0];
            let sr = mainPandMas[1];
            mainPandMas[0] = arrPandImg[2];
            mainPandMas[1] = arrPandSrc[2];
            arrPandImg[2] = im;
            for(let i = 0; i < likePandMas.length; i++) {
                if (likePandMas[i] == mainPandMas[0]) {
                    if(likePandMas[i+1] == true) {
                        buttonLikePandMas.style.backgroundColor = "red";
                    } else{
                        buttonLikePandMas.style.backgroundColor = "white";
                    }
                }
            }
            arrPandSrc[2] = sr;
            mainScreen.src = mainPandMas[1];
            param.src = arrPandImg[2];
        }
    })
})

let likePandMas = ['OnlineZ.image/mqdefault_6s (2).webp', false, 'OnlineZ.image/mqdefault_6s (3).webp', false, 'OnlineZ.image/mqdefault_6s (4).webp', false, 'OnlineZ.image/hqdefault_live (6).webp', false]
let buttonLikePandMas = document.querySelector('main .infoPage .infoPageLogo .LogoLike');
buttonLikePandMas.addEventListener('click', ()=> {
    for(let i = 0; i < likePandMas.length; i++) {
        if (likePandMas[i] == mainPandMas[0]) {
            if(likePandMas[i+1] == true) {
                buttonLikePandMas.style.backgroundColor = "white";
                likePandMas[i+1] = false;
            } else{
                buttonLikePandMas.style.backgroundColor = "red";
                likePandMas[i+1] = true;
            }
        }
    }
})


let person = localStorage.getItem('person');
console.log(person)
if(person != '') {
    createAc.style.display = 'none';
    logIn.style.display = 'none';
    regAc.innerHTML = person;
    regAc.style.display = 'flex';
}
