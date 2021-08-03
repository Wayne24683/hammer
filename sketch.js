
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	plane=new Plane(600,height,1200,30);
	hammer=new Hammer(100,200)
	stone=new Stone(900,480,70,70)
	rubber=new Rubber(900,280,70,70)
  
}


function draw() {
  rectMode(CENTER);
  background('lightBlue');
  plane.display()
  hammer.display()
  stone.display()
  drawSprites();
 
}



