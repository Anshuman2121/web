var numsquare = 6
var colors = generateRandomColor(numsquare);
var squares = document.querySelectorAll(".square");
var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numsquare = 3;
    colors = generateRandomColor(numsquare);
    pickedColor =  pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];  
        }
        else{
            squares[i].style.display = "none";   //Important
        }
        
    }
});

hard.addEventListener("click",function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
    numsquare = 6;
    colors = generateRandomColor(numsquare);
    pickedColor =  pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];  
        squares[i].style.display = "block";   //Important
             
    }
});

reset.addEventListener("click",function(){
    colors = generateRandomColor(numsquare);
    pickedColor =  pickColor();
    colorDisplay.textContent = pickedColor;
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index];}
    h1.style.backgroundColor="steelblue";
    reset.textContent = "New Game"
});

for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];
    //instead of use background use backgroundColor as it is compatible in most browser(mozilla)

    //Event Listner
    squares[index].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        console.log( clickedColor, pickedColor);
        if (clickedColor === pickedColor){
            message.textContent = "correct";
            reset.textContent = "Play Again?"
            changeColor(pickedColor);
            h1.style.backgroundColor=pickedColor;
        }
        else{
            this.style.backgroundColor = "rgb(31, 24, 24)";
            message.textContent = "Retry";
        }
    });

function changeColor(color){
    for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = color;
    }   
}
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];    //important
}

function generateRandomColor(num){
    var arr = [];
    for (let index = 0; index < num; index++) {
        arr.push(randomColor());
        
    }
return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);    //multiply 1+ to generate teh number
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}