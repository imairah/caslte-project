const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var building1, building2,bulding3;
var box1, box2;
var box3, box4, box5, box6;
var roof;

var ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  building1= new Building(200,150,100,200);
  building2 = new Building(100,150,100,150);
  building3 = new Building(300,150,100,150);
  box1 = new Building(85,100,130,30);
  box2 = new Building(317,100,130,30);
  box3 = new Building(200,50,20,20);
  box4 = new Building(160,50,20,20);
  box5 = new Building(240,50,20,20);

  ground = new Ground(200,400,400,20);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();
  building1.display();
  building2.display();
  building3.display();
  box1.display();
  box2.display();
 box3.display();
 box5.display();
 box4.display();
  ground.display();
}