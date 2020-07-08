var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1"); 
var easybtn = document.querySelector("#easyBtn")
var hardbtn = document.querySelector("#hardBtn")

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numberOfSquares=3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display ="None";
        }
    }
});
hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numberOfSquares=6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display ="block";
    }

});

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colordisplay to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of square    
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];  
    } 
    h1.style.background="steelblue";
})
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    //add click listner to square
    squares[i].addEventListener("click",function(){
    //grab color of clicked square
    var clickedColor=this.style.backgroundColor;
    //compare color to  pickedcolor 
    if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    }
    else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent = "Try Again";
    }
});
}
function changeColors(color){
    for(var i=0;i<colors.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random =Math.floor(Math.random() * colors.length) // generates no from 0 to 5
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i=0;i<num;i++){
        arr[i] = randomColors();
    }
    return arr;
}

function randomColors(){
    //generates no between 0-255
   var red =  Math.floor(Math.random()*256);
   var green =  Math.floor(Math.random()*256);
   var blue =  Math.floor(Math.random()*256);
   return "rgb("+ red +", " + green + ", " + blue + ")";

}