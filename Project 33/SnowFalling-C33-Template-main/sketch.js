const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;
var snow,snow1,snow2,snow3;
var snowfall_img,snowfall1_img

function preload() {
 bg=loadImage("snow3.jpg")
 snowfall_img=loadImage("snow4.webp");
 snowfall1_img=loadImage("snow5.webp");
 snowfall2_img=loadImage("snow6.png");
 snowfall3_img=loadImage("snow7.png");
}

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bg); 
 Engine.update(engine);

 if (frameCount % 80 === 0) {
  snow = createSprite(100,15);
  snow.addImage("snow",snowfall_img);
  snow.scale=0.1;
  snow.velocityY=4;
  }

  if (frameCount % 100 === 0) {    
  snow1 = createSprite(300,60);
  snow1.addImage("snow1",snowfall1_img);
  snow1.scale=0.07;
  snow1.velocityY=4; 
  var rand = Math.round(random(1,5));
}

if (frameCount % 150 === 0) {
  snow2 = createSprite(600,30);
  snow2.addImage("snow2",snowfall2_img);
  snow2.scale=0.1;
  snow2.velocityY=4;
  }

  if (frameCount % 200 === 0) {
    snow3 = createSprite(750,90);
    snow3.addImage("snow3",snowfall3_img);
    snow3.scale=0.05;
    snow3.velocityY=4;
    var rand = Math.round(random(1,5));
    }

 drawSprites();
}