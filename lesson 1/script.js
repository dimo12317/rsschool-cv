let help = document.querySelectorAll(".search-button");
let modal = document.querySelector(".modal")
let close = document.querySelectorAll(".modal img");
let inputText = document.querySelectorAll(".modal .in");
let inputSubmit = document.querySelector(".modal .on");
let thanks = document.querySelector(".modal .thanks")


help.forEach(elem => {
    elem.addEventListener('click', () => {modal.style.display = "flex"})
})
window.addEventListener('click', () => {
    if (event.target == modal) {
        inputText[0].placeholder = "Имя";
        inputText[1].placeholder = "Телефон";
        modal.style.display = "none";
    }
})
close.forEach((element)=>{
    element.addEventListener("click", ()=>{
        inputText[0].placeholder = "Имя";
        inputText[1].placeholder = "Телефон";
        modal.style.display = "none";
    })
})


inputSubmit.addEventListener('click' , (event)=>{
    event.preventDefault();
    inputText.forEach((element)=>{
        if(element.value == "") {
            element.placeholder = "Заполните поле";
            return;
        }
    })
    if(inputText[1].value.length != 13) {
        inputText[1].value = "";
        inputText[1].placeholder = "пример +375(XX)XXX-XX-XX"
        return;
    } else {
        let numberFull = inputText[1].value;
        let numberKod = numberFull.slice(0,4);
        let number = numberFull.slice(3,inputText[1].value.length);
        if(numberKod != "+375") {
            console.log(numberKod)
            inputText[1].value = "";
            inputText[1].placeholder = "пример +375(XX)XXX-XX-XX"
            return;
        }
        if(!+number) {
            console.log(number)
            inputText[1].value = "";
            inputText[1].placeholder = "пример +375(XX)XXX-XX-XX"
            return;
        }
    }
    thanks.style.display = "flex";
    document.querySelector(".modal form").style.display = "none";
})




let info = document.querySelectorAll("main .info .info-box .info-box-inf")

info.forEach((element)=>{
    let inf = element.querySelectorAll(".inf");
    inf.forEach((element) => {
        element.style.display = "none";
    })
    inf[0].style.display = "flex";

    let nextInf = element.querySelectorAll(".open");
    nextInf.forEach((element) => {
        element.addEventListener("click", ()=>{
            for(let i = 0; i < inf.length; i++) {
                console.log(true)
                if(inf[i].style.display == "none") {
                    inf[i].style.display = "flex"
                    return; 
                }
            }
        })
    })

    let closeInf = element.querySelectorAll(".close");
    closeInf.forEach((element)=>{
        element.addEventListener('click', ()=>{
            element.parentNode.parentNode.style.display = "none";
        })
    })
});




