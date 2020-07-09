var numberOfSquares=6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;  
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1"); 
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            //unselecting the buttons
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            //selecting the selected one
            this.classList.add("selected");
            //no of square to be shown
            if(this.textContent === "Easy"){
                numberOfSquares=3;
            }
            else{
                numberOfSquares=6;
            }
            reset();
        });
    }

    for(var i=0;i<squares.length;i++){
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
    reset();

}



function reset(){
     //generate new colors
     colors = generateRandomColors(numberOfSquares);
     //pick a new random color
     pickedColor = pickColor();
     //change colordisplay to match picked color
     colorDisplay.textContent=pickedColor;
     resetButton.textContent="New Colors";  
     //change colors of square    
     for(var i=0;i<squares.length;i++){
         if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.backgroundColor = colors[i];
        }
        else{
        squares[i].style.display ="None";
        } 
    } 
     h1.style.background="steelblue";

}

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colordisplay to match picked color
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors";  
    //change colors of square    
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];  
    } 
    h1.style.background="steelblue";
})
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