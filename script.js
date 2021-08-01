let contactUs = document.querySelector('header .controlPanel .contactUs');
let contactUsModal = document.getElementById('contactUsModal');
let contactUsFoter = document.querySelector('footer button');
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

let person = localStorage.getItem('person');
console.log(person)
if(person != '') {
    createAc.style.display = 'none';
    logIn.style.display = 'none';
    regAc.innerHTML = person;
    regAc.style.display = 'flex';
}


let feedBackModal = document.getElementById("LeaveFeedModal");
let feedBac = document.querySelector("main .testimon .testimoRow1 .testimoRow1LeaveFeed")
function ModalFeet() {
    feedBackModal.style.display = "block";
}
feedBac.addEventListener('click', ModalFeet)
window.addEventListener('click', () => {
    if (event.target == feedBackModal) {
        feedBackModal.style.display = "none";
    }
})


let payAndFeedModal = document.getElementById("payAndFeedModal");
let payAndBack = document.querySelector("main .payAndFeed .payAndFeedDonate")
payAndBack.addEventListener('click', () => {
    payAndFeedModal.style.display = "block";
})
window.addEventListener('click', ()=>{
    if( event.target == payAndFeedModal) {
        payAndFeedModal.style.display = "none";
    }
})

let monthly = document.querySelector("main .payAndFeed .contactUsModalContent .timeDonate .b");
let oneTime = document.querySelector("main .payAndFeed .contactUsModalContent .timeDonate .a");
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

let moneyDonate = document.querySelectorAll("main .payAndFeed .contactUsModalContent .moneyDonate button");
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


let petInZooCarousel = document.getElementById("petsInZooCarousel");
let petInZooContent = document.getElementById("petInZooContent");
let petInZooNext = document.querySelector("main .petsInZoo .allmenuSecondary .i1");
let petInZooPrev = document.querySelector("main .petsInZoo .allmenuSecondary .i2");
petInZooNext.addEventListener('click', e => {
    petInZooContent.scrollBy(485, 0);
    petInZooNext.style.visibility = 'hidden';
    setTimeout(()=>{
        petInZooNext.style.visibility = 'visible';
    },800)
})
petInZooPrev.addEventListener('click', e => {
    petInZooContent.scrollBy(-485, 0);
    petInZooPrev.style.visibility = 'hidden';
    setTimeout(()=>{
        petInZooPrev.style.visibility = 'visible';
    },800)
})


let testimonContent = document.getElementById("testimoCarousel");
let testiParam = document.querySelector("main .testimon .testimoRow2");
setInterval(() => {
    testimonContent.scrollBy(484, 0);
}, 5000)
setInterval(() => {
    testiParam.style.scrollBehavior = "auto";
    testimonContent.scrollBy(-3000, 0);
    testiParam.style.scrollBehavior = "smooth";
    testimonContent.scrollBy(484, 0);
}, 20000)

let lookAtCarousel = document.getElementById("atherAnimalsContent");
let lookAtNext = document.querySelector("main .lookAtThisAnimals .atherAnimals .atherAnimalsArrows .AnimalsArrows1");
let lookAtPrev = document.querySelector("main .lookAtThisAnimals .atherAnimals .atherAnimalsArrows .AnimalsArrows2");
lookAtNext.addEventListener('click', e => {
    lookAtCarousel.scrollBy(200, 0);
    lookAtNext.style.visibility = 'hidden';
    setTimeout(()=>{
        lookAtNext.style.visibility = 'visible';
    },500)
})
lookAtPrev.addEventListener('click', e => {
    lookAtCarousel.scrollBy(-200, 0);
    lookAtPrev.style.visibility = 'hidden';
    setTimeout(()=>{
        lookAtPrev.style.visibility = 'visible';
    },500)
})
