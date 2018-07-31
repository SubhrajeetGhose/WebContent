var numSquare=6;
var colors=generateRandomColors(numSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var ColorDisplay=document.getElementById("ColorDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#New");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");

var messageDisplay=document.querySelector("#message");

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquare=3;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	ColorDisplay.textContent=pickedColor;
	for(var k=0;k < squares.length;k++)
	{
		if(colors[k])
		{
			squares[k].style.background=colors[k];
		}
		else
		{
			squares[k].style.display="none";
		}
	}
	
});

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquare=6;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	ColorDisplay.textContent=pickedColor;
	for(var k=0;k < squares.length;k++)
	{
			squares[k].style.background=colors[k];
			squares[k].style.display="block";
		
	}
	
});



resetButton.addEventListener("click",function(){
	
	messageDisplay.textContent="";
	
	//generate new colors
	colors=generateRandomColors(6);
	//pick new color from random array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	ColorDisplay.textContent=pickedColor;
	//change color of squares
	for(var k=0;k < squares.length;k++)
	{
		squares[k].style.background=colors[k];
	}
	
	h1.style.background="steelblue";
	resetButton.textContent="NEW COLORS";
});





ColorDisplay.textContent=pickedColor;

for(var k=0;k < squares.length;k++)
{
	//adding initial colors
	squares[k].style.background=colors[k];
	
	//add click listener to the squares
	squares[k].addEventListener("click",function()
	{
		//grab color of clicked square
		var clickedColor=this.style.background;
		//compare color to picked color
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
			//Changing th background color
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again";
			}
		else
		{
			this.style.background="#232323" ;
			messageDisplay.textContent="Try Again";
		}				
	});
}

function changeColor(Color){
	for(var i=0;i< colors.length;i++)
		{
			squares[i].style.background=Color;
		}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr=[];
	//repeat num times
	for(var i=0;i<num;i++){
		//get random color and push it into array
		arr.push(randomColor()); 
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a blue from 0-256
	var b=Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g=Math.floor(Math.random()*256);
	
	return "rgb(" + r +", " + g +", " + b +")"; 
}