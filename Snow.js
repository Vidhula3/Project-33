class Snow{
constructor(x,y,width,height){
var options={
    'friction':0.1,
    'density':0.2
}
 this.body=Bodies.rectangle(x,y,width,height,options)
 this.width=width
 this.height=height

 World.add(world,this.body)
}

display(){

    if (frameCount % 10 === 0) {
    snow = createSprite(random(800,400),0,1000,1000);
    snow.addImage("snow",snowfall_img);
    snow.scale=0.1;
    var rand = Math.round(random(1,5));
    snow.velocityY=4;
    }
}
}
