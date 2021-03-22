let fullSCR = document.getElementById("fullScreen");
fullSCR.onclick = ()=>{
    if(document.fullscreenElement){
        document.exitFullscreen();
    }else{
        document.documentElement.requestFullscreen();
    }
}

let C = document.getElementById("C");
let F = document.getElementById("F");
let G = document.getElementById("G");
let H = document.getElementById("H");
let J = document.getElementById("J");
let K = document.getElementById("K");
let L = document.getElementById("L");

let R = document.getElementById("R");
let T = document.getElementById("T");
let U = document.getElementById("U");
let I = document.getElementById("I");
let O = document.getElementById("O");

let Nt = document.getElementById("Nt");
let Lt = document.getElementById("Lt");

let param = 1;

let mas1 = ['KeyC','KeyD','KeyE','KeyF','KeyG','KeyA','KeyB'];
let mas2 = ['KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM'];

let know = mas1;

Nt.onclick = function(event){
    if(param === 2){
        Lt.style.background = "#515961";
        Nt.style.background = "#00b4a4";
        C.dataset.note = "c";
        F.dataset.note = "d";
        G.dataset.note = "e";
        H.dataset.note = "f";
        J.dataset.note = "g";
        K.dataset.note = "a";
        L.dataset.note = "b";
        R.dataset.note = "c♯";
        T.dataset.note = "d♯";
        U.dataset.note = "f♯";
        I.dataset.note = "g♯";
        O.dataset.note = "a♯";
        know = mas1;
        param = 1;
    }
}

Lt.onclick = function(event){
    if(param === 1){
        Lt.style.background = "#00b4a4";
        Nt.style.background = "#515961";
        C.dataset.note = "z";
        F.dataset.note = "x";
        G.dataset.note = "c";
        H.dataset.note = "v";
        J.dataset.note = "b";
        K.dataset.note = "n";
        L.dataset.note = "m";
        R.dataset.note = "C♯";
        T.dataset.note = "D♯";
        U.dataset.note = "F♯";
        I.dataset.note = "G♯";
        O.dataset.note = "A♯";
        know = mas2;
        param = 2;
    }
}

C.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
    C.style.background = "red"
    }
}
C.onmouseout = function(event){
    C.style.background = "white";
}
C.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
    C.style.background = "red"
    setTimeout(()=>{C.style.background = "white";}, 200);
}

R.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_c♯.mp3').play();
    R.style.background = "green";
    }
}
R.onmouseout = function(event){
    R.style.background = "#313940";
}
R.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_c♯.mp3').play();
    R.style.background = "green";
    setTimeout(()=>{R.style.background = "#313940";}, 200);
}

F.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_d.mp3').play();
    F.style.background = "red"}
}
F.onmouseout = function(event){
    F.style.background = "white";
}
F.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_d.mp3').play();
    F.style.background = "red"
    setTimeout(()=>{F.style.background = "white";}, 200);
}

T.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_d♯.mp3').play();
    T.style.background = "green"}
}
T.onmouseout = function(event){
    T.style.background = "#313940";
}
T.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_d♯.mp3').play();
    T.style.background = "green"
    setTimeout(()=>{T.style.background = "#313940";}, 200);
}

G.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_e.mp3').play();
    G.style.background = "red"}
}
G.onmouseout = function(event){
    G.style.background = "white";
}
G.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_e.mp3').play();
    G.style.background = "red"
    setTimeout(()=>{G.style.background = "white";}, 200);
}

U.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_f♯.mp3').play();
    U.style.background = "green"}
}
U.onmouseout = function(event){
    U.style.background = "#313940";
}
U.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_f♯.mp3').play();
    U.style.background = "green"
    setTimeout(()=>{U.style.background = "#313940";}, 200);
}

H.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_f.mp3').play();
    H.style.background = "red"}
}
H.onmouseout = function(event){
    H.style.background = "white";
}
H.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_f.mp3').play();
    H.style.background = "red"
    setTimeout(()=>{H.style.background = "white";}, 200);
}

I.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_g♯.mp3').play();
    I.style.background = "green"}
}
I.onmouseout = function(event){
    I.style.background = "#313940";
}
I.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_g♯.mp3').play();
    I.style.background = "green"
    setTimeout(()=>{I.style.background = "#313940";}, 200);
}

J.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_g.mp3').play();
    J.style.background = "red"}
}
J.onmouseout = function(event){
    J.style.background = "white";
}
J.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_g.mp3').play();
    J.style.background = "red"
    setTimeout(()=>{J.style.background = "white";}, 200);
}

K.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_a.mp3').play();
    K.style.background = "red"}
}
K.onmouseout = function(event){
    K.style.background = "white";
}
K.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_a.mp3').play();
    K.style.background = "red"
    setTimeout(()=>{K.style.background = "white";}, 200);
}

O.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_a♯.mp3').play();
    O.style.background = "green"}
}
O.onmouseout = function(event){
    O.style.background = "#313940";
}
O.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_a♯.mp3').play();
    O.style.background = "green"
    setTimeout(()=>{O.style.background = "#313940";}, 200);
}

L.onmouseover = function(event){
    if(event.which === 1){
    new Audio('assets/audio/virtual-piano_assets_audio_b.mp3').play();
    L.style.background = "red"}
}
L.onmouseout = function(event){
    L.style.background = "white";
}
L.onmousedown = function(){
    new Audio('assets/audio/virtual-piano_assets_audio_b.mp3').play();
    L.style.background = "red"
    setTimeout(()=>{L.style.background = "white";}, 200);
}

document.addEventListener('keydown', function(event){
    if(event.code == know[0]){
        new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
        C.style.background = "red"
        setTimeout(()=>{C.style.background = "white";}, 200);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyR'){
        new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
        R.style.background = "green"
        setTimeout(()=>{R.style.background = "#313940";}, 200);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyT'){
        new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
        T.style.background = "green"
        setTimeout(()=>{T.style.background = "#313940";}, 200);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyU'){
        new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
        U.style.background = "green"
        setTimeout(()=>{U.style.background = "#313940";}, 200);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyI'){
        new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
        I.style.background = "green"
        setTimeout(()=>{I.style.background = "#313940";}, 200);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyO'){
        new Audio('assets/audio/virtual-piano_assets_audio_c.mp3').play();
        O.style.background = "green"
        setTimeout(()=>{O.style.background = "#313940";}, 200);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == know[1]){
        new Audio('assets/audio/virtual-piano_assets_audio_d.mp3').play();
        F.style.background = "red"
        setTimeout(()=>{F.style.background = "white";}, 200);
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == know[2]){
        new Audio('assets/audio/virtual-piano_assets_audio_e.mp3').play();
        G.style.background = "red"
        setTimeout(()=>{G.style.background = "white";}, 200);
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == know[3]){
        new Audio('assets/audio/virtual-piano_assets_audio_f.mp3').play();
        H.style.background = "red"
        setTimeout(()=>{H.style.background = "white";}, 200);
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == know[4]){
        new Audio('assets/audio/virtual-piano_assets_audio_g.mp3').play();
        J.style.background = "red"
        setTimeout(()=>{J.style.background = "white";}, 200);
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == know[5]){
        new Audio('assets/audio/virtual-piano_assets_audio_a.mp3').play();
        K.style.background = "red"
        setTimeout(()=>{K.style.background = "white";}, 200);
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == know[6]){
        new Audio('assets/audio/virtual-piano_assets_audio_b.mp3').play();
        L.style.background = "red"
        setTimeout(()=>{L.style.background = "white";}, 200);
    }
})

