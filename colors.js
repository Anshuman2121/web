var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");

for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];
    //instead of use background use backgroundColor as it is compatible in most browser(mozilla)

    //Event Listner
    squares[index].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        console.log( clickedColor, pickedColor);
        if (clickedColor === pickedColor){
            message.textContent = "correct";
            changeColor(pickedColor);
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
    var random = Math.floor(Math.random() * colors.length + 2);
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