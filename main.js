var canvas = new fabric.Canvas('myCanvas');
block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});
	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
        block_x= -5;
		block_y=130;
		new_image("rr1.png");
		console.log("Red Ranger")
	}
	if(keyPressed == '71')
	{
		block_x= 140;
		block_y=130;
		new_image("gr.png");
		console.log("Green Ranger");
	}
	
	if(keyPressed == '89')
	{
		block_x= 397;
		block_y=130;
		new_image("yr.png");
		console.log("Yellow Ranger");
	}
	if(keyPressed == '66')
	{
		block_x= 500;
		block_y=150;
		new_image("br.png");
		console.log("Blue Ranger");
	}
	if(keyPressed == '80')
	{
		block_x= 1030;
		block_y=160;
		new_image("pr.png");
		console.log("Pink Ranger");
	}
	if(keyPressed == '87')
	{
		block_x= 1090;
		block_y=160;
		new_image("wr.png");
		console.log("White Ranger");
	}
	}
