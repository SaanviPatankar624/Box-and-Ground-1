const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;

var engine,world;
var box1,box2;
var ground;

function setup() {
 var canvas = createCanvas(1000,1000);
 engine = Engine.create();
 world  = engine.world;

 box1  = new Box(200,300,50,50);
 box2  = new Box(240,100,50,100);
 ground = new Ground(10,500,1000,10);
}

function draw() {
  background("white");
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();

  
}
