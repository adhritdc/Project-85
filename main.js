//Reference for canvas here!
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Specific height and width to the car image here!
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Initial position for a car image here!
greencar_x = 5;
greencar_y = 225;

function add() {
	//Uploaded car, and background images on the canvas here!
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Defined function ‘uploadBackground’ here!
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Defined function ‘uploadgreencar’ here!
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Defined function to move the car upward here!
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Defined function to move the car downward here!
	if (greencar_y <= 500) {
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Defined function to move the car left side here!
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10;
		console.log("When left arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Defined function to move the car right side here!
	if (greencar_x <= 900) {
		greencar_x = greencar_x + 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
