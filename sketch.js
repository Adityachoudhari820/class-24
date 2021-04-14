const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var iron, hammer , stone, rubber;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    iron = new Iron(700,320,70,70);

    hammer = new Hammer(100,100);

    stone = new Stone(200,320,70,70);

    rubber= new Rubber(500,320,70,70);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    iron.display();
    hammer.display();
    stone.display();
    rubber.display();
}