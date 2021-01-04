const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

function setup() {
createCanvas(1500, 800)
engine = Engine.create();
world = engine.world;

ground = new Ground(750, 790, 1500, 20);
block1 = new Box(700, 100);
block2 = new Box(700, 100);
block3 = new Box(700, 100);
block4 = new Box(700, 100);
block5 = new Box(700, 100);
block6 = new Box(700, 100);
block7 = new Box(700, 100);
block8 = new Box(700, 100);

ball1 = new Ball(200, 200, 50);

rope = new Rope(ball1.body, {x : 200, y : 50});

  

}

function draw() {
  background(180);

  Engine.update(engine);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  ball.display();

  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x : mouseX, y : mouseY});
}




