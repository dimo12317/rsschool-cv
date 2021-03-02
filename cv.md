[rsschool-cv](https://github.com/dimo12317/rsschool-cv)

# Dima Rzheutckiy
### Contacts
[vk](https://vk.com/id497573617)

[mail](https://e.mail.ru/inbox/?utm_source=portal&utm_medium=portal_navigation&utm_campaign=e.mail.ru)

MTC +375292162852
## Information about me:
I am a student of the 3 year of BSUIR, I've eaned money on programming by making laboratory works to other students. I studied js from online books learn.javascript.ru, attended many GIO ACADEMY broadcasts. I want to finish this course and start implementing my knowledge at work
## Skils
HTML, CSS, JS, C++
## Code examples
JS
```JavaScript
var Index;
var Answer = document.getElementById("conclusion")
var Start = true;
seven.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "7"
    }
    else{
        Answer.innerHTML += "7";
    }
}
eight.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "8"
    }
    else{
        Answer.innerHTML += "8";
    }
}
nine.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "9"
    }
    else{
        Answer.innerHTML += "9";
    }
}
one.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "1"
    }
    else{
        Answer.innerHTML += "1";
    }
}
two.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "2"
    }
    else{
        Answer.innerHTML += "2";
    }
}
three.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "3"
    }
    else{
        Answer.innerHTML += "3";
    }
}
four.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "4"
    }
    else{
        Answer.innerHTML += "4";
    }
}
five.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "5"
    }
    else{
        Answer.innerHTML += "5";
    }
}
six.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "6"
    }
    else{
        Answer.innerHTML += "6";
    }
}
Null.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "0"
    }
    else{
        Answer.innerHTML += "0";
    }
}


cooldown.onclick = function(){
    Start = true;
    Index = undefined;
    Answer.innerHTML = "0";
}

summa.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "+"
    }
    else{
        Answer.innerHTML += "+";
    }
}
minus.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "-"
    }
    else{
        Answer.innerHTML += "-";
    }
}
division.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "/"
    }
    else{
        Answer.innerHTML += "/";
    }
}
multiplication.onclick = function(){
    if(Start === true){
        Start = false;
        Answer.innerHTML = "*"
    }
    else{
        Answer.innerHTML += "*";
    }
}

equally.onclick = function(){
    if(isNaN(Answer.innerHTML[Answer.innerHTML.length-1])){
    }
    else{
        let MasNumber = [];
        let MasFunction = [];
        let MasNumberA = -1;
        let MasFunctionA=-1;
        if(Answer.innerHTML[0] === "*" || Answer.innerHTML[0] === "/")
        {
            Answer.innerHTML = "Mistake";
                Start = true;
                return;
        }
        for(let i = 0;i<Answer.innerHTML.length;i++){
            if(!isNaN(Number(Answer.innerHTML[i]))){
                if(Index != "number")
                    ++MasNumberA;
                if(MasNumber[MasNumberA] === undefined){
                    MasNumber[MasNumberA] = Number(Answer.innerHTML[i])
                }else{
                    MasNumber[MasNumberA] = MasNumber[MasNumberA]*10 + Number(Answer.innerHTML[i]);
                }
                Index = "number";
            }
            else if(isNaN(Number(Answer.innerHTML[i+1])) && Answer.innerHTML[i+1] != undefined ){
                Answer.innerHTML = "Mistake";
                Start = true;
                return;
            }
            else{
                if(Answer.innerHTML[i] === "*" || Answer.innerHTML[i] === "/"){
                    ++MasFunctionA;
                    MasFunction[MasFunctionA] = Answer.innerHTML[i];
                    Index = "NotNamber";
                }else{
                    ++MasFunctionA;
                    MasFunction[MasFunctionA] = Answer.innerHTML[i];
                    Index = "NotNamber";
                }
            }
        }
        console.log(MasNumber, MasFunction)
        while(MasFunction.length != 0){
            console.log(MasFunction.length);
            console.log(MasNumber.length);
            for(let i=0;i<MasFunction.length;i++){
                if(MasFunction[i] === "*" || MasFunction[MasFunctionA] === "/"){
                    if(MasFunction[i] === "*"){
                        let param;
                        param=MasNumber[i]*MasNumber[i+1];
                        MasNumber.splice(i,2,param);
                        MasFunction.splice(i,1);
                    }
                    if(MasFunction[i] === "/"){
                        let param;
                        param=MasNumber[i]/MasNumber[i+1];
                        MasNumber.splice(i,2,param);
                        MasFunction.splice(i,1);
                    }
                    i = 0;
                }
            }
            for(let i=0;i<MasFunction.length;i++){
                if(MasFunction[i] === "+"){
                    let param;
                    param=MasNumber[i]+MasNumber[i+1];
                    MasNumber.splice(i,2,param);
                    MasFunction.splice(i,1);
                }
                if(MasFunction[i] === "-"){
                    let param;
                    param=MasNumber[i]+MasNumber[i+1];
                    MasNumber.splice(i,2,param);
                    MasFunction.splice(i,1);
                }
                i = 0;
            }
        }
        Answer.innerHTML = MasNumber[0];
    }
}
```
HTML
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>calculator</title>
</head>
<body>
    <header>
        <div class="header_logo">Calculator</div>
    </header>
<main>
    <table class="Table">
        <tr>
            <th colspan="4"><div id="conclusion" class="start">0</div></th>
        </tr>
        <tr>
            <td colspan="3"><input id="cooldown" class="Button" type="button" value="C"></td>
            <td><input id="division" class="Button" type="button" value="/"></td>
        </tr>
        <tr>
            <td><input id="seven" class="Button" type="button" value="7"></td>
            <td><input id="eight" class="Button" type="button" value="8"></td>
            <td><input id="nine" class="Button" type="button" value="9"></td>
            <td><input id="multiplication" class="Button" type="button" value="*"></td>
        </tr>
        <tr>
            <td><input id="four" class="Button" type="button" value="4"></td>
            <td><input id="five" class="Button" type="button" value="5"></td>
            <td><input id="six" class="Button" type="button" value="6"></td>
            <td><input id="minus" class="Button" type="button" value="-"></td>
        </tr>
        <tr>
            <td><input id="one" class="Button" type="button" value="1"></td>
            <td><input id="two" class="Button" type="button" value="2"></td>
            <td><input id="three" class="Button" type="button" value="3"></td>
            <td><input id="summa" class="Button" type="button" value="+"></td>
        </tr>
        <tr>
            <td colspan="3"><input id="Null" class="Button" type="button" value="0"></td>
            <td><input id="equally" class="Button" type="button" value="="></td>
        </tr>
    </table>

</main>
    
<script src="script.js"></script>
</body>
</html>
```
CSS
``` CSS
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
header{
    width: 100%;
    background-color: salmon;
    display: flex;
}
.header_logo{
    text-transform: uppercase;
    color: white;
    font-weight: 800;
    font-size: 60px;
    cursor: pointer;
    margin-top: 56px;
    margin-left: 36%;
}



.start{
    text-align: right;
    ba
}
td{
    text-align: center;
    cursor: pointer;
    border: solid 2px black;
}
table{
    border: 6px solid red;
    width: 500px;
    font-size: 50px;
    margin-top: 50px;
    margin-left: 33%;
}
.Button{
    height: 60px;
    width: 60px;
}

```
## work experience
in the future)
## Education
3nd course of BSUIR on the specialty Information systems and technologies. Glo Academy intensive courses.
## English
My level of English is enough to watch TV shows and films in the original, I can also speak English on general topic.
