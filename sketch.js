const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;
var snow,snow4;
var snowfall_img;

function preload() {
 bg=loadImage("snow3.jpg")
 snowfall_img=loadImage("snow4.webp");

}

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow=new Snow(300,100,10,10)
}

function draw() {
  background(bg); 
 Engine.update(engine);

  snow.display();
}