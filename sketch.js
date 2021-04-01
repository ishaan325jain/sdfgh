
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var rope,ground,stone,mango1,mango2,mango3,mango4,mango5,tree,boy ;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
    world = engine.world;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree   = new    Tree  (1000,400,400,600);
	mango1  = new    Mango (1000,150,50,50);
	mango2  = new    Mango (900,200,50,50);
	mango3  = new    Mango (940,230,50,50);
	mango4  = new    Mango (900,300,50,50);
	mango5  = new    Mango (1100,360,50,50);
	boy    = new     Boy  (200,600,120,300);
	stone  = new   Stone (100,600,100,100);
	rope   = new Rope(stone.body,{x:160,y:530});
	ground = new  Ground(600,680,1200,20);

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(247,247,247);


 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display(); 
  rope.display(); 
  ground.display();
  
  drawSprites();
 
  
}
/*
function detectollision (){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var  distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y); 
     if  (distance<=lmango.r+lstone.r )
	 {
		Matter.body.setStatic(lmango,false); 
	 }
}*/