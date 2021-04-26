
let fullSCR = document.getElementById("fullScreen");
fullSCR.onclick = ()=>{
    if(document.fullscreenElement){
        document.exitFullscreen();
    }else{
        document.documentElement.requestFullscreen();
    }
}


const inputs = document.querySelectorAll('.filters label input')
function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
function outputUpdate() {
    this.nextSibling.nextSibling.innerHTML = this.value;
}
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', outputUpdate));


let restButn = document.querySelector(".editor .btn-container .btn-reset");
function restUpdate() {
    document.documentElement.style.setProperty('--blur' , '0px')
    document.documentElement.style.setProperty('--invert' , '0px')
    document.documentElement.style.setProperty('--sepia' , '0px')
    document.documentElement.style.setProperty('--saturate' , '100px')
    document.documentElement.style.setProperty('--hue' , '0deg')
    document.documentElement.style = "";
    inputs.forEach(input => input.value = "0");
    inputs[3].value = "100";
    inputs.forEach(input => input.nextSibling.nextSibling.innerHTML = "0");
    inputs[3].nextSibling.nextSibling.innerHTML = "100";
}
restButn.addEventListener('click', restUpdate)


let restLoad = document.querySelector(".editor .btn-container .btn-load--input");
let mainImg = document.querySelector(".editor .mainImg");
function loadUpdate(){
    console.log(true)
    let file = this.files[0];
    console.log(restLoad.files)
    const reader = new FileReader();
    reader.onload = () => {
        mainImg.src = reader.result;
    }
    reader.readAsDataURL(file);
    nextPicture.addEventListener('click', ()=>{
        restLoad.files[0] = '';
    })
}
restLoad.addEventListener('input', loadUpdate);
console.log(restLoad.files)

let savePicture = document.querySelector('.editor .btn-container .btn-save')
let canvas =document.createElement('canvas');
function saveUpdate(){
    let promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous'); 
      img.src = mainImg.src;
      img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.filter = `blur(${inputs[0].value}px) invert(${inputs[1].value}%) sepia(${inputs[2].value}%) saturate(${inputs[3].value}%) hue-rotate(${inputs[4].value}deg)`;
      ctx.drawImage(img, 0, 0);
      resolve("result");
    } 
    })
    promise.then(
        result => {
          let link = document.createElement('a');
          link.download = 'mainImg.png';
          link.href = canvas.toDataURL();
          link.click();
          link.delete;
        }
    )
}
savePicture.addEventListener('click', saveUpdate);


let nextPicture = document.querySelector('.editor .btn-container .btn-next')
function viewBgImage(src) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        mainImg.src = `${src}`;
    };
}
let numberImage = 0;
const images = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];
let timeOfDay = ['night/', 'morning/', 'day/', 'evening/'];
let i = 0;
function getImage() {
    const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
    let date = new Date();
    const index = i % images.length;
    const imageSrc = base + timeOfDay[Math.floor(date.getHours() / 6)] + images[index];
    viewBgImage(imageSrc);
    i++;
    nextPicture.disabled = true;
    setTimeout(function() { nextPicture.disabled = false }, 1000);
}
nextPicture.addEventListener('click', getImage);