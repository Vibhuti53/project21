var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,60,20);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color("white");
}
function draw() {
  background("black"); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor = color("red");
    }
    if(damage<10){
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}
 