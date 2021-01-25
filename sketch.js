
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var ground1;
var boy,boyImg;
var stone1;
var mango1, mango2, mango3, mango4, mango4, mango5;
var chain1;

function preload()
{
boyImg = loadImage("assest/boy.png");
	
}

function setup() {
	createCanvas(1280, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new tree(1055,380,350,350);
	ground1 = new Ground(640,550,1280,5);

	var static = {
		isStatic: true
	}

	stone1 = new stone(355,460,35,35);

	boy = Bodies.rectangle(400,495,0,0,static);
	World.add(world,boy);
	
	mango1 = new Mango(970,320,40,40);
	mango2 = new Mango(1020,260,40,40);
	mango3 = new Mango(1080,320,40,40);
	mango4 = new Mango(1100,240,40,40);
	mango5 = new Mango(1160,320,40,40);

	chain1 = new chain(stone1.body,{x: boy.position.x-50, y:boy.position.y-45})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain1.display();


  push();
  imageMode(CENTER);
  image(boyImg,boy.position.x,boy.position.y,150,200);
  pop();

  stone1.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  
  drawSprites();
 
}

function detectCollision(bodyA, bodyB) {
	var bodyAPosition = bodyA.body.position;
	var bodyBPosition = bodyB.body.position;

	var distance = dist(bodyAPosition.x,bodyAPosition.y,bodyBPosition.x,bodyBPosition.y);

	if(distance<=bodyA.r + bodyB.r){
		Matter.Body.setStatic(bodyB.body, false)
	}
}
 