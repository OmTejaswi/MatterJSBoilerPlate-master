
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var ground1;
var boy,boyImg;

function preload()
{
boyImg = loadImage("assest/boy.png");
	
}

function setup() {
	createCanvas(1280, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new tree(900,206,350,350);
	ground1 = new Ground(640,550,1280,5);

	var static = {
		isStatic: true
	}

	boy = Bodies.rectangle(300,395,150,200,static);
	World.add(world,boy);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree1.display();
  ground1.display();

  image(boyImg,boy.position.x,boy.position.y,150,200);
  
  drawSprites();
 
}



