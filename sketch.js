var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var count = 0;
var boxpart1, boxpart2, boxpart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxpart1=createSprite(400, 650, 200, 20);
    boxpart1.shapeColor=color("red");
	boxpart2=createSprite(300, 610, 20, 100);
    boxpart2.shapeColor=color("red");
	boxpart3=createSprite(500, 610, 20, 100);
    boxpart3.shapeColor=color("red");
    
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.restitution =1;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Matter.Body.setScale(1);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x;
  //packageSprite.y= packageBody.position.y;
  keyPressed();
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.velocityY=5;
	if(packageSprite.isTouching(boxpart1)){
		packageSprite.velocityY=-1;
		count = count + 1;
		if(count > 25){
			packageSprite.velocityY=0;
		}
	}    
  }
}



