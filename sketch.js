
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var ground1;
var boy,boyImg;
var stone1;
var mango1, mango2, mango3, mango4, mango4, mango5;

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

	stone1 = new stone(310,420,35,35);

	boy = Bodies.rectangle(300,395,150,200,static);
	World.add(world,boy);
	
	mango1 = new Mango(930,330,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree1.display();
  ground1.display();
  mango1.display();

  image(boyImg,boy.position.x,boy.position.y,150,200);

  stone1.display();
  
  drawSprites();
 
}



