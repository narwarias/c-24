const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone1;

var rubber1;
var hammer1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stone1 = new Stone(700,380,50,50);
   
    ground = new Ground(600,height,1200,20)
  
   rubber1 = new Rubber(800,340,300,PI/2);
   hammer1 = new Hammer(400,100);
}

function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   stone1.display();
    
    ground.display();
    rubber1.display();
    hammer1.display();
}